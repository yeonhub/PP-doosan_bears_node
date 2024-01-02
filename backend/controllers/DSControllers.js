const newsModel = require('../models/index');

const getNews = async (req, res) => {
  const query = req.query.query;
  try {
    const newsData = await newsModel.getNews(query);
    res.json(newsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNews };
