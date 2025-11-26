import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountMembershipServiceBase } from "./base/accountMembership.service.base";

@Injectable()
export class AccountMembershipService extends AccountMembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
