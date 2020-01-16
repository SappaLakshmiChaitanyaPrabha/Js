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
    var b='abcde'
    var c=b.split(',');
    document.write(c)
document.write('<br>')
    c=a.substring(2,4)//va
    document.write(c)
document.write('<br>')
    var d=b.toUpperCase();
document.write(d);
document.write('<br>')
    d=b.toLowerCase();
    document.write(d);
document.write('<br>')
    d=b.charAt(0)
    document.write(d);
}
