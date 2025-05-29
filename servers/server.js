const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (like index.html and script.js)
app.use(express.static('public')); // assuming you put HTML & JS inside a folder named 'public'

app.post('/api/data', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  console.log('Received username:', username);

  // You can add backend logic here (DB calls, processing, etc)

  res.json({ message: `Hello, ${username}! Your data was received.` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

