import { AiExtractionListRelationFilter } from "../aiExtraction/AiExtractionListRelationFilter";
import { CategoryListRelationFilter } from "./CategoryListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CategoryWhereInput = {
  aiExtractions?: AiExtractionListRelationFilter;
  children?: CategoryListRelationFilter;
  createdAt?: DateTimeFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isIncome?: BooleanFilter;
  name?: StringFilter;
  parent?: CategoryWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  updatedAt?: DateTimeFilter;
};
