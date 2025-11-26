import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { AiExtractionTitle } from "../aiExtraction/AiExtractionTitle";
import { AttachmentTitle } from "../attachment/AttachmentTitle";
import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { InvitationTitle } from "../invitation/InvitationTitle";
import { AccountMembershipTitle } from "../accountMembership/AccountMembershipTitle";
import { UserSettingTitle } from "../userSetting/UserSettingTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="aiExtractions" reference="AiExtraction">
          <SelectArrayInput
            optionText={AiExtractionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="attachments" reference="Attachment">
          <SelectArrayInput
            optionText={AttachmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="auditLogs" reference="AuditLog">
          <SelectArrayInput
            optionText={AuditLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Avatar Url" source="avatarUrl" />
        <ReferenceArrayInput
          source="counterpartyTransactions"
          reference="Transaction"
        >
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Verified" source="emailVerified" />
        <BooleanInput label="Fingerprint Enabled" source="fingerprintEnabled" />
        <TextInput label="Full Name" source="fullName" />
        <ReferenceArrayInput
          source="invitationsReceived"
          reference="Invitation"
        >
          <SelectArrayInput
            optionText={InvitationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="invitationsSent" reference="Invitation">
          <SelectArrayInput
            optionText={InvitationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Language" source="language" />
        <ReferenceArrayInput source="memberships" reference="AccountMembership">
          <SelectArrayInput
            optionText={AccountMembershipTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Password Hash" source="passwordHash" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Postcode" source="postcode" />
        <SelectInput
          source="provider"
          label="Provider"
          choices={[
            { label: "LOCAL", value: "LOCAL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "APPLE", value: "APPLE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Provider Id" source="providerId" />
        <TextInput label="Provider Token" source="providerToken" />
        <ReferenceInput
          source="settings.id"
          reference="UserSetting"
          label="Settings"
        >
          <SelectInput optionText={UserSettingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
