const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
app.use(cors());

const scrapeUniversities = async () => {
  const url = 'https://www.topuniversities.com/world-university-rankings/2024?page=0&sort_by=rank&order_by=asc';
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const universities = [];

    $('.row.row-highlight').each((i, elem) => {
      const rank = $(elem).find('.rank').text().trim();
      const name = $(elem).find('.uni-link').text().trim();
      const country = $(elem).find('.country').text().trim();
      const score = $(elem).find('.overall-score').text().trim();

      try {
        universities.push({
          rank: parseInt(rank),
          name,
          country,
          score: parseFloat(score)
        });
      } catch (error) {
        console.warn(`Failed to parse data for university: ${name}`);
      }
    });

    universities.sort((a, b) => a.rank - b.rank);
    return universities;
  } catch (error) {
    console.error(`An error occurred while fetching the data: ${error}`);
    return [];
  }
};

const saveToCSV = async (universities, filename = 'university_rankings.csv') => {
  const csvWriter = createObjectCsvWriter({
    path: filename,
    header: [
      { id: 'rank', title: 'Rank' },
      { id: 'name', title: 'University' },
      { id: 'country', title: 'Country' },
      { id: 'score', title: 'Score' }
    ]
  });

  await csvWriter.writeRecords(universities);
  console.log(`Data saved to ${filename}`);
};

app.get('/api/universities', async (req, res) => {
  try {
    const universities = await scrapeUniversities();
    if (universities.length > 0) {
      await saveToCSV(universities);
      res.json(universities);
    } else {
      res.status(404).json({ error: 'No data was scraped.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching university data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));