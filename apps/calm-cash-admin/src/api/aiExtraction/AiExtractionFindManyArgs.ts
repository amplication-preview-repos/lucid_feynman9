import { AiExtractionWhereInput } from "./AiExtractionWhereInput";
import { AiExtractionOrderByInput } from "./AiExtractionOrderByInput";

export type AiExtractionFindManyArgs = {
  where?: AiExtractionWhereInput;
  orderBy?: Array<AiExtractionOrderByInput>;
  skip?: number;
  take?: number;
};
