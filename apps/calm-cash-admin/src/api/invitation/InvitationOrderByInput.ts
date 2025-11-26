import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  inviteeId?: SortOrder;
  inviteeEmail?: SortOrder;
  inviterId?: SortOrder;
  status?: SortOrder;
  token?: SortOrder;
};
