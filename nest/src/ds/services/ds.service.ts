import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class DSService {
  private readonly NAVER_API_URL = 'https://openapi.naver.com/v1/search/news.json';

  constructor(private readonly httpService: HttpService) {}

  async getNews(query: string): Promise<any> {
    try {
      const response = await this.httpService.get(this.NAVER_API_URL, {
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_API_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_API_CLIENT_SECRET,
        },
        params: {
          query: query,
          display: 5,
          start: 1,
          sort: 'sim',
          news_type: 'sports',
          title: 'true',
        },
      }).toPromise();

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}