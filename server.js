var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log(pathname);
  var dest = pathname.substr(1);
  console.log(dest);
  destinate(dest);

  function destinate(dest){
    var index = fs.readFileSync(dest);
    var ext = path.extname(dest);
    if(ext ==".jpeg" || ext ==".gif" || ext ==".png"){
      response.writeHead(200, {'Content-Type': 'image/gif' });
      response.end(index, 'binary');
    }else if(ext==".ico"){
      response.end();
    }else{
      response.write(index.toString());
    }
  }
  response.end();
});

var port = process.argv;
server.listen(port[2]);
console.log("listen:"+port[2]);
