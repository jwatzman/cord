// @generated
// to regenerate, run "npm run codegen"
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { GraphQLScalarType } from 'graphql';
import type { Mapping } from 'server/src/schema/mapping.ts';
import type { RequestContext } from 'server/src/RequestContext.ts';
import type { Maybe, Nullable } from 'common/types/index.ts';

// MatchingKeys<Type, EntityType> returns the keys (names of fields) of
// EntityType that also exist in Type and the type of those keys in EntityType
// are assignable to types of those keys on Type. (ie. "key" is returned if
// EntityType.key is assignable to Type.key).
//
// An example:
// MatchingKeys<
//  {name: string; age: number | null;  nicknames: string[];}, // Type
//  {name: string; age: number; fullName?: string;} // EntityType
// > =
// {
//    name: "name";
//    age: "age";
//    fullName: never;  // because "fullName" extends keyof Type is false
// }["name" | "age" | "fullName"]
//
// which returns "name" | "age" because only EntityType.{name, age} can be
// assigned to Type.{name, age}
type MatchingKeys<Type, EntityType> = {
  [Key in keyof EntityType]-?: Key extends keyof Type
    ? EntityType[Key] extends Type[Key]
      ? Key
      : never
    : never;
}[keyof EntityType];

// MakeExistingFieldsOptional takes a Resolver type and makes some of its
// fields ?optional. The fields that are made optional are those that are
// shared between the GqlType and the MappedType (e.g. between Thread and
// ThreadEntity).
type MakeExistingFieldsOptional<Resolver, GqlType, MappedType> = {
  [K in MatchingKeys<GqlType, MappedType>]?: K extends keyof Resolver
    ? Resolver[K]
    : never;
} & {
  [K in Exclude<
    keyof Resolver,
    MatchingKeys<GqlType, MappedType>
  >]: Resolver[K];
};

// M is used for remapping some types to other types (mostly to entities)
// M['ObjectName'] maps ObjectName type to:
// a) either to a new type (e.g. M['User'] is UserEntity defined in Mapping)
// b) or if 'ObjectName' does not appear in Mapping then it is mapped to the
//    graphql type (e.g. M['DocumentLocation'] is DocumentLocation)
type M = Mapping & Omit<NameToType, keyof Mapping>;

type Int = number;
type Float = number;

type DateTime = Mapping['DateTime'];

type ElementIdentifierVersion = Mapping['ElementIdentifierVersion'];

type SimpleValue = Mapping['SimpleValue'];

type JSON = Mapping['JSON'];

type JSONObject = Mapping['JSONObject'];

type Context = Mapping['Context'];

type Metadata = Mapping['Metadata'];

type SimpleTranslationParameters = Mapping['SimpleTranslationParameters'];

type MessageContent = Mapping['MessageContent'];

type UUID = Mapping['UUID'];

type JsonObjectReducerData = Mapping['JsonObjectReducerData'];

export type Message = {
  id: M['UUID'];
  externalID: M['String'];
  attachments: Array<M['MessageAttachment']>;
  thread: M['Thread'];
  content: Maybe<M['MessageContent']>;
  source: M['MessageSource'];
  timestamp: M['DateTime'];
  reactions: Array<M['MessageReaction']>;
  seen: M['Boolean'];
  seenBy: Array<M['User']>;
  url: Maybe<M['String']>;
  deletedTimestamp: Maybe<M['DateTime']>;
  lastUpdatedTimestamp: Maybe<M['DateTime']>;
  importedFromSlackChannel: Maybe<M['String']>;
  referencedUserData: Array<M['ReferencedUserData']>;
  task: Maybe<M['Task']>;
  importedSlackMessageType: Maybe<M['ImportedSlackMessageType']>;
  slackURL: Maybe<M['String']>;
  isFromEmailReply: M['Boolean'];
  type: M['MessageType'];
  iconURL: Maybe<M['String']>;
  translationKey: Maybe<M['String']>;
  metadata: M['Metadata'];
  extraClassnames: Maybe<M['String']>;
  skipLinkPreviews: M['Boolean'];
};

export type ReferencedUserData = {
  id: M['UUID'];
  name: Maybe<M['String']>;
};

export type MessageAttachment =
  | M['MessageFileAttachment']
  | M['MessageAnnotationAttachment']
  | M['MessageScreenshotAttachment']
  | M['MessageLinkPreview'];

export type MessageScreenshotAttachment = {
  id: M['UUID'];
  screenshot: Maybe<M['File']>;
  blurredScreenshot: Maybe<M['File']>;
};

export type MessageFileAttachment = {
  id: M['UUID'];
  file: Maybe<M['File']>;
};

export type File = {
  id: M['UUID'];
  name: M['String'];
  mimeType: M['String'];
  uploadStatus: M['FileUploadStatus'];
  url: M['String'];
  size: M['Float'];
};

export type FileUploadStatus =
  | 'uploaded'
  | 'uploading'
  | 'failed'
  | 'cancelled';

export type Point2D = {
  x: M['Float'];
  y: M['Float'];
};

export type ViewerThreadFilter = 'subscribed' | 'mentioned';

export type ThreadFilterInput = {
  metadata: Maybe<Metadata>;
  viewer: Maybe<Array<ViewerThreadFilter>>;
};

export type SortBy =
  | 'first_message_timestamp'
  | 'most_recent_message_timestamp';

export type SortDirection = 'ascending' | 'descending';

export type LocationFilter = {
  value: Context;
  partialMatch: boolean;
};

export type ThreadSortInput = {
  sortBy: SortBy;
  sortDirection: SortDirection;
};

export type NotificationFilterInput = {
  metadata: Maybe<Metadata>;
  location: Maybe<Context>;
  partialMatch: Maybe<boolean>;
  organizationID: Maybe<string>;
};

export type UserFilterInput = {
  metadata: Maybe<Metadata>;
};

export type MarkThreadsSeenInput = {
  seen: boolean;
  externalThreadID: Maybe<string>;
  location: Maybe<LocationFilter>;
  resolved: Maybe<boolean>;
  metadata: Maybe<JSONObject>;
  viewer: Maybe<Array<ViewerThreadFilter>>;
};

export type MessageAnnotationAttachment = {
  id: M['UUID'];
  screenshot: Maybe<M['File']>;
  blurredScreenshot: Maybe<M['File']>;
  location: Maybe<M['DocumentLocation']>;
  message: M['Message'];
  customLocation: Maybe<M['Context']>;
  customHighlightedTextConfig: Maybe<M['HighlightedTextConfig']>;
  customLabel: Maybe<M['String']>;
  coordsRelativeToTarget: Maybe<M['Point2D']>;
};

export type AnnotationsOnPage = {
  allAnnotations: Array<M['MessageAnnotationAttachment']>;
  hiddenAnnotationIDs: Array<M['UUID']>;
};

export type DocumentLocation = {
  selector: M['String'];
  x: M['Float'];
  y: M['Float'];
  iframeSelectors: Array<M['String']>;
  onChart: Maybe<M['Boolean']>;
  textConfig: Maybe<M['LocationTextConfig']>;
  elementIdentifier: Maybe<M['ElementIdentifier']>;
  multimediaConfig: Maybe<M['MultimediaConfig']>;
  highlightedTextConfig: Maybe<M['HighlightedTextConfig']>;
  additionalTargetData: Maybe<M['AdditionalTargetData']>;
};

export type TargetType = 'monacoEditor' | 'reactTree' | 'konvaCanvas';

export type AdditionalTargetData = {
  targetType: M['TargetType'];
  monacoEditor: Maybe<M['MonacoEditor']>;
  reactTree: Maybe<M['ReactTree']>;
  konvaCanvas: Maybe<M['KonvaCanvas']>;
};

export type MonacoEditor = {
  monacoID: Maybe<M['String']>;
  lineNumber: M['Int'];
};

export type ReactTree = {
  key: M['String'];
  treeID: Maybe<M['String']>;
  prefixCls: Maybe<M['String']>;
};

export type KonvaCanvas = {
  x: M['Float'];
  y: M['Float'];
};

export type LocationTextConfig = {
  selectedCharOffset: M['Int'];
  textToMatch: M['String'];
  textToMatchOffset: M['Int'];
  nodeIndex: M['Int'];
  xVsPointer: M['Float'];
  yVsPointer: M['Float'];
};

export type MultimediaConfig = {
  currentTime: M['Int'];
};

export type HighlightedTextConfig = {
  startElementSelector: M['String'];
  endElementSelector: M['String'];
  startNodeIndex: M['Int'];
  startNodeOffset: M['Int'];
  endNodeIndex: M['Int'];
  endNodeOffset: M['Int'];
  selectedText: M['String'];
  textToDisplay: Maybe<M['String']>;
};

export type ElementIdentifier = {
  version: M['ElementIdentifierVersion'];
  identifier: M['JSONObject'];
};

export type ThreadMessagesArgs = {
  cursor: Maybe<UUID>;
  range: Maybe<Int>;
  ignoreDeleted: Maybe<boolean>;
};

export type ThreadLoadMessagesArgs = {
  cursor: Maybe<UUID>;
  range: Maybe<Int>;
  ignoreDeleted: Maybe<boolean>;
};

export type ThreadInitialMessagesInclDeletedArgs = {
  initialFetchCount: Maybe<Int>;
};

export type ThreadLoadNewestMessagesToTargetArgs = {
  targetMessage: UUID;
  ignoreDeleted: Maybe<boolean>;
};

export type Thread = {
  id: M['UUID'];
  externalID: M['String'];
  orgID: M['UUID'];
  externalOrgID: M['String'];
  metadata: M['Metadata'];
  messages: Array<M['Message']>;
  loadMessages: M['LoadMessagesResult'];
  name: Maybe<M['String']>;
  participants: Array<M['ThreadParticipant']>;
  mentioned: Array<M['User']>;
  typingUsers: Array<M['User']>;
  newMessagesCount: M['Int'];
  newReactionsCount: M['Int'];
  replyCount: M['Int'];
  firstUnseenMessageID: Maybe<M['UUID']>;
  subscribed: M['Boolean'];
  messagesCountExcludingDeleted: M['Int'];
  allMessagesCount: M['Int'];
  userMessagesCount: M['Int'];
  actionMessagesCount: M['Int'];
  initialMessagesInclDeleted: Array<M['Message']>;
  viewerIsThreadParticipant: M['Boolean'];
  url: M['String'];
  navigationURL: M['String'];
  resolved: M['Boolean'];
  resolvedTimestamp: Maybe<M['DateTime']>;
  sharedToSlack: Maybe<M['SlackMirroredThreadInfo']>;
  loadNewestMessagesToTarget: M['LoadMessagesResult'];
  replyingUserIDs: Array<M['UUID']>;
  actionMessageReplyingUserIDs: Array<M['UUID']>;
  location: M['Context'];
  extraClassnames: Maybe<M['String']>;
};

export type MaybeThread = {
  id: M['UUID'];
  thread: Maybe<M['Thread']>;
};

export type SlackMirroredThreadInfo = {
  channel: Maybe<M['String']>;
  slackURL: Maybe<M['String']>;
};

export type LoadMessagesResult = {
  messages: Array<M['Message']>;
  olderMessagesCount: M['Int'];
};

export type ThreadParticipant = {
  user: Maybe<M['User']>;
  lastSeenTimestamp: Maybe<M['DateTime']>;
  subscribed: Maybe<M['Boolean']>;
};

export type User = {
  id: M['UUID'];
  externalID: M['String'];
  displayName: M['String'];
  fullName: M['String'];
  name: Maybe<M['String']>;
  shortName: Maybe<M['String']>;
  profilePictureURL: Maybe<M['String']>;
  userType: M['UserType'];
  metadata: M['Metadata'];
};

export type UserWithOrgDetails = {
  id: M['UUID'];
  externalID: M['String'];
  displayName: M['String'];
  fullName: M['String'];
  name: Maybe<M['String']>;
  shortName: Maybe<M['String']>;
  profilePictureURL: Maybe<M['String']>;
  userType: M['UserType'];
  metadata: M['Metadata'];
  linkedUserID: Maybe<M['UUID']>;
  canBeNotifiedOnSlack: M['Boolean'];
  slackUserWithMatchingEmail: Maybe<M['UUID']>;
};

export type PresenceLiveQueryInput = {
  matcher: JSONObject;
  excludeDurable: boolean;
  exactMatch: boolean;
};

export type PresenceLiveQueryData = {
  data: Array<M['UserLocation']>;
  complete: M['Boolean'];
};

export type UserLiveQueryData = {
  users: Array<M['User']>;
  upto: M['Float'];
};

export type PageThreadsResult = {
  threads: Array<M['Thread']>;
  hasMore: M['Boolean'];
  token: Maybe<M['String']>;
};

export type ApplicationUsageMetricsArgs = {
  metrics: Array<string>;
  days: Int;
};

export type Application = {
  id: M['UUID'];
  name: M['String'];
  sharedSecret: M['String'];
  serverAccessToken: M['String'];
  customerAccessToken: M['String'];
  customLinks: Maybe<M['ApplicationLinks']>;
  customEmailTemplate: Maybe<M['ApplicationEmailTemplate']>;
  enableEmailNotifications: M['Boolean'];
  customS3Bucket: Maybe<M['S3BucketVisible']>;
  segmentWriteKey: Maybe<M['String']>;
  customNUX: Maybe<M['ApplicationNUX']>;
  iconURL: Maybe<M['String']>;
  type: M['ApplicationTierType'];
  environment: M['ApplicationEnvironment'];
  defaultProvider: Maybe<M['UUID']>;
  supportSlackChannelID: Maybe<M['String']>;
  supportBotInfo: Maybe<M['ApplicationSupportBotInfo']>;
  redirectURI: Maybe<M['String']>;
  customerID: M['UUID'];
  deploymentInfo: M['ApplicationDeploymentInfo'];
  usageMetrics: Array<M['JSONObject']>;
  eventWebhookURL: Maybe<M['String']>;
  eventWebhookSubscriptions: Maybe<Array<M['String']>>;
  setupInfo: Maybe<M['ApplicationConsoleSetupInfo']>;
};

export type ApplicationDeploymentInfo = {
  messages: M['Int'];
  users: M['Int'];
  usersSyncedAllTime: M['Int'];
  orgs: M['Int'];
  orgsSyncedAllTime: M['Int'];
  customLocations: M['Int'];
  customLocationsAllTime: M['Int'];
  reactPackageVersion: Array<M['String']>;
  components: Array<M['String']>;
  componentsInitializedAllTime: Array<M['String']>;
  browsers: Array<M['JSONObject']>;
  operatingSystems: Array<M['JSONObject']>;
};

export type ApplicationConsoleSetupInfo = {
  firstUser: Maybe<M['User']>;
  firstOrg: Maybe<M['Organization']>;
  isComponentInitialized: M['Boolean'];
};

export type CustomerType = 'verified' | 'sample';

export type CustomerImplementationStage =
  | 'launched'
  | 'implementing'
  | 'proof_of_concept'
  | 'inactive';

export type PricingTier = 'free' | 'pro' | 'scale';

export type BillingType = 'stripe' | 'manual';

export type BillingStatus = 'active' | 'unpaid' | 'inactive';

export type Addon = {
  key: M['String'];
  value: M['Boolean'];
};

export type StripeSubscriptionRecurrence = 'monthly' | 'yearly';

export type StripeSubscription = {
  id: M['String'];
  url: M['String'];
  status: M['String'];
  startDate: M['DateTime'];
  currentPeriodStart: M['DateTime'];
  currentPeriodEnd: M['DateTime'];
  amount: M['Int'];
  recurrence: M['StripeSubscriptionRecurrence'];
};

