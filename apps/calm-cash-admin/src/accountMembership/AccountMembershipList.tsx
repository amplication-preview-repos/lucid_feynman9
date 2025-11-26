import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountMembershipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountMemberships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <DateField source="joinedAt" label="Joined At" />
        <TextField label="Role" source="role" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
