import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiExtractionService } from "./aiExtraction.service";
import { AiExtractionControllerBase } from "./base/aiExtraction.controller.base";

@swagger.ApiTags("aiExtractions")
@common.Controller("aiExtractions")
export class AiExtractionController extends AiExtractionControllerBase {
  constructor(protected readonly service: AiExtractionService) {
    super(service);
  }
}
