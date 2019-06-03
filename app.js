
const http = require('http');
const path = require('path');
const fs = require('fs');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  //res.end('<h1>Hello World</h1>');
  //res.sendFile(path.join(__dirname, 'index.html'));
  
  fs.readFile('index.html', function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        //const ext = path.parse(pathname).ext;
        // if the file is found, set Content-type and send data
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html' );
        res.end(data);
      }
    });
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
