var promise = new Promise(function (res,rej){
let x='Hello', y='Hello';
if(x==y)
	res();
else
	rej();
});
promise.then(function(){
	console.log("success");
})
.catch(function(){
	console.log("failed");
});

promise=new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject("Done");
	},4000);
});
promise.then(function(val){
	console.log(val);
}, function(val){
	console.log("rejected:"+val);
});
console.log("Example for promise");


var fn= new Promise(function(res,rej){
		setTimeout(function(){
			res("lakshmi")
		},4000);
	});
var mn=new Promise(function(res,rej){
		setTimeout(function(){
			res("chaitanya")
		},1000);
	});
arr=[fn,mn];
Promise.all(arr)
.then(function(msg){
	console.log(msg);
});

var p1 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('one'), 1000); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('two'), 2000); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});
/*var p5 = new Promise((resolve, reject) => {
  resolve('success');
});*/
arr=[p1, p2, p3, p4]
Promise.race(arr)
.then(function(val){
console.log(val);
})
Promise.all(arr)
.then(values => { 
  console.log(values);
})
.catch(error => { 
  console.log(error)
})
Promise.allSettled(arr)
.then(values => { 
values.forEach((values)=>console.log(values.status))
})
.finally(()=>{
console.log("finally block");
})
