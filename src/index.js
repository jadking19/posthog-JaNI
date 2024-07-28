const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/hello', (req, res) => {
  res.send({"message":"Hello"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});