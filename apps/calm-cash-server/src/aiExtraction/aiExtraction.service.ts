import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiExtractionServiceBase } from "./base/aiExtraction.service.base";

@Injectable()
export class AiExtractionService extends AiExtractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
