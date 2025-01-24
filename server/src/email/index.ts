import * as jwt from 'jsonwebtoken';
import type { UUID } from 'common/types/index.ts';
import env from 'server/src/config/Env.ts';
import type { CustomEmailTemplate } from 'server/src/entity/application/ApplicationEntity.ts';
import type { ThreadDetails } from 'server/src/util/email.ts';
import type { EmailOutboundNotificationEntity } from 'server/src/entity/email_notification/EmailOutboundNotificationEntity.ts';
import type { RequestContext } from 'server/src/RequestContext.ts';
import { CustomerEntity } from 'server/src/entity/customer/CustomerEntity.ts';
import type { NotificationType } from 'server/src/entity/notification/NotificationEntity.ts';

export const DEFAULT_MENTION_NOTIFICATION_V2_TEMPLATE_ID =
  process.env.DEFAULT_MENTION_NOTIFICATION_V2_TEMPLATE_ID ||
  'd-6309e6ccb36a4a769957795f475c8130';
export const MENTION_NOTIFICATION_NO_POWERED_BY_CORD_TEMPLATE_ID =
  process.env.MENTION_NOTIFICATION_NO_POWERED_BY_CORD_TEMPLATE_ID ||
  'd-8a8088e59eed4622b2d09078de372fe8';
export const DEFAULT_SHARE_TO_EMAIL_TEMPLATE_ID =
  process.env.DEFAULT_SHARE_TO_EMAIL_TEMPLATE_ID ||
  'd-fecc876acf684ff2bca887748d86e4e1';
export const SHARE_TO_EMAIL_NO_POWERED_BY_CORD_TEMPLATE_ID =
  process.env.SHARE_TO_EMAIL_NO_POWERED_BY_CORD_TEMPLATE_ID ||
  'd-b70dc2c71ee541ee9e0c5f4cd84b32e3';
export const DEFAULT_THREAD_RESOLVE_TEMPLATE_ID =
  process.env.DEFAULT_THREAD_RESOLVE_TEMPLATE_ID ||
  'd-93aa618e7d0b4ba593c346f9a1f664c5';
export const THREAD_RESOLVE_NO_POWERED_BY_CORD_TEMPLATE_ID =
  process.env.THREAD_RESOLVE_NO_POWERED_BY_CORD_TEMPLATE_ID ||
  'd-37c14e17cc9649afb70495f029b3833d';

type UnsubscribeThreadTokenData = {
  threadID: UUID;
  userID: UUID;
  orgID: UUID;
  appID: UUID | null;
};

export type ActionIcon = 'mention' | 'task' | 'paperclip';

export const encodeUnsubscribeThreadToken = (
  data: UnsubscribeThreadTokenData,
) => jwt.sign(data, env.EMAIL_LINKS_TOKEN_SECRET, { algorithm: 'HS512' });

export const decodeUnsubscribeThreadToken = (token: string) =>
  jwt.verify(token, env.EMAIL_LINKS_TOKEN_SECRET, {
    algorithms: ['HS512'],
  }) as UnsubscribeThreadTokenData;

export type SendActionEmailNotificationData = {
  context: RequestContext;
  recipientEmail: string;
  actionText: string;
  actionIconType: ActionIcon;
  pageName: string;
  pageURL: string;
  providerName: string | undefined;
  unsubscribeURL: string;
  partnerDetails: CustomEmailTemplate | undefined;
  threadDetails: ThreadDetails;
  emailNotification: EmailOutboundNotificationEntity;
  /** You can edit templates in SendGrid */
  templateId: string;
  notificationType: NotificationType;
};
/*
  Common function used to send thread-action and reply notifications.
  They are similar in that they both notify of an action eg resolving
  /unresolving a thread or a reply or @mention message.
  */
export async function sendActionEmailNotification(
  _: SendActionEmailNotificationData,
) {
  return process.env.IS_TEST;
}

// the EmailEmail repetition is intentional
export function sendShareThreadToEmailEmail(
  _context: RequestContext,
  _recipientEmail: string,
  _pageName: string,
  _pageURL: string,
  _partnerDetails: CustomEmailTemplate | undefined,
  _threadDetails: ThreadDetails,
  _emailNotification: EmailOutboundNotificationEntity | null,
  _templateID: string,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
) {
  return !!process.env.IS_TEST;
}

export async function sendEmailInviteConsoleUser(
  _context: RequestContext,
  _recipientEmail: string,
  _inviterName: string,
  _customerID: UUID,
) {
  return !!process.env.IS_TEST;
}

export async function sendAccessGrantedEmailToConsoleUser(
  _context: RequestContext,
  _recipientEmail: string,
  _customer: CustomerEntity,
) {
  return !!process.env.IS_TEST;
}

export async function sendAccessDeniedEmailToConsoleUser(
  _context: RequestContext,
  _recipientEmail: string,
  _customer: CustomerEntity,
) {
  return !!process.env.IS_TEST;
}

/**
 * Used for when a console user requests access to an existing customer
 */
async function sendRequestAccessEmailToConsoleUser(
  _context: RequestContext,
  _recipientEmail: string,
  _requesterEmail: string,
  _customerName: string,
  _customerID: UUID,
) {
  return !!process.env.IS_TEST;
}

export async function sendAccessRequestToCustomerConsoleUsers(
  context: RequestContext,
  requesterEmail: string,
  customerID: UUID,
) {
  if (process.env.IS_TEST) {
    return;
  }

  const customer = await CustomerEntity.findByPk(customerID);

  if (!customer) {
    throw new Error('No customer, no customer invite!');
  }
  const approvedCustomerConsoleUsers =
    await context.loaders.consoleUserLoader.loadConsoleUsersForCustomer(
      customerID,
    );

  if (approvedCustomerConsoleUsers.length === 0) {
    throw new Error('No console users in this customer');
  }

  return await Promise.all(
    approvedCustomerConsoleUsers.map((consoleUser) =>
      sendRequestAccessEmailToConsoleUser(
        context,
        consoleUser.email,
        requesterEmail,
        customer.name,
        customer.id,
      ),
    ),
  );
}
