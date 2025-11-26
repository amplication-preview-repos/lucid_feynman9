import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AiExtractionWhereInput = {
  actorReviewed?: BooleanFilter;
  amount?: DecimalNullableFilter;
  confidenceScore?: FloatNullableFilter;
  currency?: StringNullableFilter;
  description?: StringNullableFilter;
  extractedAt?: DateTimeFilter;
  extractedBy?: UserWhereUniqueInput;
  id?: StringFilter;
  inferredCategory?: CategoryWhereUniqueInput;
  inferredType?:
    | "EXPENSE"
    | "INCOME"
    | "ACCOUNT_RECEIVABLE"
    | "ACCOUNT_PAYABLE";
  meta?: JsonFilter;
  rawPayload?: JsonFilter;
  reviewerId?: StringNullableFilter;
  shopName?: StringNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
