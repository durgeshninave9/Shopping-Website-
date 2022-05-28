function onmouse(){
    document.getElementById("i1").style.color="red";
    document.getElementById("i1").style.backgroundColor="cornsilk";
    document.getElementById("i1").style.fontFamily="cursive";
    
}
function onleave(){
    document.getElementById("i1").style.color="black";
    document.getElementById("i1").style.backgroundColor="";
    document.getElementById("i1").style.fontFamily="";
    
}
function onmouse1(){
    document.getElementById("i2").style.color="blue";
}
function onleave1(){
    document.getElementById("i2").style.color="black";
}
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
function letter_check(){
  if( (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122))
      return true;
  else
      return false;
}
function num_check(){
  if(event.keyCode >= 48 && event.keyCode <= 57)
      return true;
  else
      return false;
}
function email_check(){
  t=event.target.id;
  var r = /^[0-9]{2}[a-zA-Z]{3}[0-9]{3}@[nirmauni.ac.in]/;
  if(document.getElementById(t).value.match(r)){
      document.getElementById(t).focus;
  }
  else{
      document.getElementById(t).value='';
      document.getElementById(t).placeholder='Enter a valid email address'
  }
}
function name_check(){
  t=event.target.id;
  if(document.getElementById(t).value==''){
      document.getElementById(t).placeholder="Field cannot be empty";  
  }
}
function pswd_check(){
  t=event.target.id;
  var r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if(document.getElementById(t).value.match(r)) {
      document.getElementById(t).focus;
  }
  else{
      alert('Wrong...! There should be atleast one uppercase and lowercase letter, number and a special character')
      document.getElementById(t).value='';
  }
}
function cnfrm_pswd(){
  t=event.target.id;      
  if(document.getElementById(t).value==document.getElementById('password').value){
      document.getElementById(t).focus;
  }
  else{
      alert('Password did not match')
      document.getElementById('password').value='';
      document.getElementById(t).value='';  
  }
}
function phone_no(){
  t=event.target.id;
  var r = /^[0-9]{10}/;
  if(document.getElementById(t).value.match(r)){
      document.getElementById(t).focus;
  }
  else{
      document.getElementById(t).value='';
      document.getElementById(t).placeholder='Enter a valid mobile number'
  }
}
