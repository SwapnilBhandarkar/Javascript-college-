
var fs=require("fs")

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

 elder(){
    if(this.age>18){
       console.log("elder : "+this.name)
    }
    else{
        console.log("kid : "+this.name)
       
    }
 }
 
}

var obj=new person("dholu","15")
var obj1=new person("bholu","19")
var p3=obj1.elder()

obj.elder()
obj1.elder()

fs.writeFile("name.txt",obj.name,
    function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("file created")
        }
    }
);