export type Customer = {
  id: M['UUID'];
  name: M['String'];
  sharedSecret: M['String'];
  type: M['CustomerType'];
  enableCustomS3Bucket: M['Boolean'];
  enableCustomSegmentWriteKey: M['Boolean'];
  implementationStage: M['CustomerImplementationStage'];
  launchDate: Maybe<M['DateTime']>;
  slackChannel: Maybe<M['String']>;
  signupCoupon: Maybe<M['String']>;
  pricingTier: M['PricingTier'];
  billingStatus: M['BillingStatus'];
  billingType: Maybe<M['BillingType']>;
  stripeCustomerID: Maybe<M['String']>;
  addons: Array<M['Addon']>;
  renewalDate: Maybe<M['DateTime']>;
  planDescription: Array<M['String']>;
  stripeSubscription: Maybe<M['StripeSubscription']>;
};

export type ConsoleUser = {
  id: M['UUID'];
  name: Maybe<M['String']>;
  email: M['String'];
  picture: Maybe<M['String']>;
  customerID: Maybe<M['UUID']>;
  customer: Maybe<M['Customer']>;
  pendingCustomerID: Maybe<M['UUID']>;
};

export type ApplicationTierType = 'free' | 'starter' | 'premium';

export type ApplicationEnvironment =
  | 'production'
  | 'staging'
  | 'sample'
  | 'sampletoken'
  | 'demo';

export type PageContext = {
  data: M['Context'];
  providerID: Maybe<M['UUID']>;
};

export type PageVisitor = {
  user: Maybe<M['User']>;
  lastPresentTimestamp: Maybe<M['DateTime']>;
};

export type OrgMemberState = 'inactive' | 'active' | 'deleted';

export type UserType = 'person' | 'bot';

export type MessageSource = M['User'];

export type MessageReaction = {
  id: M['UUID'];
  unicodeReaction: M['String'];
  user: M['User'];
  timestamp: M['DateTime'];
};

export type TaskThirdPartyReferenceArgs = {
  type: ThirdPartyConnectionType;
};

export type Task = {
  id: M['UUID'];
  done: M['Boolean'];
  assignees: Array<Maybe<M['User']>>;
  todos: Array<M['Todo']>;
  doneStatusLastUpdatedBy: Maybe<M['User']>;
  thirdPartyReference: Maybe<M['TaskThirdPartyReference']>;
  thirdPartyReferences: Array<M['TaskThirdPartyReference']>;
};

export type Todo = {
  id: M['UUID'];
  done: M['Boolean'];
};

export type TaskThirdPartyReference = {
  type: M['ThirdPartyConnectionType'];
  previewData: Maybe<M['JSONObject']>;
  canEdit: M['Boolean'];
  imported: M['Boolean'];
};

export type ThirdPartyConnectionType =
  | 'asana'
  | 'jira'
  | 'linear'
  | 'trello'
  | 'monday';

export type SlackStateLinkingType = 'link_org';

export type ImportedSlackMessageType = 'reply' | 'supportBotReply';

export type MessageType = 'action_message' | 'user_message';

export type PageContextInput = {
  data: Context;
  providerID: Maybe<UUID>;
};

export type ViewerIdentity = {
  user: M['User'];
  organization: Maybe<M['Organization']>;
  email: Maybe<M['String']>;
  isSlackConnected: M['Boolean'];
  organizations: Array<M['Organization']>;
};

export type ViewerAccessTokenArgs = {
  groupID: Maybe<string>;
  _externalOrgID: Maybe<string>;
};

export type ViewerThirdPartyConnectionArgs = {
  type: ThirdPartyConnectionType;
  _externalOrgID: Maybe<string>;
};

export type Viewer = {
  accessToken: M['String'];
  user: M['User'];
  organization: Maybe<M['Organization']>;
  inbox: M['Inbox'];
  thirdPartyConnection: M['ThirdPartyConnection'];
  email: Maybe<M['String']>;
  isSlackConnected: M['Boolean'];
  deepLinkInfo: Maybe<M['DeepLinkInfo']>;
};

export type OrganizationUsersWithOrgDetailsArgs = {
  filter: Maybe<UserFilterInput>;
  nameQuery: Maybe<string>;
  sortUsersBy: Maybe<Context>;
  sortUsersDirection: Maybe<SortDirection>;
};

export type Organization = {
  id: M['UUID'];
  externalID: M['String'];
  domain: Maybe<M['String']>;
  name: M['String'];
  imageURL: Maybe<M['String']>;
  usersWithOrgDetails: Array<M['UserWithOrgDetails']>;
  state: M['OrganizationState'];
  joinableSlackChannels: Array<M['SlackChannelSchema']>;
  joinedSlackChannels: Array<M['SlackChannelSchema']>;
  recentlyActiveThreads: Array<M['Thread']>;
  linkedOrganization: Maybe<M['LinkedOrganization']>;
  metadata: M['Metadata'];
};

export type LinkedOrganizationUsersWithOrgDetailsArgs = {
  filter: Maybe<UserFilterInput>;
  nameQuery: Maybe<string>;
  sortUsersBy: Maybe<Context>;
  sortUsersDirection: Maybe<SortDirection>;
};

export type LinkedOrganization = {
  id: M['UUID'];
  name: M['String'];
  usersWithOrgDetails: Array<M['UserWithOrgDetails']>;
};

export type OrganizationState = 'inactive' | 'active';

export type SlackChannelSchema = {
  name: M['String'];
  slackID: M['String'];
};

export type Inbox = {
  count: M['Int'];
  threads: Array<M['Thread']>;
  threadsArchive: Array<M['Thread']>;
};

export type ThirdPartyConnection = {
  connected: M['Boolean'];
  oAuthStateToken: M['String'];
  configuration: Maybe<M['JSON']>;
};

export type HeimdallSwitch = {
  key: M['String'];
  isOn: M['Boolean'];
};

export type FeatureFlag = {
  key: M['String'];
  value: M['SimpleValue'];
};

export type LogEventInput = {
  pageLoadID: Maybe<UUID>;
  installationID: Maybe<UUID>;
  eventNumber: Int;
  clientTimestamp: DateTime;
  type: string;
  payload: JSONObject;
  metadata: JSONObject;
  logLevel: LogLevelType;
  customEventMetadata: Maybe<JSONObject>;
};

export type LogLevelType = 'error' | 'warn' | 'info' | 'debug';

export type FileAttachmentInput = {
  id: UUID;
  fileID: UUID;
};

export type Point2DInput = {
  x: Float;
  y: Float;
};

export type AnnotationAttachmentInput = {
  id: UUID;
  screenshotFileID: Maybe<UUID>;
  blurredScreenshotFileID: Maybe<UUID>;
  location: Maybe<DocumentLocationInput>;
  customLocation: Maybe<Context>;
  customHighlightedTextConfig: Maybe<HighlightedTextConfigInput>;
  customLabel: Maybe<string>;
  coordsRelativeToTarget: Maybe<Point2DInput>;
};

export type ScreenshotAttachmentInput = {
  id: UUID;
  screenshotFileID: Maybe<UUID>;
  blurredScreenshotFileID: Maybe<UUID>;
};

export type DocumentLocationInput = {
  selector: string;
  x: Float;
  y: Float;
  iframeSelectors: Maybe<Array<string>>;
  onChart: Maybe<boolean>;
  textConfig: Maybe<LocationTextConfigInput>;
  elementIdentifier: Maybe<ElementIdentifierInput>;
  multimediaConfig: Maybe<MultimediaConfigInput>;
  highlightedTextConfig: Maybe<HighlightedTextConfigInput>;
  additionalTargetData: Maybe<AdditionalTargetDataInput>;
};

export type AdditionalTargetDataInput = {
  targetType: TargetType;
  monacoEditor: Maybe<MonacoEditorInput>;
  reactTree: Maybe<ReactTreeInput>;
  konvaCanvas: Maybe<KonvaCanvasInput>;
};

export type MonacoEditorInput = {
  monacoID: Maybe<string>;
  lineNumber: Int;
};

export type ReactTreeInput = {
  key: string;
  treeID: Maybe<string>;
  prefixCls: Maybe<string>;
};

export type KonvaCanvasInput = {
  x: Float;
  y: Float;
};

export type MultimediaConfigInput = {
  currentTime: Int;
};

export type HighlightedTextConfigInput = {
  startElementSelector: string;
  endElementSelector: string;
  startNodeIndex: Int;
  startNodeOffset: Int;
  endNodeIndex: Int;
  endNodeOffset: Int;
  selectedText: string;
  textToDisplay: Maybe<string>;
};

export type LocationTextConfigInput = {
  selectedCharOffset: Int;
  textToMatch: string;
  textToMatchOffset: Int;
  nodeIndex: Int;
  xVsPointer: Float;
  yVsPointer: Float;
};

export type ElementIdentifierInput = {
  version: ElementIdentifierVersion;
  identifier: JSONObject;
};

export type TaskInput = {
  id: UUID;
  done: boolean;
  assigneeIDs: Array<UUID>;
  todos: Array<TaskTodoInput>;
  doneStatusUpdate: Maybe<TaskDoneStatusUpdate>;
  type: TaskInputType;
};

export type TaskTodoInput = {
  id: UUID;
  done: boolean;
};

export type TaskDoneStatusUpdate = 'update' | 'remove' | 'none';

export type TaskInputType =
  | 'cord'
  | 'asana'
  | 'jira'
  | 'linear'
  | 'trello'
  | 'monday';

export type CreateThreadMessageInput = {
  messageID: UUID;
  threadID: UUID;
  pageContext: Maybe<PageContextInput>;
  pageName: Maybe<string>;
  createNewThread: boolean;
  newMessageMetadata: Maybe<Metadata>;
  newThreadMetadata: Maybe<Metadata>;
  content: Maybe<MessageContent>;
  externalContent: Maybe<MessageContent>;
  url: Maybe<string>;
  fileAttachments: Array<FileAttachmentInput>;
  annotationAttachments: Array<AnnotationAttachmentInput>;
  screenshotAttachment: Maybe<ScreenshotAttachmentInput>;
  screenshotID: Maybe<UUID>;
  task: Maybe<TaskInput>;
  threadOptions: Maybe<ThreadOptionsInput>;
  externalMessageID: Maybe<string>;
  type: Maybe<MessageType>;
  addReactions: Maybe<Array<string>>;
  iconURL: Maybe<string>;
  translationKey: Maybe<string>;
  extraClassnames: Maybe<string>;
  createThread: Maybe<CreateThreadInput>;
  skipLinkPreviews: Maybe<boolean>;
};

export type CreateMessageByExternalIDInput = {
  messageID: Maybe<UUID>;
  externalThreadID: string;
  externalMessageID: Maybe<string>;
  content: MessageContent;
  type: Maybe<MessageType>;
  url: Maybe<string>;
  addReactions: Maybe<Array<string>>;
  metadata: Maybe<Metadata>;
  iconURL: Maybe<string>;
  translationKey: Maybe<string>;
  extraClassnames: Maybe<string>;
  createThread: Maybe<CreateThreadInput>;
  addFileAttachments: Maybe<Array<string>>;
  screenshotAttachment: Maybe<ScreenshotAttachmentInput>;
  skipLinkPreviews: Maybe<boolean>;
  subscribeToThread: Maybe<boolean>;
};

export type UpdateMessageByExternalIDInput = {
  externalThreadID: Maybe<string>;
  externalMessageID: string;
  content: Maybe<MessageContent>;
  type: Maybe<MessageType>;
  url: Maybe<string>;
  metadata: Maybe<Metadata>;
  iconURL: Maybe<string>;
  translationKey: Maybe<string>;
  extraClassnames: Maybe<string>;
  deleted: Maybe<boolean>;
  addReactions: Maybe<Array<string>>;
  removeReactions: Maybe<Array<string>>;
  addFileAttachments: Maybe<Array<string>>;
  removeFileAttachments: Maybe<Array<string>>;
  skipLinkPreviews: Maybe<boolean>;
  removePreviewLinks: Maybe<Array<string>>;
};

export type CreateThreadInput = {
  location: Context;
  url: string;
  name: string;
  metadata: Maybe<Metadata>;
  extraClassnames: Maybe<string>;
  addSubscribers: Maybe<Array<string>>;
};

export type ThreadOptionsInput = {
  additionalSubscribersOnCreate: Array<string>;
};

export type ThreadByExternalID2Input = {
  externalThreadID: string;
};

export type CreateFileResult = {
  uploadURL: Maybe<M['String']>;
  downloadURL: M['String'];
};

export type IDResult = {
  id: M['UUID'];
};

export type FailureDetails = {
  code: M['String'];
  message: Maybe<M['String']>;
};

export type SuccessResult = {
  success: M['Boolean'];
  failureDetails: Maybe<M['FailureDetails']>;
};

export type FileUploadStatusEnumType =
  | 'uploaded'
  | 'uploading'
  | 'failed'
  | 'cancelled';

export type ThreadEvent =
  | M['ThreadCreated']
  | M['ThreadMessageAdded']
  | M['ThreadMessageUpdated']
  | M['ThreadMessageContentAppended']
  | M['ThreadMessageRemoved']
  | M['ThreadParticipantsUpdatedIncremental']
  | M['ThreadTypingUsersUpdated']
  | M['ThreadShareToSlack']
  | M['ThreadPropertiesUpdated']
  | M['ThreadSubscriberUpdated']
  | M['ThreadDeleted'];

export type ThreadCreated = {
  thread: M['Thread'];
};

export type ThreadDeleted = {
  id: M['UUID'];
};

export type ThreadMessageAdded = {
  message: M['Message'];
};

export type ThreadMessageUpdated = {
  message: M['Message'];
};

export type ThreadMessageContentAppended = {
  id: M['UUID'];
  appendedContent: M['String'];
};

export type ThreadPropertiesUpdated = {
  thread: M['Thread'];
};

export type ThreadMessageRemoved = {
  id: M['UUID'];
};

export type ThreadParticipantsUpdatedIncremental = {
  participant: M['ThreadParticipant'];
};

export type ThreadSubscriberUpdated = {
  subscriber: M['ThreadParticipant'];
};

export type ThreadTypingUsersUpdated = {
  users: Array<M['User']>;
};

export type ThreadShareToSlack = {
  id: M['UUID'];
  info: Maybe<M['SlackMirroredThreadInfo']>;
};

export type EphemeralLocation = {
  contexts: Maybe<Array<M['Context']>>;
};

export type DurableLocation = {
  context: M['Context'];
  timestamp: M['Float'];
};

export type UserLocation = {
  externalUserID: M['String'];
  ephemeral: Maybe<M['EphemeralLocation']>;
  durable: Maybe<M['DurableLocation']>;
};

export type PageEvent =
  | M['PageThreadAdded']
  | M['PageThreadDeleted']
  | M['PageThreadReplyAdded']
  | M['PageVisitorsUpdated']
  | M['PageThreadResolved']
  | M['PageThreadUnresolved']
  | M['ThreadFilterablePropertiesMatch']
  | M['ThreadFilterablePropertiesUnmatch'];

export type PageThreadAdded = {
  thread: M['Thread'];
};

export type PageThreadDeleted = {
  id: M['UUID'];
};

export type ThreadFilterablePropertiesMatch = {
  thread: M['Thread'];
};

export type ThreadFilterablePropertiesUnmatch = {
  id: M['UUID'];
  thread: M['Thread'];
};

export type PageThreadReplyAdded = {
  thread: M['Thread'];
  message: M['Message'];
};

