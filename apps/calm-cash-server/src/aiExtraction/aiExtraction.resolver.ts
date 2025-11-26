import * as graphql from "@nestjs/graphql";
import { AiExtractionResolverBase } from "./base/aiExtraction.resolver.base";
import { AiExtraction } from "./base/AiExtraction";
import { AiExtractionService } from "./aiExtraction.service";

@graphql.Resolver(() => AiExtraction)
export class AiExtractionResolver extends AiExtractionResolverBase {
  constructor(protected readonly service: AiExtractionService) {
    super(service);
  }
}
