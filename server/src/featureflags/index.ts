import type {
  ApplicationEnvironment,
  SimpleValue,
  UUID,
} from 'common/types/index.ts';
import type { RequestContext } from 'server/src/RequestContext.ts';
import { FeatureFlags as CommonFeatureFlags } from 'common/const/FeatureFlags.ts';
import type { FeatureFlag } from 'common/const/FeatureFlags.ts';
import type { Viewer } from 'server/src/auth/index.ts';
import type { ApplicationEntity } from 'server/src/entity/application/ApplicationEntity.ts';
import {
  DEFAULT_MENTION_NOTIFICATION_V2_TEMPLATE_ID,
  DEFAULT_SHARE_TO_EMAIL_TEMPLATE_ID,
  DEFAULT_THREAD_RESOLVE_TEMPLATE_ID,
} from 'server/src/email/index.ts';

// ADD NEW FLAGS HERE IF THEY ARE ONLY USED SERVER-SIDE.
// If the new flag is also going to be used client side (in external/)
// then add your new flag in common/const/FeatureFlags.ts
//
// See more explanation on how to define in flags in:
// common/const/FeatureFlags.ts
const ServerOnlyFeatureFlags = {
  QUERY_PARAM_DEEP_LINKS: {
    key: 'query_param_deep_links',
    defaultValue: false,
  } as FeatureFlag<'query_param_deep_links', boolean>,
  NOTIFY_PAGE_VISITORS_OF_EVERY_MESSAGE: {
    key: 'notify_page_visitors_of_every_new_message',
    defaultValue: false,
  } as FeatureFlag<'notify_page_visitors_of_every_new_message', boolean>,
  USER_IS_BLOCKED: {
    key: 'user_is_blocked',
    defaultValue: false,
  } as FeatureFlag<'user_is_blocked', boolean>,
  SHOW_CORD_COPY_IN_TASKS: {
    key: 'show-cord-copy-in-tasks',
    defaultValue: true,
  } as FeatureFlag<'show-cord-copy-in-tasks', boolean>,
  LOADER_CACHES: {
    key: 'loader_caches',
    defaultValue: true,
  } as FeatureFlag<'loader_caches', boolean>,
  SUBSCRIBE_ALL_ORG_MEMBERS: {
    key: 'subscribe_all_org_members',
    defaultValue: false,
  },
  WRITE_TO_EVENTS_TABLE: {
    key: 'write_to_events_table',
    defaultValue: true,
  },
  ALLOW_MAGIC_GRAPHQL_ORG_ID_OVERRIDE: {
    key: 'allow-magic-graph-ql-org-id-override',
    defaultValue: true,
  },
  GRANULAR_PERMISSIONS: {
    key: 'granular-permissions',
    defaultValue: false,
  },
  SKIP_PUBLISH_USER_IDENTITY_UPDATE: {
    key: 'skip_publish_user_identity_update',
    defaultValue: false,
  },
  RATE_LIMITS: {
    key: 'rate_limits',
    defaultValue: { maxCount: 50000, seconds: 5 * 60 },
  },
  EMAIL_NOTIFICATION_TEMPLATE_ID: {
    key: 'email-notification-template-id',
    defaultValue: {
      mention: DEFAULT_MENTION_NOTIFICATION_V2_TEMPLATE_ID,
      share_to_email: DEFAULT_SHARE_TO_EMAIL_TEMPLATE_ID,
      thread_resolve: DEFAULT_THREAD_RESOLVE_TEMPLATE_ID,
    },
  },
  EMAIL_REPLIES: {
    key: 'email_replies',
    defaultValue: true,
  } as FeatureFlag<'email_replies', boolean>,
} as const;

export const FeatureFlags = {
  ...CommonFeatureFlags,
  ...ServerOnlyFeatureFlags,
} as const satisfies {
  [key: string]: FeatureFlag<string, SimpleValue | object>;
};

type MockClient =
  | undefined
  | ((
      key: string,
      user: FlagsUser,
    ) => Promise<boolean | string | number | null>);
// This is used in our test environments
let mockClient: MockClient;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function initFeatureFlags() {}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function closeFeatureFlags() {}

export type FlagsUser = {
  userID: UUID | 'anonymous';
  orgID?: UUID;
  platformApplicationID: UUID | 'extension' | 'console';
  version: string | null;
  customerID?: UUID;
  appEnvironment?: ApplicationEnvironment;
};

/**
 * Prefer flagsUserFromContext if you have a full context, as it has more info
 * in it.
 */
export function flagsUserFromViewer(viewer: Viewer): FlagsUser {
  return {
    userID: viewer.userID ?? 'anonymous',
    orgID: viewer.orgID,
    platformApplicationID: viewer.platformApplicationID ?? 'extension',
    version: null,
  };
}

export function flagsUserFromContext(context: RequestContext): FlagsUser {
  return {
    ...flagsUserFromViewer(context.session.viewer),
    version: context.clientVersion,
    customerID: context.application?.customerID,
  };
}

/**
 * For the REST API etc where there isn't a user. Prefer one of the other
 * functions if there is a user.
 */
export function flagsUserFromApplication(app: ApplicationEntity): FlagsUser {
  return {
    userID: 'anonymous',
    platformApplicationID: app.id,
    version: null,
    customerID: app.customerID,
  };
}

/**
 * Returns the value of the given feature flag in LaunchDarkly for the given
 * user, or the default value if LaunchDarkly cannot be reached for any reason.
 */
export async function getTypedFeatureFlagValue<
  K extends (typeof FeatureFlags)[keyof typeof FeatureFlags]['key'],
  T,
>(feature: FeatureFlag<K, T>, user: FlagsUser): Promise<T> {
  const value = (await getFeatureFlagValue(feature.key, user)) as T | null;
  return value === null ? feature.defaultValue : value;
}

export async function getFeatureFlagValue(key: string, user: FlagsUser) {
  // To allow us to mock feature flags for our tests
  if (mockClient) {
    return await mockClient(key, user);
  }
  return null;
}

export function initMockFeatureFlagForTest(fn: MockClient) {
  mockClient = fn;
}