export type PageVisitorsUpdated = {
  visitors: Array<M['PageVisitor']>;
};

export type PageThreadResolved = {
  thread: M['Thread'];
};

export type PageThreadUnresolved = {
  thread: M['Thread'];
};

export type S3BucketVisible = {
  id: M['UUID'];
  name: M['String'];
  region: M['String'];
};

export type LogoConfigType = {
  height: M['String'];
  width: M['String'];
};

export type LogoConfigInput = {
  height: string;
  width: string;
};

export type ApplicationEmailTemplate = {
  partnerName: M['String'];
  imageURL: M['String'];
  sender: Maybe<M['String']>;
  logoConfig: Maybe<M['LogoConfigType']>;
};

export type ApplicationLinks = {
  learnMore: Maybe<M['String']>;
  upgradePlan: Maybe<M['String']>;
  leaveFeedback: Maybe<M['String']>;
};

export type ApplicationColors = {
  launcherOpen: Maybe<M['String']>;
  launcherClose: Maybe<M['String']>;
  actions: Maybe<M['String']>;
  presence: Maybe<M['String']>;
  avatarTint: Maybe<M['String']>;
  underlay: Maybe<M['String']>;
};

export type ApplicationSupportBotInfo = {
  name: M['String'];
  profilePictureURL: Maybe<M['String']>;
};

export type PublicApplication = {
  id: M['UUID'];
  name: M['String'];
  customLinks: M['ComputedCustomLinks'];
  customNUX: Maybe<M['ApplicationNUX']>;
  iconURL: Maybe<M['String']>;
  environment: M['ApplicationEnvironment'];
};

export type ComputedCustomLinks = {
  learnMore: Maybe<M['String']>;
  upgradePlan: Maybe<M['String']>;
  leaveFeedback: Maybe<M['String']>;
};

export type CustomNUXStepContent = {
  title: Maybe<M['String']>;
  text: Maybe<M['String']>;
  imageURL: Maybe<M['String']>;
};

export type ApplicationNUX = {
  initialOpen: Maybe<M['CustomNUXStepContent']>;
  welcome: Maybe<M['CustomNUXStepContent']>;
};

export type DeepLinkInfo = {
  threadID: M['UUID'];
  messageID: Maybe<M['UUID']>;
};

export type AdminChatUser = {
  user: M['User'];
};

export type NotificationEvent =
  | M['NotificationAdded']
  | M['NotificationReadStateUpdated']
  | M['NotificationDeleted'];

export type NotificationAdded = {
  notification: M['Notification'];
};

export type NotificationReadStateUpdated = {
  notification: M['Notification'];
};

export type NotificationDeleted = {
  id: M['UUID'];
};

export type Notification = {
  id: M['UUID'];
  externalID: M['String'];
  senders: Array<M['NotificationSender']>;
  iconUrl: Maybe<M['String']>;
  header: Array<M['NotificationHeaderNode']>;
  headerTranslationKey: Maybe<M['String']>;
  headerSimpleTranslationParams: Maybe<M['SimpleTranslationParameters']>;
  attachment: Maybe<M['NotificationAttachment']>;
  readStatus: M['NotificationReadStatus'];
  timestamp: M['DateTime'];
  extraClassnames: Maybe<M['String']>;
  metadata: M['Metadata'];
};

export type NotificationReadStatus = 'unread' | 'read';

export type NotificationAttachment =
  | M['NotificationURLAttachment']
  | M['NotificationMessageAttachment']
  | M['NotificationThreadAttachment'];

export type NotificationURLAttachment = {
  url: M['String'];
};

export type NotificationMessageAttachment = {
  message: M['Message'];
};

export type NotificationThreadAttachment = {
  thread: M['Thread'];
};

export type NotificationSender = M['User'];

export type NotificationPage = {
  nodes: Array<M['Notification']>;
  paginationInfo: M['PaginationInfo'];
};

export type NotificationHeaderTextNode = {
  text: M['String'];
  bold: M['Boolean'];
};

export type NotificationHeaderUserNode = {
  user: M['User'];
};

export type NotificationHeaderNode =
  | M['NotificationHeaderTextNode']
  | M['NotificationHeaderUserNode'];

export type NotificationSummary = {
  unreadNotificationCount: M['Int'];
};

export type PaginationInfo = {
  endCursor: M['String'];
  hasNextPage: M['Boolean'];
};

export type AdminGoRedirect = {
  name: M['String'];
  url: M['String'];
  redirectCount: M['Int'];
};

export type AdminGoRedirectInputType = {
  name: string;
  url: string;
};

export type Activity = {
  threadSummary: M['ThreadActivitySummary'];
};

export type ThreadActivitySummary = {
  totalThreadCount: M['Int'];
  unreadThreadCount: M['Int'];
  newThreadCount: M['Int'];
  unreadSubscribedThreadCount: M['Int'];
  resolvedThreadCount: M['Int'];
  emptyThreadCount: M['Int'];
};

export type TestToken = {
  token: M['String'];
};

export type AdminCRTComingFrom = 'us' | 'them';

export type AdminCRTDecision = 'done' | 'accepted' | 'rejected' | 'pending';

export type AdminCRTCommunicationStatus =
  | 'none'
  | 'request_acked'
  | 'decision_sent'
  | 'decision_acked';

export type AdminCRTIssueType = 'request' | 'bug' | 'onboarding_step';

export type AdminCRTPriority = 'blocker' | 'high' | 'low';

export type AdminCRTNextAction =
  | 'unknown'
  | 'ack_receipt'
  | 'make_decision'
  | 'send_decision'
  | 'do_work'
  | 'wait_for_ack'
  | 'done';

export type CustomerIssue = {
  id: M['UUID'];
  customer: M['Customer'];
  title: M['String'];
  body: M['String'];
  comingFrom: M['AdminCRTComingFrom'];
  decision: M['AdminCRTDecision'];
  communicationStatus: M['AdminCRTCommunicationStatus'];
  nextAction: M['AdminCRTNextAction'];
  lastTouch: Maybe<M['DateTime']>;
  type: M['AdminCRTIssueType'];
  priority: M['AdminCRTPriority'];
  externallyVisible: M['Boolean'];
  assignee: Maybe<M['User']>;
  history: Array<M['CustomerIssueChange']>;
  subscribed: M['Boolean'];
};

export type CustomerIssueUpdate = {
  field: M['String'];
  oldValue: Maybe<M['JSON']>;
  newValue: Maybe<M['JSON']>;
};

export type CustomerIssueChange = {
  user: M['User'];
  created: M['Boolean'];
  updated: Array<M['CustomerIssueUpdate']>;
  timestamp: M['DateTime'];
};

export type SearchLocationOptions = {
  location: Context;
  partialMatch: boolean;
};

export type TimestampRange = {
  from: Maybe<DateTime>;
  to: Maybe<DateTime>;
};

export type SearchSortByOptions = 'created_timestamp' | 'relevance';

export type SearchSortInput = {
  sortBy: SearchSortByOptions;
  sortDirection: SortDirection;
};

export type MessageLinkPreview = {
  id: M['UUID'];
  url: M['String'];
  title: Maybe<M['String']>;
  description: Maybe<M['String']>;
  img: Maybe<M['String']>;
};

export type OrgMemberEvent = M['OrgMemberAdded'] | M['OrgMemberRemoved'];

export type OrgMemberAdded = {
  user: M['User'];
};

export type OrgMemberRemoved = {
  externalUserID: M['String'];
};

export type OrgMembersResult = {
  users: Array<M['User']>;
  hasMore: M['Boolean'];
  token: Maybe<M['String']>;
};

export type SlackConnectedResult = {
  isOrgConnected: M['Boolean'];
  isUserConnected: M['Boolean'];
};

export type ApplicationQueryArgs = {
  id: UUID;
};

export type S3BucketQueryArgs = {
  id: UUID;
};

export type FeatureFlagsQueryArgs = {
  keys: Array<string>;
};

export type EncodedSlackTokenQueryArgs = {
  nonce: string;
  applicationID: UUID;
};

export type SlackChannelsForConsoleQueryArgs = {
  applicationID: UUID;
};

export type ApplicationFlagQueryArgs = {
  applicationID: UUID;
  flagKey: string;
};

export type GetOrgsQueryArgs = {
  applicationID: string;
};

export type GetUsersQueryArgs = {
  applicationID: string;
  limit: Maybe<Int>;
};

export type GetCustomerIssueQueryArgs = {
  id: UUID;
};

export type Query = {
  ping: M['String'];
  applications: Array<M['ConsoleApplication']>;
  application: Maybe<M['Application']>;
  consoleUser: Maybe<M['ConsoleUser']>;
  customerConsoleUsers: Array<M['ConsoleUser']>;
  s3Bucket: Maybe<M['S3BucketVisible']>;
  featureFlags: Array<M['FeatureFlag']>;
  encodedSlackToken: Maybe<M['String']>;
  slackChannelsForConsole: Array<M['SlackChannelSchema']>;
  applicationFlag: Maybe<M['FeatureFlag']>;
  getOrgs: Maybe<Array<M['ConsoleApplicationOrganization']>>;
  getUsers: Maybe<Array<M['ConsoleApplicationUser']>>;
  customerIssues: Array<M['CustomerIssue']>;
  getCustomerIssue: Maybe<M['CustomerIssue']>;
  consoleCordSessionToken: Maybe<M['String']>;
  usageStats: M['UsageStats'];
};

export type LogEventsMutationArgs = {
  events: Array<LogEventInput>;
  _externalOrgID: Maybe<string>;
};

export type SyncUserMutationArgs = {
  email: string;
  name: Maybe<string>;
  picture: Maybe<string>;
  signupCoupon: Maybe<string>;
  createNewCustomer: Maybe<boolean>;
};

export type UpdateApplicationMutationArgs = {
  id: UUID;
  name: Maybe<string>;
  customLinks: Maybe<CustomLinks>;
  customEmailTemplate: Maybe<CustomEmailTemplate>;
  enableEmailNotifications: Maybe<boolean>;
  segmentWriteKey: Maybe<string>;
  iconURL: Maybe<string>;
  customNUX: Maybe<CustomNUXInput>;
  redirectURI: Maybe<string>;
  eventWebhookURL: Maybe<string>;
  eventWebhookSubscriptions: Maybe<Array<string>>;
};

export type DeleteApplicationCustomS3BucketMutationArgs = {
  applicationID: UUID;
};

export type UpdateCustomS3BucketSecretMutationArgs = {
  applicationID: UUID;
  id: UUID;
  keyID: string;
  keySecret: string;
};

export type CreateApplicationCustomS3BucketMutationArgs = {
  applicationID: UUID;
  bucket: string;
  region: string;
  accessKeyID: string;
  accessKeySecret: string;
};

export type GetSignedUploadURLMutationArgs = {
  applicationID: UUID;
  assetName: string;
  size: Int;
  mimeType: string;
};

export type CreateApplicationMutationArgs = {
  name: string;
};

export type UpdateSupportBotMutationArgs = {
  applicationID: UUID;
  supportSlackChannelID: string;
  profilePictureURL: string;
  name: string;
};

export type RemoveSlackSupportOrgMutationArgs = {
  applicationID: UUID;
};

export type AddConsoleUserToCustomerMutationArgs = {
  email: string;
};

export type RemoveConsoleUserFromCustomerMutationArgs = {
  email: string;
};

export type CreateCustomerMutationArgs = {
  name: string;
};

export type CreateCustomerIssueMutationArgs = {
  title: string;
  body: string;
  type: AdminCRTIssueType;
  priority: AdminCRTPriority;
};

export type UpdateCustomerIssueMutationArgs = {
  id: UUID;
  title: Maybe<string>;
  body: Maybe<string>;
  type: Maybe<AdminCRTIssueType>;
  priority: Maybe<AdminCRTPriority>;
};

export type UpdateCustomerNameMutationArgs = {
  name: string;
};

export type UpdateAccessToCustomerMutationArgs = {
  email: string;
  approveAccess: boolean;
};

export type RequestAccessToCustomerMutationArgs = {
  customerID: UUID;
};

export type StartCheckoutMutationArgs = {
  productKey: string;
};

export type Mutation = {
  logEvents: M['Boolean'];
  syncUser: M['SyncUserDuplicateDomainResult'];
  updateApplication: M['SuccessResult'];
  deleteApplicationCustomS3Bucket: M['SuccessResult'];
  updateCustomS3BucketSecret: M['SuccessResult'];
  createApplicationCustomS3Bucket: M['SuccessResult'];
  getSignedUploadURL: M['SignedUploadURLResult'];
  createApplication: M['UUID'];
  updateSupportBot: M['SuccessResult'];
  removeSlackSupportOrg: M['SuccessResult'];
  addConsoleUserToCustomer: M['SuccessResult'];
  removeConsoleUserFromCustomer: M['SuccessResult'];
  createCustomer: M['Customer'];
  createCustomerIssue: M['SuccessResult'];
  updateCustomerIssue: M['SuccessResult'];
  updateCustomerName: M['SuccessResult'];
  updateAccessToCustomer: M['SuccessResult'];
  requestAccessToCustomer: M['SuccessResult'];
  startCheckout: M['StartCheckoutResult'];
  redirectToStripeCustomerPortal: M['RedirectToStripeCustomerPortalResult'];
};

export type CustomerEventsSubscriptionArgs = {
  customerID: UUID;
};

export type ApplicationEventsSubscriptionArgs = {
  applicationID: UUID;
};

export type Subscription = {
  customerEvents: M['CustomerEvent'];
  applicationEvents: M['ApplicationEvent'];
};

export type CustomerSubscriptionUpdated = {
  customer: M['Customer'];
};

export type CustomerEvent = M['CustomerSubscriptionUpdated'];

export type ConsoleGettingStartedUpdated = {
  application: Maybe<M['Application']>;
};

export type ApplicationEvent = M['ConsoleGettingStartedUpdated'];

export type ConsoleApplication = {
  application: M['Application'];
  userCount: M['Int'];
  orgCount: M['Int'];
};

export type CustomEmailTemplate = {
  partnerName: string;
  imageURL: string;
  sender: Maybe<string>;
  logoConfig: Maybe<LogoConfigInput>;
};

export type CustomLinks = {
  learnMore: Maybe<string>;
  upgradePlan: Maybe<string>;
  leaveFeedback: Maybe<string>;
};

export type CustomNUXInput = {
  initialOpen: Maybe<CustomNUXStepInput>;
  welcome: Maybe<CustomNUXStepInput>;
};

export type CustomNUXStepInput = {
  title: Maybe<string>;
  text: Maybe<string>;
  imageURL: Maybe<string>;
};

export type SignedUploadURLResult = {
  uploadURL: Maybe<M['String']>;
  downloadURL: Maybe<M['String']>;
};

export type StartCheckoutResult = {
  success: M['Boolean'];
  failureDetails: Maybe<M['FailureDetails']>;
  redirectURL: Maybe<M['String']>;
};

export type RedirectToStripeCustomerPortalResult = {
  success: M['Boolean'];
  failureDetails: Maybe<M['FailureDetails']>;
  redirectURL: Maybe<M['String']>;
};

export type ConsoleApplicationOrganization = {
  id: M['String'];
  name: M['String'];
  status: M['ConsoleApplicationOrganizationState'];
};

export type UsageStats = {
  mau: M['Int'];
};

export type ConsoleApplicationOrganizationState = 'active' | 'deleted';

export type ConsoleApplicationUser = {
  id: Maybe<M['String']>;
  name: Maybe<M['String']>;
  email: Maybe<M['String']>;
  profilePictureURL: Maybe<M['String']>;
  status: M['ConsoleApplicationUserState'];
  createdTimestamp: M['DateTime'];
};

