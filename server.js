const http = require('http');
const port = 3000;
var ip = require("ip");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Test Elastic Load Balancing desde ${ip.address()}`);
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
