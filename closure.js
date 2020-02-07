/*
CLOUSURE EXAMPLES
example 1 */
function sample() {
    var c = 0;

    function sam1() {
        return c += 1;
    };

    return sam1;
}

var counter = sample();
console.log(counter()); 

//example 2
var d=19
function one(c){
return function(b){
	return c+=b;
}
}
var sum=one(34);
console.log(sum(34));
console.log(sum(d));

//example 3
function A(a){
	function B(b){
		function C(c){
			return a+b+c;
		}
		return C
	}
	return B
}
var sample=A(10);
//var d=sample(10)(10);
var d=sample(20)
var e=d(5);
console.log(e);

//example 4
var counter = (function() {
  var p = 0;
  function changeBy(val) {
    p+= val;
  }
  return {
    inc: function() {
      changeBy(1);
    },
    dec: function() {
      changeBy(-1);
    },
    value: function() {
      return p;
    }
  };   
})();

console.log(counter.value()); // 0
counter.inc();
counter.inc();
console.log(counter.value()); // 2
counter.dec();
console.log(counter.value()); // 1

//example 5
var p=function(n){
	var getName=function(){
		return n;
	}
	return getname;
}
my_Name=p("Chaitanya");
my_Name();


//ES6 FEATURES 
/*Spread Operator
....We represent spreat operator with (...)operator, which is used to split up the data. */
//example 1
var obj1={a:10,b:20}
var obj2={a:25,}
var obj3={...obj1,...obj2}
console.log(obj3)

//example 2
function add(a,b,c){
	return a+b+c;
}
let n=[1,5,8]
console.log(add(...n));

//example 3
var a=[1,3,4]
var b=[2,6,9]
var c=[...a,...b]
var d=[...c,5,7,...a]// inserting elements
var e=[...b]//copying an array
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

//example 4
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );
mergedObj1 = merge (obj1, obj2);
mergedObj2 = merge ({}, obj1, obj2);
console.log(mergedObj2)

obj4 = [1,2];
obj3 = [6,8];
 merge2 = ( ...objects ) => ( { ...objects } );
 mergedObj1 = merge2 (obj4, obj3);
 mergedObj2 = merge2 ({}, obj4, obj3);
console.log(mergedObj1)



//Class Examples
class Rect{
constructor(l,w){
this.l=l;
this.w=w;
}
getArea(){
return this.l*this.w;
}
}

class Square extends Rect{
constructor(l){
super(l,l);
}
getPerimeter(){
return 2*(this.l+this.w)
}
}

var o=new Rect(10,20)
console.log(o.getArea());
var o1=new Square(2)
console.log(o1.getArea());
console.log(o1.getPerimeter());


//multilevel inheritance
class circle{
constructor(r){this.r=r;}
getCirArea(){
return 3.14*this.r*this.r;
}
}
class Rect2 extends circle{
constructor(l,w){
super(l)
this.l=l;
this.w=w;
}
getArea(){
return this.l*this.w;
}
}

class Square2 extends Rect2{
constructor(l){
super(l,l);
}
getPerimeter(){
return 2*(this.l+this.w)
}
}

var o=new Rect2(10,20)
console.log(o.getArea());
var o1=new Square2(2)
console.log(o1.getArea());
console.log(o1.getPerimeter());
console.log(o1.getCirArea());

//Hierarchical Inheritance
class arth {
constructor(a,b){
this.a=a, this.b=b;
}
add(){return this.a+this.b}
sub(){return this.a-this.b}
}

class exam1 extends arth{
constructor(a,b){super(a,b)}

}
class exam2 extends arth{
constructor(a,b){super(a,b)}
}
var obj=new exam1(10,5);
console.log(obj.add())
console.log(obj.sub())
var obj1=new exam2(50,5);
console.log(obj1.add())
console.log(obj1.sub())

//Destructing
//example 1
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); 
console.log(q);

//example 2
let a, b;
({a, b} = {a: 1, b: 2});

//example 3
var o1 = {p: 42, q: true};
var {p: foo, q: bar} = o;
console.log(foo); // 42 
console.log(bar);

//example 4
var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b);

//example 5

function sample({size = 'small', c = {x: 0, y: 0}, r = 65} = {}) {
  console.log(size, c, r);
}
sample({
  c: {x: 18, y: 30},
  r: 30
});

// example 6
var a = [
  { id: 1, name: 'teju'},
  { id: 2, name: 'bala'},
  { id: 3, name: 'anu'}
];
var [,, { name }] = a;
console.log(name); //anu