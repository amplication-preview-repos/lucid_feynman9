import { AiExtractionUpdateManyWithoutCategoriesInput } from "./AiExtractionUpdateManyWithoutCategoriesInput";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { TransactionUpdateManyWithoutCategoriesInput } from "./TransactionUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  aiExtractions?: AiExtractionUpdateManyWithoutCategoriesInput;
  children?: CategoryUpdateManyWithoutCategoriesInput;
  icon?: string | null;
  isIncome?: boolean;
  name?: string;
  parent?: CategoryWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutCategoriesInput;
};
