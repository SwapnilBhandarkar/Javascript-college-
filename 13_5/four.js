// fetch file name from requested url and print that files data on http based server

var http=require('http');
var url=require('url');
var fs=require('fs');



http.createServer(function(req,res){
    var q=url.parse(req.url,true);
   
    data=fs.readFileSync("."+q.pathname);
    res.writeHead(200,{"content-Type": 'text/html'});

    res.write(data)
    
    
    res.end();

}).listen(8112);

