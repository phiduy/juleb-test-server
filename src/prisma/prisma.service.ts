import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import config from 'src/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: config().dbUrl,
        },
      },
    });
  }
}
