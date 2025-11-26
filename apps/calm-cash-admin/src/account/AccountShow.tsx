import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { AIEXTRACTION_TITLE_FIELD } from "../aiExtraction/AiExtractionTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance Cents" source="balanceCents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Company" source="isCompany" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Invitation"
          target="accountId"
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
          target="accountId"
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
          target="accountId"
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
