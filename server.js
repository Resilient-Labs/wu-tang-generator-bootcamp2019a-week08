const http=require('http')
const fs= require('fs')
const url=require('url')
const figlet = require('figlet')
const querystring = require('querystring');

let arrOne=['Coast','Wud','Siz','Shalla','Diamond']
let arrTwo=['Rizza','Giraffe','Sphinx','Tical','Arizona']

const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  }
  else if (page == '/api') {
    if("sum" in params && "product" in params) {
      const sum = params["sum"];
      const product = params["product"];
      const firstName = arrOne[sum % 5];
      const lastName = arrTwo[product % 5];
      const response = {firstName: firstName, lastName: lastName};
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(response));
      res.end();
    } else {
      res.writeHead(400, "Missing either sum or product");
      res.end();
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(3000);
