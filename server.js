//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
        const PORT = process.env.PORT || 8000;
        const http = require('http');
        const fs = require('fs')
        const url = require('url');
        const querystring = require('querystring');
        const figlet = require('figlet')

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
            if('answer' in params){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const wuNames = [
                    "Ol' Dirty Chinese Food Restaurant",
                    "Ghostface Killah",
                    "Inspectah Stacks",
                    "Dumpster Fire",
                    "Killah Bee",
                    "Uno Royalty",
                    "Scarface Street Fighter",
                    "Annoyin' Madman",
                    "Lazy-butt Genius",
                    "Crazy Terminator",
                    "Foolish Beggar",
                    "Supreme Taco Guapo",
                    "Zexy Desperado",
                    "Slow Assassin",
                    "Devil's Bootyhole",
                    "Midnight Phantom",
                    "Donut Hole",
                    "Trash Juice",
                    "Raging Teensy Warrior",
                    "Sunflower Passion",
                    "Puppet Queen Jeff"
                ]
                function objToJson(array) {
                    return array[params.answer - 5];
                }
                res.end(JSON.stringify(objToJson(wuNames)));
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
        server.listen(PORT);
