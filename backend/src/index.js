const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/hello', (req, res) => {
  res.send({"message":"Hello"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});