export type ConsoleApplicationUserState = 'active' | 'deleted';

export type SyncUserDuplicateDomainResult = {
  success: M['Boolean'];
  customerIDs: Maybe<Array<M['String']>>;
  customerName: Maybe<M['String']>;
  failureDetails: Maybe<M['FailureDetails']>;
};

export type NameToType = {
  Message: Message;
  ReferencedUserData: ReferencedUserData;
  MessageAttachment: MessageAttachment;
  MessageScreenshotAttachment: MessageScreenshotAttachment;
  MessageFileAttachment: MessageFileAttachment;
  File: File;
  FileUploadStatus: FileUploadStatus;
  Point2D: Point2D;
  ViewerThreadFilter: ViewerThreadFilter;
  ThreadFilterInput: ThreadFilterInput;
  SortBy: SortBy;
  SortDirection: SortDirection;
  LocationFilter: LocationFilter;
  ThreadSortInput: ThreadSortInput;
  NotificationFilterInput: NotificationFilterInput;
  UserFilterInput: UserFilterInput;
  MarkThreadsSeenInput: MarkThreadsSeenInput;
  MessageAnnotationAttachment: MessageAnnotationAttachment;
  AnnotationsOnPage: AnnotationsOnPage;
  DocumentLocation: DocumentLocation;
  TargetType: TargetType;
  AdditionalTargetData: AdditionalTargetData;
  MonacoEditor: MonacoEditor;
  ReactTree: ReactTree;
  KonvaCanvas: KonvaCanvas;
  LocationTextConfig: LocationTextConfig;
  MultimediaConfig: MultimediaConfig;
  HighlightedTextConfig: HighlightedTextConfig;
  ElementIdentifier: ElementIdentifier;
  Thread: Thread;
  MaybeThread: MaybeThread;
  SlackMirroredThreadInfo: SlackMirroredThreadInfo;
  LoadMessagesResult: LoadMessagesResult;
  ThreadParticipant: ThreadParticipant;
  User: User;
  UserWithOrgDetails: UserWithOrgDetails;
  PresenceLiveQueryInput: PresenceLiveQueryInput;
  PresenceLiveQueryData: PresenceLiveQueryData;
  UserLiveQueryData: UserLiveQueryData;
  PageThreadsResult: PageThreadsResult;
  Application: Application;
  ApplicationDeploymentInfo: ApplicationDeploymentInfo;
  ApplicationConsoleSetupInfo: ApplicationConsoleSetupInfo;
  CustomerType: CustomerType;
  CustomerImplementationStage: CustomerImplementationStage;
  PricingTier: PricingTier;
  BillingType: BillingType;
  BillingStatus: BillingStatus;
  Addon: Addon;
  StripeSubscriptionRecurrence: StripeSubscriptionRecurrence;
  StripeSubscription: StripeSubscription;
  Customer: Customer;
  ConsoleUser: ConsoleUser;
  ApplicationTierType: ApplicationTierType;
  ApplicationEnvironment: ApplicationEnvironment;
  PageContext: PageContext;
  PageVisitor: PageVisitor;
  OrgMemberState: OrgMemberState;
  UserType: UserType;
  MessageSource: MessageSource;
  MessageReaction: MessageReaction;
  Task: Task;
  Todo: Todo;
  TaskThirdPartyReference: TaskThirdPartyReference;
  ThirdPartyConnectionType: ThirdPartyConnectionType;
  SlackStateLinkingType: SlackStateLinkingType;
  ImportedSlackMessageType: ImportedSlackMessageType;
  MessageType: MessageType;
  PageContextInput: PageContextInput;
  ViewerIdentity: ViewerIdentity;
  Viewer: Viewer;
  Organization: Organization;
  LinkedOrganization: LinkedOrganization;
  OrganizationState: OrganizationState;
  SlackChannelSchema: SlackChannelSchema;
  Inbox: Inbox;
  ThirdPartyConnection: ThirdPartyConnection;
  HeimdallSwitch: HeimdallSwitch;
  FeatureFlag: FeatureFlag;
  LogEventInput: LogEventInput;
  LogLevelType: LogLevelType;
  FileAttachmentInput: FileAttachmentInput;
  Point2DInput: Point2DInput;
  AnnotationAttachmentInput: AnnotationAttachmentInput;
  ScreenshotAttachmentInput: ScreenshotAttachmentInput;
  DocumentLocationInput: DocumentLocationInput;
  AdditionalTargetDataInput: AdditionalTargetDataInput;
  MonacoEditorInput: MonacoEditorInput;
  ReactTreeInput: ReactTreeInput;
  KonvaCanvasInput: KonvaCanvasInput;
  MultimediaConfigInput: MultimediaConfigInput;
  HighlightedTextConfigInput: HighlightedTextConfigInput;
  LocationTextConfigInput: LocationTextConfigInput;
  ElementIdentifierInput: ElementIdentifierInput;
  TaskInput: TaskInput;
  TaskTodoInput: TaskTodoInput;
  TaskDoneStatusUpdate: TaskDoneStatusUpdate;
  TaskInputType: TaskInputType;
  CreateThreadMessageInput: CreateThreadMessageInput;
  CreateMessageByExternalIDInput: CreateMessageByExternalIDInput;
  UpdateMessageByExternalIDInput: UpdateMessageByExternalIDInput;
  CreateThreadInput: CreateThreadInput;
  ThreadOptionsInput: ThreadOptionsInput;
  ThreadByExternalID2Input: ThreadByExternalID2Input;
  CreateFileResult: CreateFileResult;
  IDResult: IDResult;
  FailureDetails: FailureDetails;
  SuccessResult: SuccessResult;
  FileUploadStatusEnumType: FileUploadStatusEnumType;
  ThreadEvent: ThreadEvent;
  ThreadCreated: ThreadCreated;
  ThreadDeleted: ThreadDeleted;
  ThreadMessageAdded: ThreadMessageAdded;
  ThreadMessageUpdated: ThreadMessageUpdated;
  ThreadMessageContentAppended: ThreadMessageContentAppended;
  ThreadPropertiesUpdated: ThreadPropertiesUpdated;
  ThreadMessageRemoved: ThreadMessageRemoved;
  ThreadParticipantsUpdatedIncremental: ThreadParticipantsUpdatedIncremental;
  ThreadSubscriberUpdated: ThreadSubscriberUpdated;
  ThreadTypingUsersUpdated: ThreadTypingUsersUpdated;
  ThreadShareToSlack: ThreadShareToSlack;
  EphemeralLocation: EphemeralLocation;
  DurableLocation: DurableLocation;
  UserLocation: UserLocation;
  PageEvent: PageEvent;
  PageThreadAdded: PageThreadAdded;
  PageThreadDeleted: PageThreadDeleted;
  ThreadFilterablePropertiesMatch: ThreadFilterablePropertiesMatch;
  ThreadFilterablePropertiesUnmatch: ThreadFilterablePropertiesUnmatch;
  PageThreadReplyAdded: PageThreadReplyAdded;
  PageVisitorsUpdated: PageVisitorsUpdated;
  PageThreadResolved: PageThreadResolved;
  PageThreadUnresolved: PageThreadUnresolved;
  S3BucketVisible: S3BucketVisible;
  LogoConfigType: LogoConfigType;
  LogoConfigInput: LogoConfigInput;
  ApplicationEmailTemplate: ApplicationEmailTemplate;
  ApplicationLinks: ApplicationLinks;
  ApplicationColors: ApplicationColors;
  ApplicationSupportBotInfo: ApplicationSupportBotInfo;
  PublicApplication: PublicApplication;
  ComputedCustomLinks: ComputedCustomLinks;
  CustomNUXStepContent: CustomNUXStepContent;
  ApplicationNUX: ApplicationNUX;
  DeepLinkInfo: DeepLinkInfo;
  AdminChatUser: AdminChatUser;
  NotificationEvent: NotificationEvent;
  NotificationAdded: NotificationAdded;
  NotificationReadStateUpdated: NotificationReadStateUpdated;
  NotificationDeleted: NotificationDeleted;
  Notification: Notification;
  NotificationReadStatus: NotificationReadStatus;
  NotificationAttachment: NotificationAttachment;
  NotificationURLAttachment: NotificationURLAttachment;
  NotificationMessageAttachment: NotificationMessageAttachment;
  NotificationThreadAttachment: NotificationThreadAttachment;
  NotificationSender: NotificationSender;
  NotificationPage: NotificationPage;
  NotificationHeaderTextNode: NotificationHeaderTextNode;
  NotificationHeaderUserNode: NotificationHeaderUserNode;
  NotificationHeaderNode: NotificationHeaderNode;
  NotificationSummary: NotificationSummary;
  PaginationInfo: PaginationInfo;
  AdminGoRedirect: AdminGoRedirect;
  AdminGoRedirectInputType: AdminGoRedirectInputType;
  Activity: Activity;
  ThreadActivitySummary: ThreadActivitySummary;
  TestToken: TestToken;
  AdminCRTComingFrom: AdminCRTComingFrom;
  AdminCRTDecision: AdminCRTDecision;
  AdminCRTCommunicationStatus: AdminCRTCommunicationStatus;
  AdminCRTIssueType: AdminCRTIssueType;
  AdminCRTPriority: AdminCRTPriority;
  AdminCRTNextAction: AdminCRTNextAction;
  CustomerIssue: CustomerIssue;
  CustomerIssueUpdate: CustomerIssueUpdate;
  CustomerIssueChange: CustomerIssueChange;
  SearchLocationOptions: SearchLocationOptions;
  TimestampRange: TimestampRange;
  SearchSortByOptions: SearchSortByOptions;
  SearchSortInput: SearchSortInput;
  MessageLinkPreview: MessageLinkPreview;
  OrgMemberEvent: OrgMemberEvent;
  OrgMemberAdded: OrgMemberAdded;
  OrgMemberRemoved: OrgMemberRemoved;
  OrgMembersResult: OrgMembersResult;
  SlackConnectedResult: SlackConnectedResult;
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  CustomerSubscriptionUpdated: CustomerSubscriptionUpdated;
  CustomerEvent: CustomerEvent;
  ConsoleGettingStartedUpdated: ConsoleGettingStartedUpdated;
  ApplicationEvent: ApplicationEvent;
  ConsoleApplication: ConsoleApplication;
  CustomEmailTemplate: CustomEmailTemplate;
  CustomLinks: CustomLinks;
  CustomNUXInput: CustomNUXInput;
  CustomNUXStepInput: CustomNUXStepInput;
  SignedUploadURLResult: SignedUploadURLResult;
  StartCheckoutResult: StartCheckoutResult;
  RedirectToStripeCustomerPortalResult: RedirectToStripeCustomerPortalResult;
  ConsoleApplicationOrganization: ConsoleApplicationOrganization;
  UsageStats: UsageStats;
  ConsoleApplicationOrganizationState: ConsoleApplicationOrganizationState;
  ConsoleApplicationUser: ConsoleApplicationUser;
  ConsoleApplicationUserState: ConsoleApplicationUserState;
  SyncUserDuplicateDomainResult: SyncUserDuplicateDomainResult;
};

