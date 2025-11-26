import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AttachmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Attachments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <TextField label="Mime Type" source="mimeType" />
        <TextField label="Size Bytes" source="sizeBytes" />
        <ReferenceField
          label="Transaction"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Transcript" source="transcript" />
        <ReferenceField label="Uploaded By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
