function operators()
{ 
    var a=10;  
    var b='10'; 
    var c= (a == b); //true
console.log(c);
 c=(a === b); 
console.log(c);//false
    a=null;
    b=undefined;	
    c= (a == b)
    console.log(c);//true
    c=(a === b);
    console.log(c);//false
    a=null;
    b=null;	
    c= (a == b)
    console.log(c);//true
    c=(a === b);
    console.log(c);//true
    a=undefined;
    b=undefined;	
    c= (a == b)//true
    console.log(c);
    c=(a === b);//true
    console.log(c);
    a='Hello';
    b='World';	
    c= (a == b)
    console.log(c);//false
    c=(a === b);
    console.log(c);//false
a=[1,2,3,4];
b=[1,2,3,4];
    c= (a == b)
    console.log(c);// false
    c=(a === b);
    console.log(c);// false
}


function arr_comp(a,b){
var i=a.length;
if(i != b.length) return false;
while(i--){
if(a[i] != b[i]) return false;
}
return true;
};
