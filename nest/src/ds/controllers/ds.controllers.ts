import { Controller, Get, Query } from '@nestjs/common';
import { DSService } from '../services/ds.service';

@Controller('news')
export class DSController {
  constructor(private readonly dsService: DSService) {}

  @Get()
  async getNews(@Query('query') query: string): Promise<any> {
    return this.dsService.getNews(query);
  }
}