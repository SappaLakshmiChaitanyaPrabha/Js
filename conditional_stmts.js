document.write("Hello");
function Break_continue(){
for(let i=0;i<5;i++) {
    if (i==3) {
        break;
    }
    document.write(i);
}

for(let i=0;i<5;i++) {
    if (i==3) {
        continue;
    }
    document.write(i);
}
}


function If_elseif_else()
{
var a=prompt("Enter a number:");
a=parseInt(a);
if(a>0) {
    document.write("positive number:",a);
        } 
else if(a<0) {
    document.write("Negative number:",a);
	     } 
else {
    document.write("Zero",a);
     }
}


function Switch_case()
{
document.write("1. Addition\n2. Subtraction \n3. Multiplication\n4.Division")
var a=prompt("Enter your choice:");
switch(a) {
    case '1': var a1=parseInt(prompt("Enter a number:"));
              var a2=parseInt(prompt("Enter a number:"));
              var a3= a1+a2;
              document.write("Addition: ",a3);
             break;
    case '2':   a1=parseInt(prompt("Enter a number:"));
                a2=parseInt(prompt("Enter a number:"));
                a3= a1-a2;
                document.write("Subtraction: ",a3);
		break;
case '3':    a1=parseInt(prompt("Enter a number:"));
             a2=parseInt(prompt("Enter a number:"));
             a3= a1*a2;
	     document.write("Multiplication: ",a3);
	     break;
case '4':   a1=parseInt(prompt("Enter a number:"));
            a2=parseInt(prompt("Enter a number:"));
            a3= a1/a2;
            document.write("Divison: ",a3);
            break;
default:
document.write("invalid choice");
}
}


function For_loop(){
var n=parseInt(prompt("Enter a number:"));
for(var i=0;i<=n;i++) {
    if(i%2 === 0)
    {  
        document.write(i)
document.write('<br>')
    } 
  }
}


function While_loop()
{
var n=parseInt(prompt("Enter a number:"))
var i=0;
while(i<n)
 {
    document.write(i);
document.write('<br>')
    i++;
 }
}


function Do_while(){
var i=0;
var n=parseInt(prompt("Enter the length:"));
var a=[];
do{
    a[i]=prompt ();
    i++;
} while(i<n);
document.write(a)
}