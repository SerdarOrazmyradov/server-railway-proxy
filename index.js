const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message || '';
    
    // URL we Model görkezilen Curl mysalyna doly gabat getirildi:
    const url = 'https://generativelanguage.googleapis.com/v1beta/interactions';

    const response = await axios.post(
      url,
      {
        model: "gemini-3.8-flash",
        input: userMessage
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});