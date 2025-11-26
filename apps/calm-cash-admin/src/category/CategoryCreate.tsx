import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AiExtractionTitle } from "../aiExtraction/AiExtractionTitle";
import { CategoryTitle } from "./CategoryTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="aiExtractions" reference="AiExtraction">
          <SelectArrayInput
            optionText={AiExtractionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="children" reference="Category">
          <SelectArrayInput
            optionText={CategoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Icon" source="icon" />
        <BooleanInput label="Is Income" source="isIncome" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="parent.id" reference="Category" label="Parent">
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
