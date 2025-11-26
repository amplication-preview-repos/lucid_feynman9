import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: string;
  ipAddress?: string | null;
  payload?: InputJsonValue;
  resourceId?: string | null;
  resourceType?: string | null;
  user?: UserWhereUniqueInput | null;
};
