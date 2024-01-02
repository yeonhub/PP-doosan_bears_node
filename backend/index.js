const express = require('express');
const cors = require('cors');
const DSControllers = require('./controllers/DSControllers');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());

app.get('/news', DSControllers.getNews);

app.listen(port, () => {
  console.log(`${port}번 서버 실행`);
});