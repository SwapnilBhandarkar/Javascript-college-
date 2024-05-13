// // check wether query given is leap year or not
var url=require("url");
// var addr='http://localhost:8080/default.html?year=2024&month=feb';
// var q=url.parse(addr,true)

// if(q.query["year"]%4==0){
//     console.log(q.query["year"]+" leap year");
// }
// else{
//     console.log(q.query["year"]+" not leap year");
// }


var http=require("http")

 var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-Type": 'application/json'})
                var add=req.url;
                var q=url.parse(add,true)

                 res.write("year : "+q.query["year"]+"\n"+" Month : "+q.query["month"])
             
           
             res.end()
 }).listen(8112)

 var os = require('os');
console.log('This machine has', os.cpus().length,
'CPUs');
