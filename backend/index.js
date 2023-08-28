const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());

const NAVER_API_URL = 'https://openapi.naver.com/v1/search/news.json';

app.get('/news', async (req, res) => {
    const query = req.query.query;
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
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`${port}번 서버 실행`);
});
