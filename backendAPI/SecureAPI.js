const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const logger = require('../utils/logger');
require('dotenv').config({ path: '../utils/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'https://atomicv2.netlify.app/' }));
app.use(helmet());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 50 });
app.use(limiter);

// Endpoint
app.post('/api/secure', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    logger.warn('Missing fields attempt');
    return res.status(400).json({ error: 'Missing fields' });
  }

  logger.log(`Login attempt by ${username}`);
  return res.status(200).json({ success: true, message: 'Data accepted' });
});

app.listen(PORT, () => {
  console.log(`🔒 SecureAPI.js listening on http://localhost:${PORT}`);
});
