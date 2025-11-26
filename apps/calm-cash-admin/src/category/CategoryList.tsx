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
import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Income" source="isIncome" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Parent"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
