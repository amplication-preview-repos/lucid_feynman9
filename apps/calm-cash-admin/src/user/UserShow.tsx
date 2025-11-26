import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { AIEXTRACTION_TITLE_FIELD } from "../aiExtraction/AiExtractionTitle";
import { USERSETTING_TITLE_FIELD } from "../userSetting/UserSettingTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Avatar Url" source="avatarUrl" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Verified" source="emailVerified" />
        <BooleanField label="Fingerprint Enabled" source="fingerprintEnabled" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Phone" source="phone" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Provider" source="provider" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Provider Token" source="providerToken" />
        <ReferenceField
          label="Settings"
          source="usersetting.id"
          reference="UserSetting"
        >
          <TextField source={USERSETTING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="AiExtraction"
          target="extractedById"
          label="AiExtractions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Actor Reviewed" source="actorReviewed" />
            <TextField label="Amount" source="amount" />
            <TextField label="Confidence Score" source="confidenceScore" />
            <TextField label="Currency" source="currency" />
            <TextField label="Description" source="description" />
            <DateField source="extractedAt" label="Extracted At" />
            <ReferenceField
              label="Extracted By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Inferred Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Inferred Type" source="inferredType" />
            <TextField label="Meta" source="meta" />
            <TextField label="Raw Payload" source="rawPayload" />
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField label="Shop Name" source="shopName" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attachment"
          target="uploadedById"
          label="Attachments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Kind" source="kind" />
            <TextField label="Mime Type" source="mimeType" />
            <TextField label="Size Bytes" source="sizeBytes" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Transcript" source="transcript" />
            <ReferenceField
              label="Uploaded By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AuditLog"
          target="userId"
          label="AuditLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <TextField label="Payload" source="payload" />
            <TextField label="Resource Id" source="resourceId" />
            <TextField label="Resource Type" source="resourceType" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="counterpartyUserId"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Ai Extraction"
              source="aiextraction.id"
              reference="AiExtraction"
            >
              <TextField source={AIEXTRACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Counterparty Name" source="counterpartyName" />
            <ReferenceField
              label="Counterparty User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Date Occurred" source="dateOccurred" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Description" source="description" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="External Ref" source="externalRef" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Recurring" source="isRecurring" />
            <TextField label="Meta" source="meta" />
            <TextField label="Paid At" source="paidAt" />
            <ReferenceField
              label="Recorded By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Recurrence Rule" source="recurrenceRule" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invitation"
          target="inviteeId"
          label="Invitations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Invitee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Invitee Email" source="inviteeEmail" />
            <ReferenceField label="Inviter" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Token" source="token" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invitation"
          target="inviterId"
          label="Invitations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Invitee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Invitee Email" source="inviteeEmail" />
            <ReferenceField label="Inviter" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Token" source="token" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AccountMembership"
          target="userId"
          label="AccountMemberships"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <DateField source="joinedAt" label="Joined At" />
            <TextField label="Role" source="role" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="recordedById"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Ai Extraction"
              source="aiextraction.id"
              reference="AiExtraction"
            >
              <TextField source={AIEXTRACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Counterparty Name" source="counterpartyName" />
            <ReferenceField
              label="Counterparty User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Date Occurred" source="dateOccurred" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Description" source="description" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="External Ref" source="externalRef" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Recurring" source="isRecurring" />
            <TextField label="Meta" source="meta" />
            <TextField label="Paid At" source="paidAt" />
            <ReferenceField
              label="Recorded By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Recurrence Rule" source="recurrenceRule" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
