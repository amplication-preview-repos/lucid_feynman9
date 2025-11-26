import { Module } from "@nestjs/common";
import { AiExtractionModuleBase } from "./base/aiExtraction.module.base";
import { AiExtractionService } from "./aiExtraction.service";
import { AiExtractionController } from "./aiExtraction.controller";
import { AiExtractionResolver } from "./aiExtraction.resolver";

@Module({
  imports: [AiExtractionModuleBase],
  controllers: [AiExtractionController],
  providers: [AiExtractionService, AiExtractionResolver],
  exports: [AiExtractionService],
})
export class AiExtractionModule {}
