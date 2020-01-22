function operators()
{ 
    var a=10;  
    var b='10'; 
    var c= (a == b); //true
document.write(c);
document.write('<br>')
 c=(a === b); 
document.write(c);//false
document.write('<br>')
    a=null;
    b=undefined;	
    c= (a == b)
    document.write(c);//true
document.write('<br>')
    c=(a === b);
    document.write(c);//false
document.write('<br>')
    a=null;
    b=null;	
    c= (a == b)
    document.write(c);//true
document.write('<br>')
    c=(a === b);
    document.write(c);//true
document.write('<br>')
    a=undefined;
    b=undefined;	
    c= (a == b)//true
    document.write(c);
document.write('<br>')
    c=(a === b);//true
    document.write(c);
document.write('<br>')
    a='Hello';
    b='World';	
    c= (a == b)
    document.write(c);//false
document.write('<br>')
    c=(a === b);
    document.write(c);//false
document.write('<br>')
a=[1,2,3,4];
b=[1,2,3,4];
    c= (a == b)
    document.write(c);// false
document.write('<br>')
    c=(a === b);
    document.write(c);// false
document.write('<br>')
//!== and !=
document.write(a!=b)
document.write(a!==b)
b=a;
document.write(a!=b)
var s;
document.write(s!=null)
document.write(s!==null)
document.write(s!=NaN)
}


function arr_comp(a,b){
var i=a.length;
if(i != b.length) return false;
while(i--){
if(a[i] != b[i]) return false;
}
return true;
};
