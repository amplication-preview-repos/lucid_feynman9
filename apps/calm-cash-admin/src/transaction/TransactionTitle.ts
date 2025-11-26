import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "counterpartyName";

export const TransactionTitle = (record: TTransaction): string => {
  return record.counterpartyName?.toString() || String(record.id);
};
