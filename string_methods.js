function string_methods(){
    var str='A string can be tested with string methods';
    var pos=str.indexOf('string');
    console.log(pos);//2
    pos=str.lastIndexOf('string');
    console.log(pos);//29
    pos=str.search('string');// it may be string or regular expression
    console.log(p);//2
   var re=/string/i
   pos=re.test(str);
    var p=str.match(re)
    console.log(pos);
    console.log(p)
    re=/string/g
    pos=str.match(re);
    console.log(pos);
    pos=re.exec(str);
    console.log(pos);
    pos=str.replace('string','JavaScript');
    console.log(pos);
    var a='javascript';
    var str1=a.slice(2);
    console.log(str1);
    var b='abcde'
    var c=b.split(',');
    console.log(c)
    c=a.substring(2,4)//va
    console.log(c)
    var d=b.toUpperCase();
console.log(d);
    d=b.toLowerCase();
    console.log(d);
    d=b.charAt(0)
    console.log(d);
}
