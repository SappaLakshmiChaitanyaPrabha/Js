let x=function(){
console.log("I'm calling from inside a function")
};
let y=function(callback){
console.log('calling callback function');
callback();
}
y(x);

let add=function (a,b){
return a+b;
}
let mul=function(a,b){
return a*b;
}
let calc=function(a,b,callback_func){
 return callback_func(a,b);   
}
console.log(calc(1,3,add));
console.log(calc(1,3,function(a,b){return a-b; }));

(function sample(){
let a=0,b=10;
setTimeout(function(){
a++;
setTimeout(function(){
a++;
console.log("1st attempt");
},0);
console.log("2nd attempt");
},0);
setTimeout(function (){
console.log("3rd attempt ");
},0);
a=b;
})();