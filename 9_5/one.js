// var http = require('http')
// http.createServer( function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(req.url);
    
//    res.end()
   

// }
// ).listen(8081);
// create http web page on which home page display welcome to hme page student page dispaly welcome to student and any other page display page not found.
//  var http=require("http")

//  var server=http.createServer(function(req,res){
//      res.writeHead(200,{'Content-Type':'text/html'})
//      if(req.url=="/"){
//          res.write("<h1>welcome to home page</h1>")
//      }
//      else if(req.url=="/student"){
//          res.write("<h1>welcome to student page</h1>")
//      }
//      else{
//          res.write("<h1>page not found </h1>")
//      }
//      res.end()
//  }).listen(8112)

//  function send404(response) {
//     response.writeHead(404, { 'Content-Type':
//     'text/plain' });
//     response.write('Error 404: Resource not found.');
//     response.end();
//     }
    


var h=require('http')
// h.createServer(function(req,res){
//     if(req.url=='/'){
//         const a={"name" : 'naruto',"age" : 18};
//         res.writeHead(200,{'Content-Type':"application/json"})
//         res.write(JSON.stringify(a));
       
//     }
//     res.end();
// }).listen(804);

// h.createServer(function(req,res){
// res.writeHead(308,{'Location':'https://www.youtube.com/'});
// res.end();
// }).listen(2521)
var fs=require("fs")

h.createServer(function(req,res){
    res.writeHead(200,{"content-type":"image/jpeg"})
    image=fs.readFileSync('Untitled.webp')
    res.end(image)
}).listen(4041)