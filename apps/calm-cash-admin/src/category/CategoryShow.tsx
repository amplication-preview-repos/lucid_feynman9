import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { AIEXTRACTION_TITLE_FIELD } from "../aiExtraction/AiExtractionTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Income" source="isIncome" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Parent"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AiExtraction"
          target="inferredCategoryId"
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
          reference="Category"
          target="parentId"
          label="Categories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Income" source="isIncome" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Parent"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="categoryId"
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
