import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { UserTitle } from "../user/UserTitle";

export const InvitationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <ReferenceInput source="invitee.id" reference="User" label="Invitee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Invitee Email" source="inviteeEmail" />
        <ReferenceInput source="inviter.id" reference="User" label="Inviter">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "ACCEPTED", value: "ACCEPTED" },
            { label: "REVOKED", value: "REVOKED" },
            { label: "EXPIRED", value: "EXPIRED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
