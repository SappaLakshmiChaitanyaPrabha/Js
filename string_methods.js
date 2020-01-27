function string_methods(){
    var str='A string can be tested with string methods';
    var pos=str.indexOf('string');
    document.write(pos);//2
document.write('<br>')
    pos=str.lastIndexOf('string');
    document.write(pos);//29
document.write('<br>')
    pos=str.search('string');// it may be string or regular expression
    document.write(p);//2
document.write('<br>')
   var re=/string/i
   pos=re.test(str);
    var p=str.match(re)
    document.write(pos);
document.write('<br>')
    document.write(p)
document.write('<br>')
    re=/string/g
    pos=str.match(re);
    document.write(pos);
document.write('<br>')
    pos=re.exec(str);
    document.write(pos);
document.write('<br>')
    pos=str.replace('string','JavaScript');
    document.write(pos);
document.write('<br>')
    var a='javascript';
    var str1=a.slice(2);
    document.write(str1);
document.write('<br>')
    var b='this is example for string split mthod '
    var c=b.split(',');
    document.write(c)
document.write('<br>')
    c=a.substring(2,4)//va
    document.write(c)
document.write('<br>')
    var d=a.toUpperCase();
document.write(d);
document.write('<br>')
    d=a.toLowerCase();
    document.write(d);
document.write('<br>')
    d=b.charAt(0)
    document.write(d);
    document.write('<br>')
    var str1="This is Example for string method"
    document.write(str1.charCodeAt(3));
    document.write('<br>')
    s1='Hello'
    s2='World!'
    document.write(s1.concat(' ',s2))
    document.write('<br>')
    document.write(s1.includes('H',1))
    document.write(s1.includes('H'))
	document.write(s1.endsWith('a'))
    document.write(s1.startsWith('a'))
    document.write('<br>')
    document.write(s1+s2.repeat(5))
    document.write('<br>')
    document.write(s1.padEnd(10,'.'))
    document.write('<br>')
     document.write(s2.padStart(10,'.'))
     document.write('<br>')
     document.write(s1.localeCompare(s1))
     document.write(s1.localeCompare(s2))
     document.write(s2.localeCompare(s1))
document.write(s1.toLocaleLowerCase('en-us'))
}


function array_Methods(){
	//mutator methods
	var arr=[]
	arr.push("Banana")
	arr.push("Apple")
	arr.push("Orange")
	document.write(arr,'<br>');
	arr.pop()
	document.write(arr,'<br>');
	arr.shift()
	document.write(arr,'<br>');
	arr.unshift("Watermelon")
	document.write(arr,'<br>');
	var ind=arr.indexOf("Apple");
	document.write(ind,'<br>');
	arr.splice(2,1);
	document.write(arr,'<br>');
	var cpy=arr.slice()
	document.write(cpy,'<br>');
	var arr1=arr.reverse();
	document.write(arr1,'<br>');
    var arr1=arr.sort();
	document.write(arr1,'<br>');
	document.write(arr1.join('-'),'<br>');
  arr.push("Papaya");
  arr.push("orange")
  arr.push("Guava")
  document.write(arr,'<br>')
document.write(arr.fill("Fruit",3,5),'<br>')
var a=['a','b','c','d','e']
document.write(a.copyWithin(2,4,5),'<br>')
document.write(a.copyWithin(-2,-4),'<br>')

//Accessor methods
var arr1=['ab','bc','ca']
var arr2=['de','ef','fg']
document.write(arr1.concat(arr2),'<br>');
arr1.push("abc");
document.write(arr1.filter(arr1=>arr.length>2),'<br>')
document.write(arr1.slice(2),'<br>')
document.write(arr1.slice(2,4),'<br>')
document.write(arr1.slice(-2),'<br>');
document.write(arr2.includes('ef',1),'<br>')
document.write(arr2.includes('fg',0),'<br>')
document.write(arr1.join('+'),'<br>');
document.write(arr2.join(""),'<br>')
document.write(arr1.lastIndexOf('ab'))
document.write(arr1.lastIndexOf('ab',-3),'<br>');
var a =[1,4,6,3,9,9,0]
document.write(a.toString(),'<br>');
var b=[1,'a',new Date('1 Feb 2020 12:36 UTC')]
document.write(b.toLocaleString('en',{timezone:'UTC'}),'<br>')

//Iterator methods
var iterator=arr1.values();
for (var v of iterator){
document.write(v,'<br>')
}
var i=arr1.keys();
for (var v of i){
document.write(v,'<br>')
}
function sam(elem){
return elem>10;
}
var arr3=[5,2,12,34,8];
document.write(arr3.some(sam),'<br>');
document.write(arr3.find(sam),'<br>');
document.write(arr3.findIndex(sam),'<br>')
document.write(arr3.every((ele)=>ele<40),'<br>')
document.write(arr3.map(x=>x*2),'<br>')
var t=arr3.entries();
document.write(t.next().value,'<br>')
var cpy=[];
arr3.forEach(function(i){
	cpy.push(i);
})
document.write(cpy,'<br>');
document.write(arr3.reduce(function(acc,val){
	return acc+val;
}),'<br>')
document.write(arr3.reduceRight(function(acc,val){
	return acc+val;
}),'<br>')
}

