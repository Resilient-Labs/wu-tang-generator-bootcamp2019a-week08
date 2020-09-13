  const http = require('http');
  const fs = require('fs')
  const url = require('url');
  const querystring = require('querystring');
  const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
let body = ""
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/buildName'){

    req.on('data', chunk => {
    body += chunk.toString();

});
req.on('end', () => {
      let post =  JSON.parse(body)
      let season = post['season'];
      let answers = post['answers'];
      let userName = post['userName']

      let summer = ['Big', 'Cheese', 'Tha', 'Master']
      let fall = ['Ol', 'Dirty', 'Tha', 'Prince']
      let winter = ['Lil', 'Gucci', 'Tha', 'Smoke']
      let spring = ['Ignint', 'Dragon', 'Tha', 'Power']

      let filteredAns = answers.filter(ans => ans === 'true')

      let builtName = "";
        console.log(filteredAns.length)

switch (season) {
  case 'spring':
    if(filteredAns.length === 3){
      builtName += spring[0] + " " + spring[1] + " " + userName + " " + spring[2] + " " + spring[3];

      console.log('hey')
    } else if ( filteredAns.length === 2) {

      builtName += spring[0] + " " + spring[1] + " " + userName
    } else if (
      filteredAns.length === 1
    ) {
      builtName += spring[0] + " " + spring[1]
    }else{
      builtName = "That's not very Wu Tang of you"
    }
    console.log(builtName)
    break;
  case 'summer':
    if(filteredAns.length === 3){
      builtName += summer[0] + " " + summer[1] + " " + userName + " " + summer[2] + " " + summer[3];

      console.log('hey')
    } else if ( filteredAns.length === 2) {

      builtName += summer[0] + " " + summer[1] + " " + userName
    } else if (
      filteredAns.length === 1
    ) {
      builtName += summer[0] + " " + summer[1]
    }else{
      builtName = "That's not very Wu Tang of you"
    }
      break;
  case 'fall':
    if(filteredAns.length === 3){
      builtName += fall[0] + " " + fall[1] + " " + userName + " " + fall[2] + " " + fall[3];

      console.log('hey')
    } else if ( filteredAns.length === 2) {

      builtName += fall[0] + " " + fall[1] + " " + userName
    } else if (
      filteredAns.length === 1
    ) {
      builtName += fall[0] + " " + fall[1]
    }else{
      builtName = "That's not very Wu Tang of you"
    }

    break;
  case 'winter':
    if(filteredAns.length === 3){
      builtName += winter[0] + " " + winter[1] + " " + userName + " " + winter[2] + " " + winter[3];

      console.log('hey')
    } else if ( filteredAns.length === 2) {

      builtName += winter[0] + " " + winter[1] + " " + userName
    } else if (
      filteredAns.length === 1
    ) {
      builtName += winter[0] + " " + winter[1]
    }else{
      builtName = "That's not very Wu Tang of you"
    }
  default:
    console.log("That's not very Wu Tang of you");
}
res.write(JSON.stringify(builtName));
res.end();
  })
}
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/app.js'){
    fs.readFile('js/app.js', function(err, data) {
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
server.listen(8000);



// switch(){
//   case 'One':
// }
    // function pickName (array){
    //
    //   if ('one' === true){
    //     if('two' === true){
    //       nameArray += array[0]
    //     }if('three' === true){
    //       nameArray
    //     }if('four' === true){
    //
    //     }if('five' === true){
    //
    //     }
    //   } else{
    //     display.innerHTML = "That's not very Wu Tang of you"
    //   }
    //   nameArray.join('')
    // }
      // res.writeHead(200, {'Content-Type': 'text/html'});
      // res.end(JSON.stringify(response));
