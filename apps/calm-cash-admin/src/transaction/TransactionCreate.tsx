import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { AiExtractionTitle } from "../aiExtraction/AiExtractionTitle";
import { AttachmentTitle } from "../attachment/AttachmentTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="aiExtraction.id"
          reference="AiExtraction"
          label="Ai Extraction"
        >
          <SelectInput optionText={AiExtractionTitle} />
        </ReferenceInput>
        <NumberInput label="Amount" source="amount" />
        <ReferenceArrayInput source="attachments" reference="Attachment">
          <SelectArrayInput
            optionText={AttachmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Counterparty Name" source="counterpartyName" />
        <ReferenceInput
          source="counterpartyUser.id"
          reference="User"
          label="Counterparty User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Currency" source="currency" />
        <DateTimeInput label="Date Occurred" source="dateOccurred" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="External Ref" source="externalRef" />
        <BooleanInput label="Is Recurring" source="isRecurring" />
        <div />
        <DateTimeInput label="Paid At" source="paidAt" />
        <ReferenceInput
          source="recordedBy.id"
          reference="User"
          label="Recorded By"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Recurrence Rule" source="recurrenceRule" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "DRAFT", value: "DRAFT" },
            { label: "CONFIRMED", value: "CONFIRMED" },
            { label: "PAID", value: "PAID" },
            { label: "RECEIVED", value: "RECEIVED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "EXPENSE", value: "EXPENSE" },
            { label: "INCOME", value: "INCOME" },
            { label: "ACCOUNT_RECEIVABLE", value: "ACCOUNT_RECEIVABLE" },
            { label: "ACCOUNT_PAYABLE", value: "ACCOUNT_PAYABLE" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
