import { AccountMembership as TAccountMembership } from "../api/accountMembership/AccountMembership";

export const ACCOUNTMEMBERSHIP_TITLE_FIELD = "id";

export const AccountMembershipTitle = (record: TAccountMembership): string => {
  return record.id?.toString() || String(record.id);
};
