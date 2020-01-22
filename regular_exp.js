function Reg_Exp(){
	var str='Hello! abc'
	var re=/abc/
	document.write(str.match(re));
	document.write('<br>')
	re=/ab*c/
document.write(str.match(re));
document.write('<br>')
var sentence = "There was a long silence after this, and Alice could only hear whispers now and then.";
var vowels = /[aeiou]/g;
document.write("Number of vowels:", sentence.match(vowels).length);
document.write('<br>')
var text = "A sample example";

var lastWord = /\w+$/;
document.write(text.match(lastWord));
document.write('<br>')
const words = /\b\w+\b/g;
document.write(text.match(words));
document.write('<br>')
const regexp = /\w+(?= sample)/;
document.write(text.match(regexp));
document.write('<br>')
 var str1='my me i'
 re=/.e/
document.write(str1.match(re))
document.write('<br>')
re=/\b\w+\s\w+/i;
str='I am studying Btech'
document.write(re.exec(str));
document.write('<br>')
re=/\S/i;
document.write(re.exec(str));
document.write('<br>')
str='Good morning'
re=/\b\w+\b/g;
document.write(re.exec(str));
document.write('<br>')
re=/Good(?= morning)/g
document.write(re.exec(str));
document.write('<br>')
regex = /test(?! First)/g;
document.write('First test pattern'.match(regex),'<br>');
let mixedCharacters = "aεЛ";
document.write(mixedCharacters.match(/\p{Script=Latin}/u)); 
}
