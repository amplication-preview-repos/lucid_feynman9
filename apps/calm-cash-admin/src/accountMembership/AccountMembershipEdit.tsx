import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { UserTitle } from "../user/UserTitle";

export const AccountMembershipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Active" source="isActive" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "OWNER", value: "OWNER" },
            { label: "ADMIN", value: "ADMIN" },
            { label: "MEMBER", value: "MEMBER" },
            { label: "VIEWER", value: "VIEWER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
