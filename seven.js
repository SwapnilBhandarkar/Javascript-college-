const EventEmmiter=require("events")
var eventEmmiter=new EventEmmiter
eventEmmiter.addListener(event1,()=>{
    console.log("event1")
})

    
