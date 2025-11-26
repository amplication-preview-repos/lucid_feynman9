import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type AuditLog = {
  action: string;
  createdAt: Date;
  id: string;
  ipAddress: string | null;
  payload: JsonValue;
  resourceId: string | null;
  resourceType: string | null;
  user?: User | null;
};
