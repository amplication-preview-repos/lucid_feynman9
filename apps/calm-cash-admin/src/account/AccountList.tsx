import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Balance Cents" source="balanceCents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Company" source="isCompany" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
