const express = require('express');
const path = require('path');

const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
  res.send("message Hello");
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'webform.html'));
  });

  app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    res.send({"username":username , "password":password});
  });
  
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});