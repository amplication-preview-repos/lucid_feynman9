import { Decimal } from "decimal.js";
import { User } from "../user/User";
import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type AiExtraction = {
  actorReviewed: boolean;
  amount: Decimal | null;
  confidenceScore: number | null;
  currency: string | null;
  description: string | null;
  extractedAt: Date;
  extractedBy?: User | null;
  id: string;
  inferredCategory?: Category | null;
  inferredType?:
    | "EXPENSE"
    | "INCOME"
    | "ACCOUNT_RECEIVABLE"
    | "ACCOUNT_PAYABLE"
    | null;
  meta: JsonValue;
  rawPayload: JsonValue;
  reviewerId: string | null;
  shopName: string | null;
  transaction?: Transaction;
};