type MessageResolver = {
  id: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  attachments: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['MessageAttachment']> | Promise<Array<M['MessageAttachment']>>;
  thread: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
  content: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['MessageContent']> | Promise<Maybe<M['MessageContent']>>;
  source: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['MessageSource'] | Promise<M['MessageSource']>;
  timestamp: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
  reactions: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['MessageReaction']> | Promise<Array<M['MessageReaction']>>;
  seen: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  seenBy: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
  url: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  deletedTimestamp: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  lastUpdatedTimestamp: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  importedFromSlackChannel: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  referencedUserData: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['ReferencedUserData']> | Promise<Array<M['ReferencedUserData']>>;
  task: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Task']> | Promise<Maybe<M['Task']>>;
  importedSlackMessageType: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['ImportedSlackMessageType']>
    | Promise<Maybe<M['ImportedSlackMessageType']>>;
  slackURL: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  isFromEmailReply: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  type: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['MessageType'] | Promise<M['MessageType']>;
  iconURL: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  translationKey: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  metadata: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
  extraClassnames: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  skipLinkPreviews: (
    parent: M['Message'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type ReferencedUserDataResolver = {
  id: (
    parent: M['ReferencedUserData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['ReferencedUserData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type MessageAttachmentResolver = {
  __resolveType: (
    parent: M['MessageAttachment'],
    context: RequestContext,
  ) =>
    | 'MessageFileAttachment'
    | 'MessageAnnotationAttachment'
    | 'MessageScreenshotAttachment'
    | 'MessageLinkPreview';
};

type MessageScreenshotAttachmentResolver = {
  id: (
    parent: M['MessageScreenshotAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  screenshot: (
    parent: M['MessageScreenshotAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['File']> | Promise<Maybe<M['File']>>;
  blurredScreenshot: (
    parent: M['MessageScreenshotAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['File']> | Promise<Maybe<M['File']>>;
};

type MessageFileAttachmentResolver = {
  id: (
    parent: M['MessageFileAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  file: (
    parent: M['MessageFileAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['File']> | Promise<Maybe<M['File']>>;
};

type FileResolver = {
  id: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  mimeType: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  uploadStatus: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['FileUploadStatus'] | Promise<M['FileUploadStatus']>;
  url: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  size: (
    parent: M['File'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type Point2DResolver = {
  x: (
    parent: M['Point2D'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
  y: (
    parent: M['Point2D'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type MessageAnnotationAttachmentResolver = {
  id: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  screenshot: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['File']> | Promise<Maybe<M['File']>>;
  blurredScreenshot: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['File']> | Promise<Maybe<M['File']>>;
  location: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DocumentLocation']> | Promise<Maybe<M['DocumentLocation']>>;
  message: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Message'] | Promise<M['Message']>;
  customLocation: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Context']> | Promise<Maybe<M['Context']>>;
  customHighlightedTextConfig: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['HighlightedTextConfig']>
    | Promise<Maybe<M['HighlightedTextConfig']>>;
  customLabel: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  coordsRelativeToTarget: (
    parent: M['MessageAnnotationAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Point2D']> | Promise<Maybe<M['Point2D']>>;
};

type AnnotationsOnPageResolver = {
  allAnnotations: (
    parent: M['AnnotationsOnPage'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Array<M['MessageAnnotationAttachment']>
    | Promise<Array<M['MessageAnnotationAttachment']>>;
  hiddenAnnotationIDs: (
    parent: M['AnnotationsOnPage'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['UUID']> | Promise<Array<M['UUID']>>;
};

type DocumentLocationResolver = {
  selector: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  x: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
  y: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
  iframeSelectors: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['String']> | Promise<Array<M['String']>>;
  onChart: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Boolean']> | Promise<Maybe<M['Boolean']>>;
  textConfig: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['LocationTextConfig']> | Promise<Maybe<M['LocationTextConfig']>>;
  elementIdentifier: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ElementIdentifier']> | Promise<Maybe<M['ElementIdentifier']>>;
  multimediaConfig: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['MultimediaConfig']> | Promise<Maybe<M['MultimediaConfig']>>;
  highlightedTextConfig: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['HighlightedTextConfig']>
    | Promise<Maybe<M['HighlightedTextConfig']>>;
  additionalTargetData: (
    parent: M['DocumentLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['AdditionalTargetData']>
    | Promise<Maybe<M['AdditionalTargetData']>>;
};

type AdditionalTargetDataResolver = {
  targetType: (
    parent: M['AdditionalTargetData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['TargetType'] | Promise<M['TargetType']>;
  monacoEditor: (
    parent: M['AdditionalTargetData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['MonacoEditor']> | Promise<Maybe<M['MonacoEditor']>>;
  reactTree: (
    parent: M['AdditionalTargetData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ReactTree']> | Promise<Maybe<M['ReactTree']>>;
  konvaCanvas: (
    parent: M['AdditionalTargetData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['KonvaCanvas']> | Promise<Maybe<M['KonvaCanvas']>>;
};

type MonacoEditorResolver = {
  monacoID: (
    parent: M['MonacoEditor'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  lineNumber: (
    parent: M['MonacoEditor'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type ReactTreeResolver = {
  key: (
    parent: M['ReactTree'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  treeID: (
    parent: M['ReactTree'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  prefixCls: (
    parent: M['ReactTree'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type KonvaCanvasResolver = {
  x: (
    parent: M['KonvaCanvas'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
  y: (
    parent: M['KonvaCanvas'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type LocationTextConfigResolver = {
  selectedCharOffset: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  textToMatch: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  textToMatchOffset: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  nodeIndex: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  xVsPointer: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
  yVsPointer: (
    parent: M['LocationTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type MultimediaConfigResolver = {
  currentTime: (
    parent: M['MultimediaConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type HighlightedTextConfigResolver = {
  startElementSelector: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  endElementSelector: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  startNodeIndex: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  startNodeOffset: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  endNodeIndex: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  endNodeOffset: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  selectedText: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  textToDisplay: (
    parent: M['HighlightedTextConfig'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ElementIdentifierResolver = {
  version: (
    parent: M['ElementIdentifier'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ElementIdentifierVersion'] | Promise<M['ElementIdentifierVersion']>;
  identifier: (
    parent: M['ElementIdentifier'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['JSONObject'] | Promise<M['JSONObject']>;
};

type ThreadResolver = {
  id: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  orgID: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalOrgID: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  metadata: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
  messages: (
    parent: M['Thread'],
    args: ThreadMessagesArgs,
    context: RequestContext,
  ) => Array<M['Message']> | Promise<Array<M['Message']>>;
  loadMessages: (
    parent: M['Thread'],
    args: ThreadLoadMessagesArgs,
    context: RequestContext,
  ) => M['LoadMessagesResult'] | Promise<M['LoadMessagesResult']>;
  name: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  participants: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['ThreadParticipant']> | Promise<Array<M['ThreadParticipant']>>;
  mentioned: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
  typingUsers: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
  newMessagesCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  newReactionsCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  replyCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  firstUnseenMessageID: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
  subscribed: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  messagesCountExcludingDeleted: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  allMessagesCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  userMessagesCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  actionMessagesCount: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  initialMessagesInclDeleted: (
    parent: M['Thread'],
    args: ThreadInitialMessagesInclDeletedArgs,
    context: RequestContext,
  ) => Array<M['Message']> | Promise<Array<M['Message']>>;
  viewerIsThreadParticipant: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  url: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  navigationURL: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  resolved: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  resolvedTimestamp: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  sharedToSlack: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['SlackMirroredThreadInfo']>
    | Promise<Maybe<M['SlackMirroredThreadInfo']>>;
  loadNewestMessagesToTarget: (
    parent: M['Thread'],
    args: ThreadLoadNewestMessagesToTargetArgs,
    context: RequestContext,
  ) => M['LoadMessagesResult'] | Promise<M['LoadMessagesResult']>;
  replyingUserIDs: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['UUID']> | Promise<Array<M['UUID']>>;
  actionMessageReplyingUserIDs: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['UUID']> | Promise<Array<M['UUID']>>;
  location: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Context'] | Promise<M['Context']>;
  extraClassnames: (
    parent: M['Thread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type MaybeThreadResolver = {
  id: (
    parent: M['MaybeThread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  thread: (
    parent: M['MaybeThread'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Thread']> | Promise<Maybe<M['Thread']>>;
};

type SlackMirroredThreadInfoResolver = {
  channel: (
    parent: M['SlackMirroredThreadInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  slackURL: (
    parent: M['SlackMirroredThreadInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type LoadMessagesResultResolver = {
  messages: (
    parent: M['LoadMessagesResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Message']> | Promise<Array<M['Message']>>;
  olderMessagesCount: (
    parent: M['LoadMessagesResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type ThreadParticipantResolver = {
  user: (
    parent: M['ThreadParticipant'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['User']> | Promise<Maybe<M['User']>>;
  lastSeenTimestamp: (
    parent: M['ThreadParticipant'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  subscribed: (
    parent: M['ThreadParticipant'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Boolean']> | Promise<Maybe<M['Boolean']>>;
};

type UserResolver = {
  id: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  displayName: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  fullName: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  name: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  shortName: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  profilePictureURL: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  userType: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UserType'] | Promise<M['UserType']>;
  metadata: (
    parent: M['User'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
};

type UserWithOrgDetailsResolver = {
  id: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  displayName: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  fullName: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  name: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  shortName: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  profilePictureURL: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  userType: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UserType'] | Promise<M['UserType']>;
  metadata: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
  linkedUserID: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
  canBeNotifiedOnSlack: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  slackUserWithMatchingEmail: (
    parent: M['UserWithOrgDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
};

type PresenceLiveQueryDataResolver = {
  data: (
    parent: M['PresenceLiveQueryData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['UserLocation']> | Promise<Array<M['UserLocation']>>;
  complete: (
    parent: M['PresenceLiveQueryData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type UserLiveQueryDataResolver = {
  users: (
    parent: M['UserLiveQueryData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
  upto: (
    parent: M['UserLiveQueryData'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type PageThreadsResultResolver = {
  threads: (
    parent: M['PageThreadsResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Thread']> | Promise<Array<M['Thread']>>;
  hasMore: (
    parent: M['PageThreadsResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  token: (
    parent: M['PageThreadsResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ApplicationResolver = {
  id: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  sharedSecret: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  serverAccessToken: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  customerAccessToken: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  customLinks: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ApplicationLinks']> | Promise<Maybe<M['ApplicationLinks']>>;
  customEmailTemplate: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['ApplicationEmailTemplate']>
    | Promise<Maybe<M['ApplicationEmailTemplate']>>;
  enableEmailNotifications: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  customS3Bucket: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['S3BucketVisible']> | Promise<Maybe<M['S3BucketVisible']>>;
  segmentWriteKey: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  customNUX: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ApplicationNUX']> | Promise<Maybe<M['ApplicationNUX']>>;
  iconURL: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  type: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ApplicationTierType'] | Promise<M['ApplicationTierType']>;
  environment: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ApplicationEnvironment'] | Promise<M['ApplicationEnvironment']>;
  defaultProvider: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
  supportSlackChannelID: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  supportBotInfo: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['ApplicationSupportBotInfo']>
    | Promise<Maybe<M['ApplicationSupportBotInfo']>>;
  redirectURI: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  customerID: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  deploymentInfo: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ApplicationDeploymentInfo'] | Promise<M['ApplicationDeploymentInfo']>;
  usageMetrics: (
    parent: M['Application'],
    args: ApplicationUsageMetricsArgs,
    context: RequestContext,
  ) => Array<M['JSONObject']> | Promise<Array<M['JSONObject']>>;
  eventWebhookURL: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  eventWebhookSubscriptions: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<Array<M['String']>> | Promise<Maybe<Array<M['String']>>>;
  setupInfo: (
    parent: M['Application'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['ApplicationConsoleSetupInfo']>
    | Promise<Maybe<M['ApplicationConsoleSetupInfo']>>;
};

type ApplicationDeploymentInfoResolver = {
  messages: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  users: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  usersSyncedAllTime: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  orgs: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  orgsSyncedAllTime: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  customLocations: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  customLocationsAllTime: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  reactPackageVersion: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['String']> | Promise<Array<M['String']>>;
  components: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['String']> | Promise<Array<M['String']>>;
  componentsInitializedAllTime: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['String']> | Promise<Array<M['String']>>;
  browsers: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['JSONObject']> | Promise<Array<M['JSONObject']>>;
  operatingSystems: (
    parent: M['ApplicationDeploymentInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['JSONObject']> | Promise<Array<M['JSONObject']>>;
};

type ApplicationConsoleSetupInfoResolver = {
  firstUser: (
    parent: M['ApplicationConsoleSetupInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['User']> | Promise<Maybe<M['User']>>;
  firstOrg: (
    parent: M['ApplicationConsoleSetupInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Organization']> | Promise<Maybe<M['Organization']>>;
  isComponentInitialized: (
    parent: M['ApplicationConsoleSetupInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type AddonResolver = {
  key: (
    parent: M['Addon'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  value: (
    parent: M['Addon'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type StripeSubscriptionResolver = {
  id: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  url: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  status: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  startDate: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
  currentPeriodStart: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
  currentPeriodEnd: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
  amount: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  recurrence: (
    parent: M['StripeSubscription'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['StripeSubscriptionRecurrence']
    | Promise<M['StripeSubscriptionRecurrence']>;
};

type CustomerResolver = {
  id: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  sharedSecret: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  type: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['CustomerType'] | Promise<M['CustomerType']>;
  enableCustomS3Bucket: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  enableCustomSegmentWriteKey: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  implementationStage: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['CustomerImplementationStage']
    | Promise<M['CustomerImplementationStage']>;
  launchDate: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  slackChannel: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  signupCoupon: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  pricingTier: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['PricingTier'] | Promise<M['PricingTier']>;
  billingStatus: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['BillingStatus'] | Promise<M['BillingStatus']>;
  billingType: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['BillingType']> | Promise<Maybe<M['BillingType']>>;
  stripeCustomerID: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  addons: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Addon']> | Promise<Array<M['Addon']>>;
  renewalDate: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  planDescription: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['String']> | Promise<Array<M['String']>>;
  stripeSubscription: (
    parent: M['Customer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['StripeSubscription']> | Promise<Maybe<M['StripeSubscription']>>;
};

type ConsoleUserResolver = {
  id: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  email: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  picture: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  customerID: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
  customer: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Customer']> | Promise<Maybe<M['Customer']>>;
  pendingCustomerID: (
    parent: M['ConsoleUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
};

type PageContextResolver = {
  data: (
    parent: M['PageContext'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Context'] | Promise<M['Context']>;
  providerID: (
    parent: M['PageContext'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
};

type PageVisitorResolver = {
  user: (
    parent: M['PageVisitor'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['User']> | Promise<Maybe<M['User']>>;
  lastPresentTimestamp: (
    parent: M['PageVisitor'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
};

type MessageSourceResolver = {
  __resolveType: (
    parent: M['MessageSource'],
    context: RequestContext,
  ) => 'User';
};

type MessageReactionResolver = {
  id: (
    parent: M['MessageReaction'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  unicodeReaction: (
    parent: M['MessageReaction'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  user: (
    parent: M['MessageReaction'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
  timestamp: (
    parent: M['MessageReaction'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
};

type TaskResolver = {
  id: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  done: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  assignees: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<Maybe<M['User']>> | Promise<Array<Maybe<M['User']>>>;
  todos: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Todo']> | Promise<Array<M['Todo']>>;
  doneStatusLastUpdatedBy: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['User']> | Promise<Maybe<M['User']>>;
  thirdPartyReference: (
    parent: M['Task'],
    args: TaskThirdPartyReferenceArgs,
    context: RequestContext,
  ) =>
    | Maybe<M['TaskThirdPartyReference']>
    | Promise<Maybe<M['TaskThirdPartyReference']>>;
  thirdPartyReferences: (
    parent: M['Task'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Array<M['TaskThirdPartyReference']>
    | Promise<Array<M['TaskThirdPartyReference']>>;
};

type TodoResolver = {
  id: (
    parent: M['Todo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  done: (
    parent: M['Todo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type TaskThirdPartyReferenceResolver = {
  type: (
    parent: M['TaskThirdPartyReference'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ThirdPartyConnectionType'] | Promise<M['ThirdPartyConnectionType']>;
  previewData: (
    parent: M['TaskThirdPartyReference'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['JSONObject']> | Promise<Maybe<M['JSONObject']>>;
  canEdit: (
    parent: M['TaskThirdPartyReference'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  imported: (
    parent: M['TaskThirdPartyReference'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type ViewerIdentityResolver = {
  user: (
    parent: M['ViewerIdentity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
  organization: (
    parent: M['ViewerIdentity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Organization']> | Promise<Maybe<M['Organization']>>;
  email: (
    parent: M['ViewerIdentity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  isSlackConnected: (
    parent: M['ViewerIdentity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  organizations: (
    parent: M['ViewerIdentity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Organization']> | Promise<Array<M['Organization']>>;
};

type ViewerResolver = {
  accessToken: (
    parent: M['Viewer'],
    args: ViewerAccessTokenArgs,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  user: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
  organization: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Organization']> | Promise<Maybe<M['Organization']>>;
  inbox: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Inbox'] | Promise<M['Inbox']>;
  thirdPartyConnection: (
    parent: M['Viewer'],
    args: ViewerThirdPartyConnectionArgs,
    context: RequestContext,
  ) => M['ThirdPartyConnection'] | Promise<M['ThirdPartyConnection']>;
  email: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  isSlackConnected: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  deepLinkInfo: (
    parent: M['Viewer'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DeepLinkInfo']> | Promise<Maybe<M['DeepLinkInfo']>>;
};

type OrganizationResolver = {
  id: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  domain: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  name: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  imageURL: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  usersWithOrgDetails: (
    parent: M['Organization'],
    args: OrganizationUsersWithOrgDetailsArgs,
    context: RequestContext,
  ) => Array<M['UserWithOrgDetails']> | Promise<Array<M['UserWithOrgDetails']>>;
  state: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['OrganizationState'] | Promise<M['OrganizationState']>;
  joinableSlackChannels: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['SlackChannelSchema']> | Promise<Array<M['SlackChannelSchema']>>;
  joinedSlackChannels: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['SlackChannelSchema']> | Promise<Array<M['SlackChannelSchema']>>;
  recentlyActiveThreads: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Thread']> | Promise<Array<M['Thread']>>;
  linkedOrganization: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['LinkedOrganization']> | Promise<Maybe<M['LinkedOrganization']>>;
  metadata: (
    parent: M['Organization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
};

type LinkedOrganizationResolver = {
  id: (
    parent: M['LinkedOrganization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['LinkedOrganization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  usersWithOrgDetails: (
    parent: M['LinkedOrganization'],
    args: LinkedOrganizationUsersWithOrgDetailsArgs,
    context: RequestContext,
  ) => Array<M['UserWithOrgDetails']> | Promise<Array<M['UserWithOrgDetails']>>;
};

type SlackChannelSchemaResolver = {
  name: (
    parent: M['SlackChannelSchema'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  slackID: (
    parent: M['SlackChannelSchema'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type InboxResolver = {
  count: (
    parent: M['Inbox'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  threads: (
    parent: M['Inbox'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Thread']> | Promise<Array<M['Thread']>>;
  threadsArchive: (
    parent: M['Inbox'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Thread']> | Promise<Array<M['Thread']>>;
};

type ThirdPartyConnectionResolver = {
  connected: (
    parent: M['ThirdPartyConnection'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  oAuthStateToken: (
    parent: M['ThirdPartyConnection'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  configuration: (
    parent: M['ThirdPartyConnection'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['JSON']> | Promise<Maybe<M['JSON']>>;
};

type HeimdallSwitchResolver = {
  key: (
    parent: M['HeimdallSwitch'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  isOn: (
    parent: M['HeimdallSwitch'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type FeatureFlagResolver = {
  key: (
    parent: M['FeatureFlag'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  value: (
    parent: M['FeatureFlag'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['SimpleValue'] | Promise<M['SimpleValue']>;
};

type CreateFileResultResolver = {
  uploadURL: (
    parent: M['CreateFileResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  downloadURL: (
    parent: M['CreateFileResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type IDResultResolver = {
  id: (
    parent: M['IDResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
};

type FailureDetailsResolver = {
  code: (
    parent: M['FailureDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  message: (
    parent: M['FailureDetails'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type SuccessResultResolver = {
  success: (
    parent: M['SuccessResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  failureDetails: (
    parent: M['SuccessResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['FailureDetails']> | Promise<Maybe<M['FailureDetails']>>;
};

type ThreadEventResolver = {
  __resolveType: (
    parent: M['ThreadEvent'],
    context: RequestContext,
  ) =>
    | 'ThreadCreated'
    | 'ThreadMessageAdded'
    | 'ThreadMessageUpdated'
    | 'ThreadMessageContentAppended'
    | 'ThreadMessageRemoved'
    | 'ThreadParticipantsUpdatedIncremental'
    | 'ThreadTypingUsersUpdated'
    | 'ThreadShareToSlack'
    | 'ThreadPropertiesUpdated'
    | 'ThreadSubscriberUpdated'
    | 'ThreadDeleted';
};

type ThreadCreatedResolver = {
  thread: (
    parent: M['ThreadCreated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type ThreadDeletedResolver = {
  id: (
    parent: M['ThreadDeleted'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
};

type ThreadMessageAddedResolver = {
  message: (
    parent: M['ThreadMessageAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Message'] | Promise<M['Message']>;
};

type ThreadMessageUpdatedResolver = {
  message: (
    parent: M['ThreadMessageUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Message'] | Promise<M['Message']>;
};

type ThreadMessageContentAppendedResolver = {
  id: (
    parent: M['ThreadMessageContentAppended'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  appendedContent: (
    parent: M['ThreadMessageContentAppended'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type ThreadPropertiesUpdatedResolver = {
  thread: (
    parent: M['ThreadPropertiesUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type ThreadMessageRemovedResolver = {
  id: (
    parent: M['ThreadMessageRemoved'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
};

type ThreadParticipantsUpdatedIncrementalResolver = {
  participant: (
    parent: M['ThreadParticipantsUpdatedIncremental'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ThreadParticipant'] | Promise<M['ThreadParticipant']>;
};

type ThreadSubscriberUpdatedResolver = {
  subscriber: (
    parent: M['ThreadSubscriberUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ThreadParticipant'] | Promise<M['ThreadParticipant']>;
};

type ThreadTypingUsersUpdatedResolver = {
  users: (
    parent: M['ThreadTypingUsersUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
};

type ThreadShareToSlackResolver = {
  id: (
    parent: M['ThreadShareToSlack'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  info: (
    parent: M['ThreadShareToSlack'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['SlackMirroredThreadInfo']>
    | Promise<Maybe<M['SlackMirroredThreadInfo']>>;
};

type EphemeralLocationResolver = {
  contexts: (
    parent: M['EphemeralLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<Array<M['Context']>> | Promise<Maybe<Array<M['Context']>>>;
};

type DurableLocationResolver = {
  context: (
    parent: M['DurableLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Context'] | Promise<M['Context']>;
  timestamp: (
    parent: M['DurableLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Float'] | Promise<M['Float']>;
};

type UserLocationResolver = {
  externalUserID: (
    parent: M['UserLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  ephemeral: (
    parent: M['UserLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['EphemeralLocation']> | Promise<Maybe<M['EphemeralLocation']>>;
  durable: (
    parent: M['UserLocation'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DurableLocation']> | Promise<Maybe<M['DurableLocation']>>;
};

type PageEventResolver = {
  __resolveType: (
    parent: M['PageEvent'],
    context: RequestContext,
  ) =>
    | 'PageThreadAdded'
    | 'PageThreadDeleted'
    | 'PageThreadReplyAdded'
    | 'PageVisitorsUpdated'
    | 'PageThreadResolved'
    | 'PageThreadUnresolved'
    | 'ThreadFilterablePropertiesMatch'
    | 'ThreadFilterablePropertiesUnmatch';
};

type PageThreadAddedResolver = {
  thread: (
    parent: M['PageThreadAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type PageThreadDeletedResolver = {
  id: (
    parent: M['PageThreadDeleted'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
};

type ThreadFilterablePropertiesMatchResolver = {
  thread: (
    parent: M['ThreadFilterablePropertiesMatch'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type ThreadFilterablePropertiesUnmatchResolver = {
  id: (
    parent: M['ThreadFilterablePropertiesUnmatch'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  thread: (
    parent: M['ThreadFilterablePropertiesUnmatch'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type PageThreadReplyAddedResolver = {
  thread: (
    parent: M['PageThreadReplyAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
  message: (
    parent: M['PageThreadReplyAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Message'] | Promise<M['Message']>;
};

type PageVisitorsUpdatedResolver = {
  visitors: (
    parent: M['PageVisitorsUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['PageVisitor']> | Promise<Array<M['PageVisitor']>>;
};

type PageThreadResolvedResolver = {
  thread: (
    parent: M['PageThreadResolved'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type PageThreadUnresolvedResolver = {
  thread: (
    parent: M['PageThreadUnresolved'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type S3BucketVisibleResolver = {
  id: (
    parent: M['S3BucketVisible'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['S3BucketVisible'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  region: (
    parent: M['S3BucketVisible'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type LogoConfigTypeResolver = {
  height: (
    parent: M['LogoConfigType'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  width: (
    parent: M['LogoConfigType'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type ApplicationEmailTemplateResolver = {
  partnerName: (
    parent: M['ApplicationEmailTemplate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  imageURL: (
    parent: M['ApplicationEmailTemplate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  sender: (
    parent: M['ApplicationEmailTemplate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  logoConfig: (
    parent: M['ApplicationEmailTemplate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['LogoConfigType']> | Promise<Maybe<M['LogoConfigType']>>;
};

type ApplicationLinksResolver = {
  learnMore: (
    parent: M['ApplicationLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  upgradePlan: (
    parent: M['ApplicationLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  leaveFeedback: (
    parent: M['ApplicationLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ApplicationColorsResolver = {
  launcherOpen: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  launcherClose: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  actions: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  presence: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  avatarTint: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  underlay: (
    parent: M['ApplicationColors'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ApplicationSupportBotInfoResolver = {
  name: (
    parent: M['ApplicationSupportBotInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  profilePictureURL: (
    parent: M['ApplicationSupportBotInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type PublicApplicationResolver = {
  id: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  name: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  customLinks: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ComputedCustomLinks'] | Promise<M['ComputedCustomLinks']>;
  customNUX: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ApplicationNUX']> | Promise<Maybe<M['ApplicationNUX']>>;
  iconURL: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  environment: (
    parent: M['PublicApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ApplicationEnvironment'] | Promise<M['ApplicationEnvironment']>;
};

type ComputedCustomLinksResolver = {
  learnMore: (
    parent: M['ComputedCustomLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  upgradePlan: (
    parent: M['ComputedCustomLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  leaveFeedback: (
    parent: M['ComputedCustomLinks'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type CustomNUXStepContentResolver = {
  title: (
    parent: M['CustomNUXStepContent'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  text: (
    parent: M['CustomNUXStepContent'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  imageURL: (
    parent: M['CustomNUXStepContent'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ApplicationNUXResolver = {
  initialOpen: (
    parent: M['ApplicationNUX'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['CustomNUXStepContent']>
    | Promise<Maybe<M['CustomNUXStepContent']>>;
  welcome: (
    parent: M['ApplicationNUX'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['CustomNUXStepContent']>
    | Promise<Maybe<M['CustomNUXStepContent']>>;
};

type DeepLinkInfoResolver = {
  threadID: (
    parent: M['DeepLinkInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  messageID: (
    parent: M['DeepLinkInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['UUID']> | Promise<Maybe<M['UUID']>>;
};

type AdminChatUserResolver = {
  user: (
    parent: M['AdminChatUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
};

type NotificationEventResolver = {
  __resolveType: (
    parent: M['NotificationEvent'],
    context: RequestContext,
  ) =>
    | 'NotificationAdded'
    | 'NotificationReadStateUpdated'
    | 'NotificationDeleted';
};

type NotificationAddedResolver = {
  notification: (
    parent: M['NotificationAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Notification'] | Promise<M['Notification']>;
};

type NotificationReadStateUpdatedResolver = {
  notification: (
    parent: M['NotificationReadStateUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Notification'] | Promise<M['Notification']>;
};

type NotificationDeletedResolver = {
  id: (
    parent: M['NotificationDeleted'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
};

type NotificationResolver = {
  id: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  externalID: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  senders: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['NotificationSender']> | Promise<Array<M['NotificationSender']>>;
  iconUrl: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  header: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Array<M['NotificationHeaderNode']>
    | Promise<Array<M['NotificationHeaderNode']>>;
  headerTranslationKey: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  headerSimpleTranslationParams: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['SimpleTranslationParameters']>
    | Promise<Maybe<M['SimpleTranslationParameters']>>;
  attachment: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Maybe<M['NotificationAttachment']>
    | Promise<Maybe<M['NotificationAttachment']>>;
  readStatus: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['NotificationReadStatus'] | Promise<M['NotificationReadStatus']>;
  timestamp: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
  extraClassnames: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  metadata: (
    parent: M['Notification'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Metadata'] | Promise<M['Metadata']>;
};

type NotificationAttachmentResolver = {
  __resolveType: (
    parent: M['NotificationAttachment'],
    context: RequestContext,
  ) =>
    | 'NotificationURLAttachment'
    | 'NotificationMessageAttachment'
    | 'NotificationThreadAttachment';
};

type NotificationURLAttachmentResolver = {
  url: (
    parent: M['NotificationURLAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type NotificationMessageAttachmentResolver = {
  message: (
    parent: M['NotificationMessageAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Message'] | Promise<M['Message']>;
};

type NotificationThreadAttachmentResolver = {
  thread: (
    parent: M['NotificationThreadAttachment'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Thread'] | Promise<M['Thread']>;
};

type NotificationSenderResolver = {
  __resolveType: (
    parent: M['NotificationSender'],
    context: RequestContext,
  ) => 'User';
};

type NotificationPageResolver = {
  nodes: (
    parent: M['NotificationPage'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['Notification']> | Promise<Array<M['Notification']>>;
  paginationInfo: (
    parent: M['NotificationPage'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['PaginationInfo'] | Promise<M['PaginationInfo']>;
};

type NotificationHeaderTextNodeResolver = {
  text: (
    parent: M['NotificationHeaderTextNode'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  bold: (
    parent: M['NotificationHeaderTextNode'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type NotificationHeaderUserNodeResolver = {
  user: (
    parent: M['NotificationHeaderUserNode'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
};

type NotificationHeaderNodeResolver = {
  __resolveType: (
    parent: M['NotificationHeaderNode'],
    context: RequestContext,
  ) => 'NotificationHeaderTextNode' | 'NotificationHeaderUserNode';
};

type NotificationSummaryResolver = {
  unreadNotificationCount: (
    parent: M['NotificationSummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type PaginationInfoResolver = {
  endCursor: (
    parent: M['PaginationInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  hasNextPage: (
    parent: M['PaginationInfo'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type AdminGoRedirectResolver = {
  name: (
    parent: M['AdminGoRedirect'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  url: (
    parent: M['AdminGoRedirect'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  redirectCount: (
    parent: M['AdminGoRedirect'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type ActivityResolver = {
  threadSummary: (
    parent: M['Activity'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['ThreadActivitySummary'] | Promise<M['ThreadActivitySummary']>;
};

type ThreadActivitySummaryResolver = {
  totalThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  unreadThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  newThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  unreadSubscribedThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  resolvedThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  emptyThreadCount: (
    parent: M['ThreadActivitySummary'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type TestTokenResolver = {
  token: (
    parent: M['TestToken'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type CustomerIssueResolver = {
  id: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  customer: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Customer'] | Promise<M['Customer']>;
  title: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  body: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  comingFrom: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['AdminCRTComingFrom'] | Promise<M['AdminCRTComingFrom']>;
  decision: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['AdminCRTDecision'] | Promise<M['AdminCRTDecision']>;
  communicationStatus: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['AdminCRTCommunicationStatus']
    | Promise<M['AdminCRTCommunicationStatus']>;
  nextAction: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['AdminCRTNextAction'] | Promise<M['AdminCRTNextAction']>;
  lastTouch: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['DateTime']> | Promise<Maybe<M['DateTime']>>;
  type: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['AdminCRTIssueType'] | Promise<M['AdminCRTIssueType']>;
  priority: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['AdminCRTPriority'] | Promise<M['AdminCRTPriority']>;
  externallyVisible: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  assignee: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['User']> | Promise<Maybe<M['User']>>;
  history: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Array<M['CustomerIssueChange']>
    | Promise<Array<M['CustomerIssueChange']>>;
  subscribed: (
    parent: M['CustomerIssue'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type CustomerIssueUpdateResolver = {
  field: (
    parent: M['CustomerIssueUpdate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  oldValue: (
    parent: M['CustomerIssueUpdate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['JSON']> | Promise<Maybe<M['JSON']>>;
  newValue: (
    parent: M['CustomerIssueUpdate'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['JSON']> | Promise<Maybe<M['JSON']>>;
};

type CustomerIssueChangeResolver = {
  user: (
    parent: M['CustomerIssueChange'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
  created: (
    parent: M['CustomerIssueChange'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  updated: (
    parent: M['CustomerIssueChange'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | Array<M['CustomerIssueUpdate']>
    | Promise<Array<M['CustomerIssueUpdate']>>;
  timestamp: (
    parent: M['CustomerIssueChange'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
};

type MessageLinkPreviewResolver = {
  id: (
    parent: M['MessageLinkPreview'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  url: (
    parent: M['MessageLinkPreview'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  title: (
    parent: M['MessageLinkPreview'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  description: (
    parent: M['MessageLinkPreview'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  img: (
    parent: M['MessageLinkPreview'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type OrgMemberEventResolver = {
  __resolveType: (
    parent: M['OrgMemberEvent'],
    context: RequestContext,
  ) => 'OrgMemberAdded' | 'OrgMemberRemoved';
};

type OrgMemberAddedResolver = {
  user: (
    parent: M['OrgMemberAdded'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['User'] | Promise<M['User']>;
};

type OrgMemberRemovedResolver = {
  externalUserID: (
    parent: M['OrgMemberRemoved'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
};

type OrgMembersResultResolver = {
  users: (
    parent: M['OrgMembersResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['User']> | Promise<Array<M['User']>>;
  hasMore: (
    parent: M['OrgMembersResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  token: (
    parent: M['OrgMembersResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type SlackConnectedResultResolver = {
  isOrgConnected: (
    parent: M['SlackConnectedResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  isUserConnected: (
    parent: M['SlackConnectedResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
};

type QueryResolver = {
  ping: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  applications: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['ConsoleApplication']> | Promise<Array<M['ConsoleApplication']>>;
  application: (
    parent: M['Query'],
    args: ApplicationQueryArgs,
    context: RequestContext,
  ) => Maybe<M['Application']> | Promise<Maybe<M['Application']>>;
  consoleUser: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['ConsoleUser']> | Promise<Maybe<M['ConsoleUser']>>;
  customerConsoleUsers: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['ConsoleUser']> | Promise<Array<M['ConsoleUser']>>;
  s3Bucket: (
    parent: M['Query'],
    args: S3BucketQueryArgs,
    context: RequestContext,
  ) => Maybe<M['S3BucketVisible']> | Promise<Maybe<M['S3BucketVisible']>>;
  featureFlags: (
    parent: M['Query'],
    args: FeatureFlagsQueryArgs,
    context: RequestContext,
  ) => Array<M['FeatureFlag']> | Promise<Array<M['FeatureFlag']>>;
  encodedSlackToken: (
    parent: M['Query'],
    args: EncodedSlackTokenQueryArgs,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  slackChannelsForConsole: (
    parent: M['Query'],
    args: SlackChannelsForConsoleQueryArgs,
    context: RequestContext,
  ) => Array<M['SlackChannelSchema']> | Promise<Array<M['SlackChannelSchema']>>;
  applicationFlag: (
    parent: M['Query'],
    args: ApplicationFlagQueryArgs,
    context: RequestContext,
  ) => Maybe<M['FeatureFlag']> | Promise<Maybe<M['FeatureFlag']>>;
  getOrgs: (
    parent: M['Query'],
    args: GetOrgsQueryArgs,
    context: RequestContext,
  ) =>
    | Maybe<Array<M['ConsoleApplicationOrganization']>>
    | Promise<Maybe<Array<M['ConsoleApplicationOrganization']>>>;
  getUsers: (
    parent: M['Query'],
    args: GetUsersQueryArgs,
    context: RequestContext,
  ) =>
    | Maybe<Array<M['ConsoleApplicationUser']>>
    | Promise<Maybe<Array<M['ConsoleApplicationUser']>>>;
  customerIssues: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Array<M['CustomerIssue']> | Promise<Array<M['CustomerIssue']>>;
  getCustomerIssue: (
    parent: M['Query'],
    args: GetCustomerIssueQueryArgs,
    context: RequestContext,
  ) => Maybe<M['CustomerIssue']> | Promise<Maybe<M['CustomerIssue']>>;
  consoleCordSessionToken: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  usageStats: (
    parent: M['Query'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['UsageStats'] | Promise<M['UsageStats']>;
};

type MutationResolver = {
  logEvents: (
    parent: M['Mutation'],
    args: LogEventsMutationArgs,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  syncUser: (
    parent: M['Mutation'],
    args: SyncUserMutationArgs,
    context: RequestContext,
  ) =>
    | M['SyncUserDuplicateDomainResult']
    | Promise<M['SyncUserDuplicateDomainResult']>;
  updateApplication: (
    parent: M['Mutation'],
    args: UpdateApplicationMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  deleteApplicationCustomS3Bucket: (
    parent: M['Mutation'],
    args: DeleteApplicationCustomS3BucketMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  updateCustomS3BucketSecret: (
    parent: M['Mutation'],
    args: UpdateCustomS3BucketSecretMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  createApplicationCustomS3Bucket: (
    parent: M['Mutation'],
    args: CreateApplicationCustomS3BucketMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  getSignedUploadURL: (
    parent: M['Mutation'],
    args: GetSignedUploadURLMutationArgs,
    context: RequestContext,
  ) => M['SignedUploadURLResult'] | Promise<M['SignedUploadURLResult']>;
  createApplication: (
    parent: M['Mutation'],
    args: CreateApplicationMutationArgs,
    context: RequestContext,
  ) => M['UUID'] | Promise<M['UUID']>;
  updateSupportBot: (
    parent: M['Mutation'],
    args: UpdateSupportBotMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  removeSlackSupportOrg: (
    parent: M['Mutation'],
    args: RemoveSlackSupportOrgMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  addConsoleUserToCustomer: (
    parent: M['Mutation'],
    args: AddConsoleUserToCustomerMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  removeConsoleUserFromCustomer: (
    parent: M['Mutation'],
    args: RemoveConsoleUserFromCustomerMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  createCustomer: (
    parent: M['Mutation'],
    args: CreateCustomerMutationArgs,
    context: RequestContext,
  ) => M['Customer'] | Promise<M['Customer']>;
  createCustomerIssue: (
    parent: M['Mutation'],
    args: CreateCustomerIssueMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  updateCustomerIssue: (
    parent: M['Mutation'],
    args: UpdateCustomerIssueMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  updateCustomerName: (
    parent: M['Mutation'],
    args: UpdateCustomerNameMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  updateAccessToCustomer: (
    parent: M['Mutation'],
    args: UpdateAccessToCustomerMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  requestAccessToCustomer: (
    parent: M['Mutation'],
    args: RequestAccessToCustomerMutationArgs,
    context: RequestContext,
  ) => M['SuccessResult'] | Promise<M['SuccessResult']>;
  startCheckout: (
    parent: M['Mutation'],
    args: StartCheckoutMutationArgs,
    context: RequestContext,
  ) => M['StartCheckoutResult'] | Promise<M['StartCheckoutResult']>;
  redirectToStripeCustomerPortal: (
    parent: M['Mutation'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['RedirectToStripeCustomerPortalResult']
    | Promise<M['RedirectToStripeCustomerPortalResult']>;
};

type SubscriptionResolver = {
  customerEvents: {
    subscribe: (
      parent: Record<string, never>,
      args: CustomerEventsSubscriptionArgs,
      context: RequestContext,
    ) => any | Promise<any>;
    resolve: (
      parent: any,
      args: CustomerEventsSubscriptionArgs,
      context: RequestContext,
    ) => M['CustomerEvent'] | Promise<M['CustomerEvent']>;
  };
  applicationEvents: {
    subscribe: (
      parent: Record<string, never>,
      args: ApplicationEventsSubscriptionArgs,
      context: RequestContext,
    ) => any | Promise<any>;
    resolve: (
      parent: any,
      args: ApplicationEventsSubscriptionArgs,
      context: RequestContext,
    ) => M['ApplicationEvent'] | Promise<M['ApplicationEvent']>;
  };
};

type CustomerSubscriptionUpdatedResolver = {
  customer: (
    parent: M['CustomerSubscriptionUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Customer'] | Promise<M['Customer']>;
};

type CustomerEventResolver = {
  __resolveType: (
    parent: M['CustomerEvent'],
    context: RequestContext,
  ) => 'CustomerSubscriptionUpdated';
};

type ConsoleGettingStartedUpdatedResolver = {
  application: (
    parent: M['ConsoleGettingStartedUpdated'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['Application']> | Promise<Maybe<M['Application']>>;
};

type ApplicationEventResolver = {
  __resolveType: (
    parent: M['ApplicationEvent'],
    context: RequestContext,
  ) => 'ConsoleGettingStartedUpdated';
};

type ConsoleApplicationResolver = {
  application: (
    parent: M['ConsoleApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Application'] | Promise<M['Application']>;
  userCount: (
    parent: M['ConsoleApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
  orgCount: (
    parent: M['ConsoleApplication'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type SignedUploadURLResultResolver = {
  uploadURL: (
    parent: M['SignedUploadURLResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  downloadURL: (
    parent: M['SignedUploadURLResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type StartCheckoutResultResolver = {
  success: (
    parent: M['StartCheckoutResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  failureDetails: (
    parent: M['StartCheckoutResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['FailureDetails']> | Promise<Maybe<M['FailureDetails']>>;
  redirectURL: (
    parent: M['StartCheckoutResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type RedirectToStripeCustomerPortalResultResolver = {
  success: (
    parent: M['RedirectToStripeCustomerPortalResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  failureDetails: (
    parent: M['RedirectToStripeCustomerPortalResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['FailureDetails']> | Promise<Maybe<M['FailureDetails']>>;
  redirectURL: (
    parent: M['RedirectToStripeCustomerPortalResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
};

type ConsoleApplicationOrganizationResolver = {
  id: (
    parent: M['ConsoleApplicationOrganization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  name: (
    parent: M['ConsoleApplicationOrganization'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['String'] | Promise<M['String']>;
  status: (
    parent: M['ConsoleApplicationOrganization'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['ConsoleApplicationOrganizationState']
    | Promise<M['ConsoleApplicationOrganizationState']>;
};

type UsageStatsResolver = {
  mau: (
    parent: M['UsageStats'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Int'] | Promise<M['Int']>;
};

type ConsoleApplicationUserResolver = {
  id: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  name: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  email: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  profilePictureURL: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  status: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) =>
    | M['ConsoleApplicationUserState']
    | Promise<M['ConsoleApplicationUserState']>;
  createdTimestamp: (
    parent: M['ConsoleApplicationUser'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['DateTime'] | Promise<M['DateTime']>;
};

type SyncUserDuplicateDomainResultResolver = {
  success: (
    parent: M['SyncUserDuplicateDomainResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => M['Boolean'] | Promise<M['Boolean']>;
  customerIDs: (
    parent: M['SyncUserDuplicateDomainResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<Array<M['String']>> | Promise<Maybe<Array<M['String']>>>;
  customerName: (
    parent: M['SyncUserDuplicateDomainResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['String']> | Promise<Maybe<M['String']>>;
  failureDetails: (
    parent: M['SyncUserDuplicateDomainResult'],
    args: Record<string, never>,
    context: RequestContext,
  ) => Maybe<M['FailureDetails']> | Promise<Maybe<M['FailureDetails']>>;
};

export type Resolvers = {
  DateTime: GraphQLScalarType;
  ElementIdentifierVersion: GraphQLScalarType;
  SimpleValue: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Context: GraphQLScalarType;
  Metadata: GraphQLScalarType;
  SimpleTranslationParameters: GraphQLScalarType;
  MessageContent: GraphQLScalarType;
  UUID: GraphQLScalarType;
  JsonObjectReducerData: GraphQLScalarType;
  Message: MakeExistingFieldsOptional<MessageResolver, Message, M['Message']>;
  ReferencedUserData: MakeExistingFieldsOptional<
    ReferencedUserDataResolver,
    ReferencedUserData,
    M['ReferencedUserData']
  >;
  MessageScreenshotAttachment: MakeExistingFieldsOptional<
    MessageScreenshotAttachmentResolver,
    MessageScreenshotAttachment,
    M['MessageScreenshotAttachment']
  >;
  MessageFileAttachment: MakeExistingFieldsOptional<
    MessageFileAttachmentResolver,
    MessageFileAttachment,
    M['MessageFileAttachment']
  >;
  File: MakeExistingFieldsOptional<FileResolver, File, M['File']>;
  Point2D: MakeExistingFieldsOptional<Point2DResolver, Point2D, M['Point2D']>;
  MessageAnnotationAttachment: MakeExistingFieldsOptional<
    MessageAnnotationAttachmentResolver,
    MessageAnnotationAttachment,
    M['MessageAnnotationAttachment']
  >;
  AnnotationsOnPage: MakeExistingFieldsOptional<
    AnnotationsOnPageResolver,
    AnnotationsOnPage,
    M['AnnotationsOnPage']
  >;
  DocumentLocation: MakeExistingFieldsOptional<
    DocumentLocationResolver,
    DocumentLocation,
    M['DocumentLocation']
  >;
  AdditionalTargetData: MakeExistingFieldsOptional<
    AdditionalTargetDataResolver,
    AdditionalTargetData,
    M['AdditionalTargetData']
  >;
  MonacoEditor: MakeExistingFieldsOptional<
    MonacoEditorResolver,
    MonacoEditor,
    M['MonacoEditor']
  >;
  ReactTree: MakeExistingFieldsOptional<
    ReactTreeResolver,
    ReactTree,
    M['ReactTree']
  >;
  KonvaCanvas: MakeExistingFieldsOptional<
    KonvaCanvasResolver,
    KonvaCanvas,
    M['KonvaCanvas']
  >;
  LocationTextConfig: MakeExistingFieldsOptional<
    LocationTextConfigResolver,
    LocationTextConfig,
    M['LocationTextConfig']
  >;
  MultimediaConfig: MakeExistingFieldsOptional<
    MultimediaConfigResolver,
    MultimediaConfig,
    M['MultimediaConfig']
  >;
  HighlightedTextConfig: MakeExistingFieldsOptional<
    HighlightedTextConfigResolver,
    HighlightedTextConfig,
    M['HighlightedTextConfig']
  >;
  ElementIdentifier: MakeExistingFieldsOptional<
    ElementIdentifierResolver,
    ElementIdentifier,
    M['ElementIdentifier']
  >;
  Thread: MakeExistingFieldsOptional<ThreadResolver, Thread, M['Thread']>;
  MaybeThread: MakeExistingFieldsOptional<
    MaybeThreadResolver,
    MaybeThread,
    M['MaybeThread']
  >;
  SlackMirroredThreadInfo: MakeExistingFieldsOptional<
    SlackMirroredThreadInfoResolver,
    SlackMirroredThreadInfo,
    M['SlackMirroredThreadInfo']
  >;
  LoadMessagesResult: MakeExistingFieldsOptional<
    LoadMessagesResultResolver,
    LoadMessagesResult,
    M['LoadMessagesResult']
  >;
  ThreadParticipant: MakeExistingFieldsOptional<
    ThreadParticipantResolver,
    ThreadParticipant,
    M['ThreadParticipant']
  >;
  User: MakeExistingFieldsOptional<UserResolver, User, M['User']>;
  UserWithOrgDetails: MakeExistingFieldsOptional<
    UserWithOrgDetailsResolver,
    UserWithOrgDetails,
    M['UserWithOrgDetails']
  >;
  PresenceLiveQueryData: MakeExistingFieldsOptional<
    PresenceLiveQueryDataResolver,
    PresenceLiveQueryData,
    M['PresenceLiveQueryData']
  >;
  UserLiveQueryData: MakeExistingFieldsOptional<
    UserLiveQueryDataResolver,
    UserLiveQueryData,
    M['UserLiveQueryData']
  >;
  PageThreadsResult: MakeExistingFieldsOptional<
    PageThreadsResultResolver,
    PageThreadsResult,
    M['PageThreadsResult']
  >;
  Application: MakeExistingFieldsOptional<
    ApplicationResolver,
    Application,
    M['Application']
  >;
  ApplicationDeploymentInfo: MakeExistingFieldsOptional<
    ApplicationDeploymentInfoResolver,
    ApplicationDeploymentInfo,
    M['ApplicationDeploymentInfo']
  >;
  ApplicationConsoleSetupInfo: MakeExistingFieldsOptional<
    ApplicationConsoleSetupInfoResolver,
    ApplicationConsoleSetupInfo,
    M['ApplicationConsoleSetupInfo']
  >;
  Addon: MakeExistingFieldsOptional<AddonResolver, Addon, M['Addon']>;
  StripeSubscription: MakeExistingFieldsOptional<
    StripeSubscriptionResolver,
    StripeSubscription,
    M['StripeSubscription']
  >;
  Customer: MakeExistingFieldsOptional<
    CustomerResolver,
    Customer,
    M['Customer']
  >;
  ConsoleUser: MakeExistingFieldsOptional<
    ConsoleUserResolver,
    ConsoleUser,
    M['ConsoleUser']
  >;
  PageContext: MakeExistingFieldsOptional<
    PageContextResolver,
    PageContext,
    M['PageContext']
  >;
  PageVisitor: MakeExistingFieldsOptional<
    PageVisitorResolver,
    PageVisitor,
    M['PageVisitor']
  >;
  MessageReaction: MakeExistingFieldsOptional<
    MessageReactionResolver,
    MessageReaction,
    M['MessageReaction']
  >;
  Task: MakeExistingFieldsOptional<TaskResolver, Task, M['Task']>;
  Todo: MakeExistingFieldsOptional<TodoResolver, Todo, M['Todo']>;
  TaskThirdPartyReference: MakeExistingFieldsOptional<
    TaskThirdPartyReferenceResolver,
    TaskThirdPartyReference,
    M['TaskThirdPartyReference']
  >;
  ViewerIdentity: MakeExistingFieldsOptional<
    ViewerIdentityResolver,
    ViewerIdentity,
    M['ViewerIdentity']
  >;
  Viewer: MakeExistingFieldsOptional<ViewerResolver, Viewer, M['Viewer']>;
  Organization: MakeExistingFieldsOptional<
    OrganizationResolver,
    Organization,
    M['Organization']
  >;
  LinkedOrganization: MakeExistingFieldsOptional<
    LinkedOrganizationResolver,
    LinkedOrganization,
    M['LinkedOrganization']
  >;
  SlackChannelSchema: MakeExistingFieldsOptional<
    SlackChannelSchemaResolver,
    SlackChannelSchema,
    M['SlackChannelSchema']
  >;
  Inbox: MakeExistingFieldsOptional<InboxResolver, Inbox, M['Inbox']>;
  ThirdPartyConnection: MakeExistingFieldsOptional<
    ThirdPartyConnectionResolver,
    ThirdPartyConnection,
    M['ThirdPartyConnection']
  >;
  HeimdallSwitch: MakeExistingFieldsOptional<
    HeimdallSwitchResolver,
    HeimdallSwitch,
    M['HeimdallSwitch']
  >;
  FeatureFlag: MakeExistingFieldsOptional<
    FeatureFlagResolver,
    FeatureFlag,
    M['FeatureFlag']
  >;
  CreateFileResult: MakeExistingFieldsOptional<
    CreateFileResultResolver,
    CreateFileResult,
    M['CreateFileResult']
  >;
  IDResult: MakeExistingFieldsOptional<
    IDResultResolver,
    IDResult,
    M['IDResult']
  >;
  FailureDetails: MakeExistingFieldsOptional<
    FailureDetailsResolver,
    FailureDetails,
    M['FailureDetails']
  >;
  SuccessResult: MakeExistingFieldsOptional<
    SuccessResultResolver,
    SuccessResult,
    M['SuccessResult']
  >;
  ThreadCreated: MakeExistingFieldsOptional<
    ThreadCreatedResolver,
    ThreadCreated,
    M['ThreadCreated']
  >;
  ThreadDeleted: MakeExistingFieldsOptional<
    ThreadDeletedResolver,
    ThreadDeleted,
    M['ThreadDeleted']
  >;
  ThreadMessageAdded: MakeExistingFieldsOptional<
    ThreadMessageAddedResolver,
    ThreadMessageAdded,
    M['ThreadMessageAdded']
  >;
  ThreadMessageUpdated: MakeExistingFieldsOptional<
    ThreadMessageUpdatedResolver,
    ThreadMessageUpdated,
    M['ThreadMessageUpdated']
  >;
  ThreadMessageContentAppended: MakeExistingFieldsOptional<
    ThreadMessageContentAppendedResolver,
    ThreadMessageContentAppended,
    M['ThreadMessageContentAppended']
  >;
  ThreadPropertiesUpdated: MakeExistingFieldsOptional<
    ThreadPropertiesUpdatedResolver,
    ThreadPropertiesUpdated,
    M['ThreadPropertiesUpdated']
  >;
  ThreadMessageRemoved: MakeExistingFieldsOptional<
    ThreadMessageRemovedResolver,
    ThreadMessageRemoved,
    M['ThreadMessageRemoved']
  >;
  ThreadParticipantsUpdatedIncremental: MakeExistingFieldsOptional<
    ThreadParticipantsUpdatedIncrementalResolver,
    ThreadParticipantsUpdatedIncremental,
    M['ThreadParticipantsUpdatedIncremental']
  >;
  ThreadSubscriberUpdated: MakeExistingFieldsOptional<
    ThreadSubscriberUpdatedResolver,
    ThreadSubscriberUpdated,
    M['ThreadSubscriberUpdated']
  >;
  ThreadTypingUsersUpdated: MakeExistingFieldsOptional<
    ThreadTypingUsersUpdatedResolver,
    ThreadTypingUsersUpdated,
    M['ThreadTypingUsersUpdated']
  >;
  ThreadShareToSlack: MakeExistingFieldsOptional<
    ThreadShareToSlackResolver,
    ThreadShareToSlack,
    M['ThreadShareToSlack']
  >;
  EphemeralLocation: MakeExistingFieldsOptional<
    EphemeralLocationResolver,
    EphemeralLocation,
    M['EphemeralLocation']
  >;
  DurableLocation: MakeExistingFieldsOptional<
    DurableLocationResolver,
    DurableLocation,
    M['DurableLocation']
  >;
  UserLocation: MakeExistingFieldsOptional<
    UserLocationResolver,
    UserLocation,
    M['UserLocation']
  >;
  PageThreadAdded: MakeExistingFieldsOptional<
    PageThreadAddedResolver,
    PageThreadAdded,
    M['PageThreadAdded']
  >;
  PageThreadDeleted: MakeExistingFieldsOptional<
    PageThreadDeletedResolver,
    PageThreadDeleted,
    M['PageThreadDeleted']
  >;
  ThreadFilterablePropertiesMatch: MakeExistingFieldsOptional<
    ThreadFilterablePropertiesMatchResolver,
    ThreadFilterablePropertiesMatch,
    M['ThreadFilterablePropertiesMatch']
  >;
  ThreadFilterablePropertiesUnmatch: MakeExistingFieldsOptional<
    ThreadFilterablePropertiesUnmatchResolver,
    ThreadFilterablePropertiesUnmatch,
    M['ThreadFilterablePropertiesUnmatch']
  >;
  PageThreadReplyAdded: MakeExistingFieldsOptional<
    PageThreadReplyAddedResolver,
    PageThreadReplyAdded,
    M['PageThreadReplyAdded']
  >;
  PageVisitorsUpdated: MakeExistingFieldsOptional<
    PageVisitorsUpdatedResolver,
    PageVisitorsUpdated,
    M['PageVisitorsUpdated']
  >;
  PageThreadResolved: MakeExistingFieldsOptional<
    PageThreadResolvedResolver,
    PageThreadResolved,
    M['PageThreadResolved']
  >;
  PageThreadUnresolved: MakeExistingFieldsOptional<
    PageThreadUnresolvedResolver,
    PageThreadUnresolved,
    M['PageThreadUnresolved']
  >;
  S3BucketVisible: MakeExistingFieldsOptional<
    S3BucketVisibleResolver,
    S3BucketVisible,
    M['S3BucketVisible']
  >;
  LogoConfigType: MakeExistingFieldsOptional<
    LogoConfigTypeResolver,
    LogoConfigType,
    M['LogoConfigType']
  >;
  ApplicationEmailTemplate: MakeExistingFieldsOptional<
    ApplicationEmailTemplateResolver,
    ApplicationEmailTemplate,
    M['ApplicationEmailTemplate']
  >;
  ApplicationLinks: MakeExistingFieldsOptional<
    ApplicationLinksResolver,
    ApplicationLinks,
    M['ApplicationLinks']
  >;
  ApplicationColors: MakeExistingFieldsOptional<
    ApplicationColorsResolver,
    ApplicationColors,
    M['ApplicationColors']
  >;
  ApplicationSupportBotInfo: MakeExistingFieldsOptional<
    ApplicationSupportBotInfoResolver,
    ApplicationSupportBotInfo,
    M['ApplicationSupportBotInfo']
  >;
  PublicApplication: MakeExistingFieldsOptional<
    PublicApplicationResolver,
    PublicApplication,
    M['PublicApplication']
  >;
  ComputedCustomLinks: MakeExistingFieldsOptional<
    ComputedCustomLinksResolver,
    ComputedCustomLinks,
    M['ComputedCustomLinks']
  >;
  CustomNUXStepContent: MakeExistingFieldsOptional<
    CustomNUXStepContentResolver,
    CustomNUXStepContent,
    M['CustomNUXStepContent']
  >;
  ApplicationNUX: MakeExistingFieldsOptional<
    ApplicationNUXResolver,
    ApplicationNUX,
    M['ApplicationNUX']
  >;
  DeepLinkInfo: MakeExistingFieldsOptional<
    DeepLinkInfoResolver,
    DeepLinkInfo,
    M['DeepLinkInfo']
  >;
  AdminChatUser: MakeExistingFieldsOptional<
    AdminChatUserResolver,
    AdminChatUser,
    M['AdminChatUser']
  >;
  NotificationAdded: MakeExistingFieldsOptional<
    NotificationAddedResolver,
    NotificationAdded,
    M['NotificationAdded']
  >;
  NotificationReadStateUpdated: MakeExistingFieldsOptional<
    NotificationReadStateUpdatedResolver,
    NotificationReadStateUpdated,
    M['NotificationReadStateUpdated']
  >;
  NotificationDeleted: MakeExistingFieldsOptional<
    NotificationDeletedResolver,
    NotificationDeleted,
    M['NotificationDeleted']
  >;
  Notification: MakeExistingFieldsOptional<
    NotificationResolver,
    Notification,
    M['Notification']
  >;
  NotificationURLAttachment: MakeExistingFieldsOptional<
    NotificationURLAttachmentResolver,
    NotificationURLAttachment,
    M['NotificationURLAttachment']
  >;
  NotificationMessageAttachment: MakeExistingFieldsOptional<
    NotificationMessageAttachmentResolver,
    NotificationMessageAttachment,
    M['NotificationMessageAttachment']
  >;
  NotificationThreadAttachment: MakeExistingFieldsOptional<
    NotificationThreadAttachmentResolver,
    NotificationThreadAttachment,
    M['NotificationThreadAttachment']
  >;
  NotificationPage: MakeExistingFieldsOptional<
    NotificationPageResolver,
    NotificationPage,
    M['NotificationPage']
  >;
  NotificationHeaderTextNode: MakeExistingFieldsOptional<
    NotificationHeaderTextNodeResolver,
    NotificationHeaderTextNode,
    M['NotificationHeaderTextNode']
  >;
  NotificationHeaderUserNode: MakeExistingFieldsOptional<
    NotificationHeaderUserNodeResolver,
    NotificationHeaderUserNode,
    M['NotificationHeaderUserNode']
  >;
  NotificationSummary: MakeExistingFieldsOptional<
    NotificationSummaryResolver,
    NotificationSummary,
    M['NotificationSummary']
  >;
  PaginationInfo: MakeExistingFieldsOptional<
    PaginationInfoResolver,
    PaginationInfo,
    M['PaginationInfo']
  >;
  AdminGoRedirect: MakeExistingFieldsOptional<
    AdminGoRedirectResolver,
    AdminGoRedirect,
    M['AdminGoRedirect']
  >;
  Activity: MakeExistingFieldsOptional<
    ActivityResolver,
    Activity,
    M['Activity']
  >;
  ThreadActivitySummary: MakeExistingFieldsOptional<
    ThreadActivitySummaryResolver,
    ThreadActivitySummary,
    M['ThreadActivitySummary']
  >;
  TestToken: MakeExistingFieldsOptional<
    TestTokenResolver,
    TestToken,
    M['TestToken']
  >;
  CustomerIssue: MakeExistingFieldsOptional<
    CustomerIssueResolver,
    CustomerIssue,
    M['CustomerIssue']
  >;
  CustomerIssueUpdate: MakeExistingFieldsOptional<
    CustomerIssueUpdateResolver,
    CustomerIssueUpdate,
    M['CustomerIssueUpdate']
  >;
  CustomerIssueChange: MakeExistingFieldsOptional<
    CustomerIssueChangeResolver,
    CustomerIssueChange,
    M['CustomerIssueChange']
  >;
  MessageLinkPreview: MakeExistingFieldsOptional<
    MessageLinkPreviewResolver,
    MessageLinkPreview,
    M['MessageLinkPreview']
  >;
  OrgMemberAdded: MakeExistingFieldsOptional<
    OrgMemberAddedResolver,
    OrgMemberAdded,
    M['OrgMemberAdded']
  >;
  OrgMemberRemoved: MakeExistingFieldsOptional<
    OrgMemberRemovedResolver,
    OrgMemberRemoved,
    M['OrgMemberRemoved']
  >;
  OrgMembersResult: MakeExistingFieldsOptional<
    OrgMembersResultResolver,
    OrgMembersResult,
    M['OrgMembersResult']
  >;
  SlackConnectedResult: MakeExistingFieldsOptional<
    SlackConnectedResultResolver,
    SlackConnectedResult,
    M['SlackConnectedResult']
  >;
  Query: MakeExistingFieldsOptional<QueryResolver, Query, M['Query']>;
  Mutation: MakeExistingFieldsOptional<
    MutationResolver,
    Mutation,
    M['Mutation']
  >;
  Subscription: MakeExistingFieldsOptional<
    SubscriptionResolver,
    Subscription,
    M['Subscription']
  >;
  CustomerSubscriptionUpdated: MakeExistingFieldsOptional<
    CustomerSubscriptionUpdatedResolver,
    CustomerSubscriptionUpdated,
    M['CustomerSubscriptionUpdated']
  >;
  ConsoleGettingStartedUpdated: MakeExistingFieldsOptional<
    ConsoleGettingStartedUpdatedResolver,
    ConsoleGettingStartedUpdated,
    M['ConsoleGettingStartedUpdated']
  >;
  ConsoleApplication: MakeExistingFieldsOptional<
    ConsoleApplicationResolver,
    ConsoleApplication,
    M['ConsoleApplication']
  >;
  SignedUploadURLResult: MakeExistingFieldsOptional<
    SignedUploadURLResultResolver,
    SignedUploadURLResult,
    M['SignedUploadURLResult']
  >;
  StartCheckoutResult: MakeExistingFieldsOptional<
    StartCheckoutResultResolver,
    StartCheckoutResult,
    M['StartCheckoutResult']
  >;
  RedirectToStripeCustomerPortalResult: MakeExistingFieldsOptional<
    RedirectToStripeCustomerPortalResultResolver,
    RedirectToStripeCustomerPortalResult,
    M['RedirectToStripeCustomerPortalResult']
  >;
  ConsoleApplicationOrganization: MakeExistingFieldsOptional<
    ConsoleApplicationOrganizationResolver,
    ConsoleApplicationOrganization,
    M['ConsoleApplicationOrganization']
  >;
  UsageStats: MakeExistingFieldsOptional<
    UsageStatsResolver,
    UsageStats,
    M['UsageStats']
  >;
  ConsoleApplicationUser: MakeExistingFieldsOptional<
    ConsoleApplicationUserResolver,
    ConsoleApplicationUser,
    M['ConsoleApplicationUser']
  >;
  SyncUserDuplicateDomainResult: MakeExistingFieldsOptional<
    SyncUserDuplicateDomainResultResolver,
    SyncUserDuplicateDomainResult,
    M['SyncUserDuplicateDomainResult']
  >;
  MessageAttachment: MessageAttachmentResolver;
  MessageSource: MessageSourceResolver;
  ThreadEvent: ThreadEventResolver;
  PageEvent: PageEventResolver;
  NotificationEvent: NotificationEventResolver;
  NotificationAttachment: NotificationAttachmentResolver;
  NotificationSender: NotificationSenderResolver;
  NotificationHeaderNode: NotificationHeaderNodeResolver;
  OrgMemberEvent: OrgMemberEventResolver;
  CustomerEvent: CustomerEventResolver;
  ApplicationEvent: ApplicationEventResolver;
};
