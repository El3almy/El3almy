<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8" />
<!-- "Find and Replace Text" is Copyright 2015 TextMechanic.com -->
<title>Find and Replace Text</title>
<link rel="canonical" href="" />
<style type="text/css">html {height:70%;}
body {height:70%; margin:0px; padding:9px; font-family:arial; font-size:18px; line-height:1; background-color:#e1e1d2;}
h1 {display:block; font-size:18px; font-weight:bold; margin:0px; padding:0px;}
textarea {display:block; margin:0px; padding:8px 10px 8px 10px; overflow:scroll; font-family:arial; font-size:18px; line-height:1.2; color:#000000; background-color:#e7e8b8; border:2px solid #000000; outline:none; resize:none; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; border-radius:4px 4px 4px 4px; box-shadow:inset 0 0 0px #ffffff;}
input {display:inline-block; height:25px; line-height:1; vertical-align:middle; font-size:18px; outline:none; resize:none; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box;}
input::-moz-focus-inner {border:0; padding:0}
input[type='radio'] {height:auto; margin:0px; padding:0px; font-size:16px;}
input[type='checkbox'] {height:auto; margin:0px; padding:0px; font-size:16px;}
input[type='text'] {width:auto; margin:3px 0px 3px 0px; padding:0px 10px 0px 10px; font-family:arial; color:#000000; background-color:#FFFFFF; border:1px solid #000000; border-radius:12px; box-shadow:inset 0 0 6px #FFFF00;}
input[type='button'] {width:auto; margin:3px 0px 3px 0px; padding:0px 16px 0px 16px; font-family:arial; font-weight:bold; color:#000000; border:1px solid #000000; background-color:#fcf7cd; cursor:pointer; border-radius:4px; box-shadow:inset 0 0 6px #5a3ed7;}
input[type='button']:hover {box-shadow:inset 0 0 8px #00CC00;}
input[type='file'] {width:92px; border-radius:12px; overflow:hidden; padding:0px; margin:0px 0px 0px -92px; -moz-opacity:0; opacity:0; cursor:pointer;}
input[type='file']::-webkit-file-upload-button {cursor:pointer;}
div {-moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box;}
table {border-collapse:collapse;}
table,td {padding:0px;}
#menu {position:absolute; z-index:-1; left:0px; top:0px; width:0px; height:0%; margin:0px; overflow:auto; line-height:1.2; background-color:#000000; border-right:1px solid #000000;}
a.nav {display:block; margin:0px; padding:2px 0px 2px 0px; text-decoration:none; color:#000000; background-color:#000000;}
a.navhover {display:block; margin:0px; padding:2px 0px 2px 0px; text-decoration:none; font-weight:bold; color:#0000FF; background-color:#FFFFFF; box-shadow:inset 0 0 4px #0000FF;}
#toolpadding {padding:10px 10px 10px 10px;}
#tool {position:absolute; z-index:1; left:0px; top:0px; width:100%; height:100%; margin:0px; padding:0px; overflow:auto; background-color:#ededce;}
</style>
<script type="text/javascript">
var firstload = 'yes';
var windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
var windochk = '';

function windotargt(){
if(document.getElementById('newwin').checked == true){
windo = '<a target="_blank" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = 'CHECKED';
} else {
windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = '';}}

function loadmenu(menuf){
var tlespn = '"><span style="padding-left:10px;">';
var endspn = '</span></a>';
if(firstload == 'no'){
if(menuf == 'open'){
document.getElementById('menu').style.zIndex = '2';
document.getElementById('menu').style.width = '300px';
document.getElementById('menu').style.height = '100%';
document.getElementById('menu').innerHTML =
'<div style="padding:10px 0px 0px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>'+
'<div style="padding:3px 0px 0px 10px;"><input type="checkbox" id="newwin" onClick="windotargt(); setTimeout(\'loadmenu(&#092;&#039;open&#092;&#039;)\',100);" ' + windochk + ' /> Open tools in new window.</div>'+
windo + '/' + tlespn + 'Homepage | Descriptive Index' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Basic Text Tools:</div>'+
windo + 'Add-Prefix-Suffix-to-Text.html' + tlespn + 'Add Prefix/Suffix into Line' + endspn +
windo + 'Add-Remove-Line-Breaks.html' + tlespn + 'Add/Remove Line Breaks' + endspn +
windo + 'Count-Text.html' + tlespn + 'Count Characters, Words...Lines' + endspn +
windo + 'Delimited-Column-Extractor.html' + tlespn + 'Delimited Column Extractor' + endspn +
windo + 'Find-and-Replace-Text.html' + tlespn + 'Find and Replace Text' + endspn +
windo + 'Letter-Case-Converter.html' + tlespn + 'Letter Case Converter' + endspn +
windo + 'Merge-Text-Line-by-Line.html' + tlespn + 'Merge Text (Line by Line)' + endspn +
windo + 'Remove-Duplicate-Lines.html' + tlespn + 'Remove Duplicate Lines' + endspn +
windo + 'Remove-Empty-Lines.html' + tlespn + 'Remove Empty Lines' + endspn +
windo + 'Remove-Extra-Spaces.html' + tlespn + 'Remove Extra Spaces' + endspn +
windo + 'Remove-Letter-Accents.html' + tlespn + 'Remove Letter Accents' + endspn +
windo + 'Remove-Lines-Containing.html' + tlespn + 'Remove Lines Containing...' + endspn +
windo + 'Sort-Text-Lines.html' + tlespn + 'Sort Text Lines' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Format Tools:</div>'+
windo + 'ASCII-to-Unicode-Converter.html' + tlespn + 'ASCII to Unicode Converter' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Obfuscation Tools:</div>'+
windo + 'Binary-Code-Translator.html' + tlespn + 'Binary Code Translator' + endspn +
windo + 'Disemvowel-Tool.html' + tlespn + 'Disemvowel Tool' + endspn +
windo + 'Encryption-Generator.html' + tlespn + 'Encryption Generator' + endspn +
windo + 'Reverse-Text-Generator.html' + tlespn + 'Reverse Text Generator' + endspn +
windo + 'ROT13-Caesar-Cipher.html' + tlespn + 'ROT13 Caesar Cipher' + endspn +
windo + 'Word-Scrambler.html' + tlespn + 'Word Scrambler/Descrambler' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Randomization Tools:</div>'+
windo + 'Random-Line-Picker.html' + tlespn + 'Random Line Picker' + endspn +
windo + 'Random-Number-Generator.html' + tlespn + 'Random Number Generator' + endspn +
windo + 'Random-String-Generator.html' + tlespn + 'Random String Generator' + endspn +
windo + 'String-Randomizer.html' + tlespn + 'String Randomizer' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Combination / Permutation:</div>'+
windo + 'Combination-Generator.html' + tlespn + 'Combination Generator' + endspn +
windo + 'Line-Combination-Generator.html' + tlespn + 'Line Combination Generator' + endspn +
windo + 'Permutation-Generator.html' + tlespn + 'Permutation Generator' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Numeration Tools:</div>'+
windo + 'Generate-List-of-Numbers.html' + tlespn + 'Generate List of Numbers' + endspn +
windo + 'Number-Each-Line.html' + tlespn + 'Number Each Line' + endspn +
windo + 'Online-Tally-Counter.html' + tlespn + 'Online Tally Counter' + endspn +
'<div style="padding:7px 0px 7px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>';
resizepage();
} else {
document.getElementById('menu').style.zIndex = '-1';
document.getElementById('menu').style.width = '0px';
document.getElementById('menu').style.height = '0%';
document.getElementById('menu').innerHTML = '';}}
if(firstload == 'yes'){
firstload = 'no';
resizepage();}}

window.onresize = resizepage;

function resizepage(){
var client_width = document.body.parentNode.clientWidth;
var client_height = document.body.parentNode.clientHeight;
if(client_width <= 300){
document.getElementById('tool').style.width = '300px';
} else {
document.getElementById('tool').style.width = '100%';}
document.getElementById('menu').style.height = client_height + 'px';
document.getElementById('tool').style.height = client_height + 'px';
if(autohgt == 'yes'){
var topdivhgt = document.getElementById('topdiv').offsetHeight;
var btmdivhgt = document.getElementById('btmdiv').offsetHeight;
var middivhgt = ((client_height - 20) - topdivhgt) - btmdivhgt;
if(middivhgt > 120) document.getElementById('middiv').style.height = middivhgt + 'px';
else document.getElementById('middiv').style.height = '120px';}
if(typeof specialonsizefunction == 'function') specialonsizefunction();}

function privacy_policy(){
var text =
'~ TextMechanic.com Privacy Policy ~\n\n'+
'Log Files: The TextMechanic.com webserver records log files as required by United States law. The information inside the log files includes: ip address, date/time stamp, referring page and user agent.\n\n'+
'Cookies: TextMechanic.com and it\'s partners use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.\n\n'+
'Tools: All tool are built-with and functions-in Client Side JavaScripting, so only your computer will see or process your data input/output. Input/processing/output data is never transmitted over the internet and always resides within your computer. However, cloud operating systems could transmit your data into the cloud\'s system for processing but this has nothing to do with the TextMechanic.com webserver.\n\n'+
'Sensitive Data Disclaimer: Don\'t trust any website with sensitive data, not even TextMechanic.com. Keep your sensitive data secure by keeping it to yourself.';
alert(text);}
</script>
<script type="text/javascript">
function loadfile(fileid,loadid){
document.getElementById(loadid).value = 'Loading...';
setTimeout(function(){loadfile2(fileid,loadid)},1000);}

function loadfile2(fileid,loadid){
if(!window.FileReader){
document.getElementById(loadid).value = 'Your browser does not support HTML5 "FileReader" function required to open a file.';
} else {
fileis = document.getElementById(fileid).files[0];
var fileredr = new FileReader();
fileredr.onload = function(fle){
var filecont = fle.target.result;
document.getElementById(loadid).value = filecont;}
fileredr.readAsText(fileis);}}

function savefile(saveasid,saveid){
if(!window.Blob){alert('Your browser does not support HTML5 "Blob" function required to save a file.');
} else {
var txtwrt = document.getElementById(saveid).value;
if(document.getElementById('dos').checked == true) txtwrt = txtwrt.replace(/\n/g,'\r\n');
var textblob = new Blob([txtwrt],{type:'text/plain'});
var saveas =  document.getElementById(saveasid).value;
var dwnlnk = document.createElement('a');
dwnlnk.download = saveas;
dwnlnk.innerHTML = "Download File";
if (window.webkitURL != null){
dwnlnk.href = window.webkitURL.createObjectURL(textblob);
} else {
dwnlnk.href = window.URL.createObjectURL(textblob);
dwnlnk.onclick = destce;
dwnlnk.style.display = 'none';
document.body.appendChild(dwnlnk);}
dwnlnk.click();}}
function destce(event){document.body.removeChild(event.target);}

function SelectAll(id){
document.getElementById(id).focus();
document.getElementById(id).select();}

function cleartext(){
document.getElementById('input_output').value = '';
document.getElementById('found').innerHTML = '';}

var enableregex = 'no';

function replacetext(){
var searchfor = '';
var replacewith = document.getElementById('replacetext_1').value.replace(/\r/gi,'');
var text = document.getElementById('input_output').value.replace(/\r/gi,'')
var flagg = 'g';
var flagi = 'i';
var flagm = '';
if(document.getElementById('globl').checked == false) flagg = '';
if(document.getElementById('case_sen').checked == true) flagi = '';
if(document.getElementById('multi_line') != null)
if(document.getElementById('multi_line').checked == true) flagm = 'm';
var flags = flagg + flagi + flagm;
if(enableregex == 'yes') searchfor = document.getElementById('find_this_regex').value; else searchfor = document.getElementById('find_this').value.replace(/\r/gi,'').replace(/([.*+?^=!:${}()|\[\]\/\\])/g,'\\$1');
var killfun = 'no';
try{var searchexp = new RegExp(searchfor,flags);}
catch(err){
alert('Something is incorrect (' + err + ') within your regular expression.\nBe sure special characters .*+?^=!:${}()|\\ used as literals have been escaped with a backslash.');
killfun = 'yes';}
if(killfun == 'no'){
var rcount = 0;
var matched = text.match(searchexp);
if(matched != null) rcount = matched.length;
text = text.replace(searchexp,replacewith);
document.getElementById('input_output').value = text;
document.getElementById('found').innerHTML = rcount + ' found and replaced.';}}

function regexsrch(){
var chkedstate = document.getElementById('regex_srch').checked;
if(chkedstate == true){
enableregex = 'yes';
document.getElementById('findfielddiv').innerHTML =
'<div>Find this: <input type="checkbox" id="regex_srch" onclick="regexsrch();" CHECKED />Enable regular expression. <input type="checkbox" id="multi_line" />Multiline matching.</div>'+
'<div style="padding-top:8px;"><input type="text" id="find_this_regex" value="" style="width:100%; margin-top:0px; margin-bottom:0px;" /></div>'+
'<div style="padding:7px 10px 10px 10px; margin-top:10px; background-color:#FFFFCC; border-radius:12px;">'+
'Examples: <b>|</b> Find <b>a</b> or <b>b</b> or <b>c</b> and replace with <b>d</b>. Enter <b>a|b|c</b> into find and <b>d</b> into the replace. <b>|</b> '+
'Insert <b>a</b> and <b>b</b> around <b>c</b>. Enter <b>(c)</b> into find and <b>a$1b</b> into replace. <b>|</b> '+
'Swap <b>a</b> and <b>b</b> positions. Enter <b>(a)(b)</b> into find and <b>$2$1</b> into replace. <b>|</b> '+
'Replace <b>a</b> if followed by <b>b</b> with <b>c</b>. Enter <b>a(?=b)</b> into find and <b>c</b> into replace. <b>|</b> '+
'Remember to escape special characters .*+?^=!:${}()|\\ with a backslash when used as literals within a regular expression. Use the <a target="_blank" href="" style="color:#0000FF;">Escape Literal Characters</a> tool. '+
'Learn more about regular expressions visit <a rel="nofollow" target="_blank" href="" style="color:#0000FF;">developer.mozilla.org</a>.'+
'</div>';
} else {
enableregex = 'no';
document.getElementById('findfielddiv').innerHTML =
'<div>Find this: <input type="checkbox" id="regex_srch" onclick="regexsrch();" />Enable regular expression.</div>'+
'<div style="padding-top:8px;"><textarea id="find_this" style="width:100%;" rows="4" wrap="off"></textarea></div>';}
resizepage();}

function wrapis(itis){
var area = document.getElementById('input_output');
area.setAttribute('wrap',itis);
var newarea = area.cloneNode(true);
newarea.value = area.value;
area.parentNode.replaceChild(newarea,area);}
</script>
<script type="text/javascript">
var autohgt = 'yes';
function specialonsizefunction(){
document.getElementById('input_output').style.height = document.getElementById('middiv').clientHeight + 'px';}
</script>
</head>
<body spellcheck="false">
<div id="tool">
<div id="toolpadding">
<div id="topdiv">
<h1><a target="_blank" href="https://www.facebook.com/profile.php?id=100004016916958" style="font-size:25px;weight:bold;color:#e81818;"><B>Click Herer...By Ahmed Khaled</a></B></h1>
<div style="padding:7px 0px 7px 0px;">
<input type="button" value="بحث_1" onClick="replacetext_1();"/>
<input type="button" value="بحث_2" onClick="replacetext_2();" />
<input type="button" value="لتغيير تحويلة الهاك" onClick="replacetext_3();" />
<input type="button" class="buttn" title="Select All Text" value="تحديد الكل" onClick="SelectAll('input_output')" />
<input type="button" class="buttn" title="Clear All Text" value="حذف النص" onClick="cleartext();" />
<div  type="" id="globl" CHECKED />
<div  type="" id="case_sen" CHECKED" />
<span id="found"></span></div>
</div>
<div id="middiv" style="height:120px;">
<textarea id="input_output" style="width:100%; height:399%;" wrap="off">
D0 D0 D0
D1 D1 D1
</textarea>

<div style="padding-top:5px;"><b>التحويلة</div>
<textarea id="replace_with_3" style="width:5%; height:50%;" rows="4" wrap="off"></textarea>
<textarea id="find_this_1" style="width:5%; height:0%;" wrap="off">" Activated</textarea>
<textarea id="find_this_3" style="width:5%; height:0%;" rows="4" wrap="off">24 01 48</textarea>
<textarea id="find_this_2" style="width:5%; height:0%;" wrap="off"><Description>"No description"</Description>
      <LastState Value="</textarea>
<textarea id="replace_with_1" style="width:5%; height:0%;" wrap="off">))
Mr.X:   // By Ahmed Khaled,,,
db 24 01 48
[DISABLE]
</AssemblerScript></textarea>
<textarea id="replace_with_2" style="width:5%; height:0%;" wrap="off">      <Description>"M.r   Ahmed Khaled"</Description>
      <Color>FF0000</Color>
      <VariableType>Auto Assembler Script</VariableType>
      <AssemblerScript>[ENABLE]
Aobscan(Mr.X,</textarea>
