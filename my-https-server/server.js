const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 443;

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
};

app.get('/', (req, res) => {
  res.send('Hello, HTTPS Node.js server!');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
