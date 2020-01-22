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
}
