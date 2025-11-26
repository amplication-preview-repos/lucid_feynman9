import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Kind" source="kind" />
        <TextInput label="Mime Type" source="mimeType" />
        <NumberInput step={1} label="Size Bytes" source="sizeBytes" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <TextInput label="Transcript" source="transcript" />
        <ReferenceInput
          source="uploadedBy.id"
          reference="User"
          label="Uploaded By"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
