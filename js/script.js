//comment
window.onload = function(){

var keys = document.querySelectorAll('#calc span');
var screen1 = document.getElementById('screen1');
var screen2 = document.getElementById('screen2');
var theSum='';

//FIX THIS:
//Clear buttonclick DONE
//decimal point twice
//pressing a number after the calculation should just clear as well
//can't press two operators in a row

var buttonclick = function(e){

  //clear screen on C
  if (this.innerHTML==='C'){
    screen1.innerHTML='';
    screen2.innerHTML='';
    theSum='';
  };


//when not C or Equals are pressed:
  if (this.className!=='func'){
  screen1.innerHTML = this.innerHTML; //replace characters on main screen
  screen2.innerHTML += this.innerHTML;  //add to characters on secondary

  theSum +=this.innerHTML; //add to theSum variable
  };
if (this.innerHTML==='='&&(theSum)){
    console.log(theSum);
    screen1.innerHTML=eval(theSum);
    theSum = eval(theSum);
    screen2.innerHTML = eval(theSum);
    console.log(theSum);
  };
};

for (var i=0; i<keys.length;i++){
  keys[i].addEventListener('click',buttonclick, false);
};

}
