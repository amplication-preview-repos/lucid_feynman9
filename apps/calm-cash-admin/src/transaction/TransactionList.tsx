import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { AIEXTRACTION_TITLE_FIELD } from "../aiExtraction/AiExtractionTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
