import { AiExtraction } from "../aiExtraction/AiExtraction";
import { Transaction } from "../transaction/Transaction";

export type Category = {
  aiExtractions?: Array<AiExtraction>;
  children?: Array<Category>;
  createdAt: Date;
  icon: string | null;
  id: string;
  isIncome: boolean;
  name: string;
  parent?: Category | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
