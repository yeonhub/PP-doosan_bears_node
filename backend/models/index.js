const axios = require('axios');

const NAVER_API_URL = 'https://openapi.naver.com/v1/search/news.json';

const getNews = async (query) => {
    try {
        const response = await axios.get(NAVER_API_URL, {
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
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

module.exports = { getNews };