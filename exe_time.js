function Exe_time(){
var s=new Date().getTime();
for (i=0;i<10000;i++){
    document.write(i);
}
var e=new Date().getTime();
var time=e-s;
document.write("Time taken in milliseconds:"+time);
}
