import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  payload?: SortOrder;
  resourceId?: SortOrder;
  resourceType?: SortOrder;
  userId?: SortOrder;
};
