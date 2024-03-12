import { Module } from '@nestjs/common';
import { DSService } from './services/ds.service';
import { DSController } from './controllers/ds.controllers';

@Module({
  controllers: [DSController],
  providers: [DSService],
})
export class DSModule {}