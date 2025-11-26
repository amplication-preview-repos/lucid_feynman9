import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const AiExtractionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Actor Reviewed" source="actorReviewed" />
        <TextField label="Amount" source="amount" />
        <TextField label="Confidence Score" source="confidenceScore" />
        <TextField label="Currency" source="currency" />
        <TextField label="Description" source="description" />
        <DateField source="extractedAt" label="Extracted At" />
        <ReferenceField label="Extracted By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Inferred Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Inferred Type" source="inferredType" />
        <TextField label="Meta" source="meta" />
        <TextField label="Raw Payload" source="rawPayload" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Shop Name" source="shopName" />
        <ReferenceField
          label="Transaction"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
