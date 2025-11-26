import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { AIEXTRACTION_TITLE_FIELD } from "../aiExtraction/AiExtractionTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
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
        <ReferenceField label="Recorded By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Recurrence Rule" source="recurrenceRule" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attachment"
          target="transactionId"
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
      </SimpleShowLayout>
    </Show>
  );
};
