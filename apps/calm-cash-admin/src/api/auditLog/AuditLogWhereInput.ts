import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogWhereInput = {
  action?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  payload?: JsonFilter;
  resourceId?: StringNullableFilter;
  resourceType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
