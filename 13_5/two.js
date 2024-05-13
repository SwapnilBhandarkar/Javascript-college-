var url=require("url");
var addr='http://localhost:8080/default.html?Name=chad.Swapnil_Bhandarkar&intial=CSB'

var q=url.parse(addr,true)
console.log(q)
console.log(q.host)
console.log(q.pathname)
console.log(q.query)