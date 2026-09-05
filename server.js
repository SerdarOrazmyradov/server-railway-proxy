const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Public GET Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Railway backend ugradylan kody üstünlikli run etdi!',
    timestamp: new Date().toISOString()
  });
});

// Mysal üçin maglumat berýän endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Serdar', role: 'Developer' },
    { id: 2, name: 'Merdan', role: 'User' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});