import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserSettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserSettings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Default Account Id" source="defaultAccountId" />
        <BooleanField label="Enable Biometrics" source="enableBiometrics" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Time Zone" source="timeZone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
