
const http = require('http');
const path = require('path');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('<h1>Hello World</h1>');
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
