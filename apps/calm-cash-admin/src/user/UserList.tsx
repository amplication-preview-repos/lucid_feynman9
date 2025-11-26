import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERSETTING_TITLE_FIELD } from "../userSetting/UserSettingTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Avatar Url" source="avatarUrl" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Verified" source="emailVerified" />
        <BooleanField label="Fingerprint Enabled" source="fingerprintEnabled" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Phone" source="phone" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Provider" source="provider" />
        <TextField label="Provider Id" source="providerId" />
        <TextField label="Provider Token" source="providerToken" />
        <ReferenceField
          label="Settings"
          source="usersetting.id"
          reference="UserSetting"
        >
          <TextField source={USERSETTING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
