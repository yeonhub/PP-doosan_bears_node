import { fetchNewsItems } from './newsService';
import axios from 'axios';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

test('fetchNewsItems 함수가 정상적으로 동작하는지 확인', async () => {
  mockAxios.mockResponse({
    data: {
      items: [
        {
          title: '<b>Test Title</b>',
          description: '<b>Test Description</b>',
          link: 'http://test-link.com',
        },
      ],
    },
  });

  const result = await fetchNewsItems('Test');

  expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:5000/news', {
    params: {
      query: 'Test',
    },
  });

  expect(result).toEqual([
    {
      title: 'Test Title',
      description: 'Test Description',
      link: 'http://test-link.com',
    },
  ]);
});

test('axios.get이 오류를 반환할 때 fetchNewsItems 함수가 빈 배열을 반환하는지 확인', async () => {
  mockAxios.mockError(new Error('Network Error'));

  const result = await fetchNewsItems('Test');

  expect(result).toEqual([]);
});
