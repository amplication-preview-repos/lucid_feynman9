import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttachmentWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  kind?: StringFilter;
  mimeType?: StringFilter;
  sizeBytes?: IntNullableFilter;
  transaction?: TransactionWhereUniqueInput;
  transcript?: StringNullableFilter;
  uploadedBy?: UserWhereUniqueInput;
  url?: StringFilter;
};
