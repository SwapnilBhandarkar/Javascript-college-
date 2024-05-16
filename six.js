// class name,time  and assign members hours,limit,seconds create two object of time class and add both the time object so that it should return the value in 3rd time object should have hour and min 



class Time{
    constructor(hour,min,sec){
        this.hour=hour;
        this.min=min;
        this.sec=sec;
    }
    add(time){
        this.hour=this.hour+time.hour;
        this.min=this.min+time.min;
        this.sec=this.sec+time.sec;

        if(this.sec>60){
            this.sec=this.sec%60;
            this.min=this.min+1;
        }
        if(this.min>60){
            this.min=this.min%60;
            this.hour=this.hour+1;
        }
        return this;
    }



}

var t1=new Timeime(1,8,6);
var t2=new Timeime(10,59,30);
var t3=t1.add(t2);

console.log(JSON.stringify(t3));
