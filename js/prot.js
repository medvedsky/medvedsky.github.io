function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password','');
while (testV < 3) {
if (!pass1)
var encode = window.btoa(pass1);
history.go(-1);
if (encode.toLowerCase() == "cgfja29mc3ryyxrz") {
alert('Nice!');
window.open('mapsList.html');
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}