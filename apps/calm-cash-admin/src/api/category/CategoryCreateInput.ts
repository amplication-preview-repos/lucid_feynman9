import { AiExtractionCreateNestedManyWithoutCategoriesInput } from "./AiExtractionCreateNestedManyWithoutCategoriesInput";
import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCategoriesInput } from "./TransactionCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  aiExtractions?: AiExtractionCreateNestedManyWithoutCategoriesInput;
  children?: CategoryCreateNestedManyWithoutCategoriesInput;
  icon?: string | null;
  isIncome: boolean;
  name: string;
  parent?: CategoryWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutCategoriesInput;
};
