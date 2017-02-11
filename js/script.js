//comment
window.onload = function(){

var keys = document.querySelectorAll('#calc span');
var screen1 = document.getElementById('screen1');
var screen2 = document.getElementById('screen2');
var theSum='';
var decimalpressed=false;
var lastbutton

//FIX THIS:
//Clear buttonclick DONE
//decimal point twice DONE
//pressing a number after the calculation should just clear as well
//can't press two operators in a row
//something about negative numbers

var buttonclick = function(e){

  //clear screen on C
  if (this.innerHTML==='C'){
    screen1.innerHTML='';
    screen2.innerHTML='';
    theSum=0;
    lastbutton=this;
  };

  //when press decimal
  if (this.innerHTML==='.'&&(decimalpressed===false)){
    screen1.innerHTML = this.innerHTML; //replace characters on main screen
    screen2.innerHTML += this.innerHTML;  //add to characters on secondary

    theSum +=this.innerHTML; //add to theSum variable
    lastbutton=this;
    decimalpressed=true;
  }

//what happens when numbers or operators are pressed
  if (this.className!=='func'){
    screen1.innerHTML = this.innerHTML; //replace characters on main screen
    screen2.innerHTML += this.innerHTML;  //add to characters on secondary

    theSum +=this.innerHTML; //add to theSum variable
    lastbutton=this;
    if (this.className==='op'){decimalpressed=false}; //revert decimalpressed to false after op
  };




//what happens when equals is pressed when there is a sum to solve
  if (this.id==='equals'&&(theSum)){
    console.log(theSum);
    theSum = eval(theSum);
    screen1.innerHTML=theSum;
    screen2.innerHTML = theSum;
    console.log(theSum);
    lastbutton=this;
    decimalpressed=false;

  };
};

for (var i=0; i<keys.length;i++){
  keys[i].addEventListener('click',buttonclick, false);
};

}
