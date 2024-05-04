var fs=require("fs");
fs.writeFile("test.txt", "hello world",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})
fs.readFile('test.txt',function(e,data){
    if(e){
            console.log(e)
    }
    console.log(data.toString())
    console.log("done")

})