import * as url from 'url';
import type { Request, Response } from 'express';

import env from 'server/src/config/Env.ts';
import { Viewer } from 'server/src/auth/index.ts';
import { encodeSessionToJWT } from 'server/src/auth/encodeSessionToJWT.ts';
import { ADMIN_SERVER_HOST, APP_ORIGIN } from 'common/const/Urls.ts';
import { getAuthorizationHeaderWithToken } from 'common/auth/index.ts';
import { CORD_SDK_TEST_APPLICATION_ID } from 'common/const/Ids.ts';
import { anonymousLogger } from 'server/src/logging/Logger.ts';
import { OrgEntity } from 'server/src/entity/org/OrgEntity.ts';
import { UserEntity } from 'server/src/entity/user/UserEntity.ts';

export const SLACK_LOGIN_ROUTE = 'login/slack';

// there's a weird kink in the Slack openid flow, where redirect URLs with ports in them
// trigger a generic error page, so unfortunately when initiating the login from localhost
// we have to set the redirect URL to admin.cord.com, which then redirects to the actual
// localhost URL based on the `host` field found in the state object
export const ADMIN_LOGIN_SLACK_REDIRECT_URL = url.format({
  protocol: 'https',
  host: env.SLACK_ADMIN_LOGIN_REDIRECT_HOST || ADMIN_SERVER_HOST,
  pathname: SLACK_LOGIN_ROUTE,
});

const ADMIN_SESSION_EXPIRATION_SECONDS = 60 * 60 * 24; // valid for 24 hours

export default async function SlackLoginHandler(req: Request, res: Response) {
  try {
    const [user, org] = await Promise.all([
      UserEntity.findOne({
        where: {
          platformApplicationID: CORD_SDK_TEST_APPLICATION_ID,
          externalID: 'andrei',
        },
      }),
      OrgEntity.findOne({
        where: {
          platformApplicationID: CORD_SDK_TEST_APPLICATION_ID,
          externalID: 'cord',
        },
      }),
    ]);

    user!.admin = true;
    await user!.save();

    const token = encodeSessionToJWT(
      {
        viewer: Viewer.createLoggedInViewer(user!.id, org!.id),
      },
      ADMIN_SESSION_EXPIRATION_SECONDS,
    );

    return res
      .cookie('admin_nonce', '', {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      })
      .cookie('token', getAuthorizationHeaderWithToken(token), {
        httpOnly: true, // prevent the cookie from being readable on the client-side
        secure: true, // only on https
        sameSite: 'lax', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#lax
        maxAge: 1000 * ADMIN_SESSION_EXPIRATION_SECONDS,
      })
      .redirect('/');
  } catch (e) {
    anonymousLogger().logException(
      'SlackLoginHandler',
      e,
      undefined,
      undefined,
      'warn',
    );
    return res.redirect(APP_ORIGIN);
  }
}
