import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AiExtractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Actor Reviewed" source="actorReviewed" />
        <NumberInput label="Amount" source="amount" />
        <NumberInput label="Confidence Score" source="confidenceScore" />
        <TextInput label="Currency" source="currency" />
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="extractedBy.id"
          reference="User"
          label="Extracted By"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="inferredCategory.id"
          reference="Category"
          label="Inferred Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectInput
          source="inferredType"
          label="Inferred Type"
          choices={[
            { label: "EXPENSE", value: "EXPENSE" },
            { label: "INCOME", value: "INCOME" },
            { label: "ACCOUNT_RECEIVABLE", value: "ACCOUNT_RECEIVABLE" },
            { label: "ACCOUNT_PAYABLE", value: "ACCOUNT_PAYABLE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <div />
        <TextInput label="Reviewer Id" source="reviewerId" />
        <TextInput label="Shop Name" source="shopName" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
