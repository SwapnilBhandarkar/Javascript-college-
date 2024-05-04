var ps=require("fs")
// ps.mkdirSync("broooo")
ps.writeFileSync("broooo/broooo.txt","heloo world")
ps.appendFileSync("broooo/broooo.txt","heloo world  file")
var x=ps.readFileSync("broooo/broooo.txt");
console.log(x.toString());
