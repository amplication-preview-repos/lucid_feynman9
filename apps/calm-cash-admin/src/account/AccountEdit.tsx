import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { InvitationTitle } from "../invitation/InvitationTitle";
import { AccountMembershipTitle } from "../accountMembership/AccountMembershipTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Balance Cents" source="balanceCents" />
        <TextInput label="Currency" source="currency" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput source="invitations" reference="Invitation">
          <SelectArrayInput
            optionText={InvitationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Company" source="isCompany" />
        <ReferenceArrayInput source="memberships" reference="AccountMembership">
          <SelectArrayInput
            optionText={AccountMembershipTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Note" source="note" />
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
