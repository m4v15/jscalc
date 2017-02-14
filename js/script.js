//comment
window.onload = function(){
//FIX THIS:
//Clear buttonclick DONE
//decimal point twice DONE
//pressing a number after the calculation should just clear as well
//can't press two operators in a row
//something about negative numbers


var keys = document.querySelectorAll('#calc span');
var screen1 = document.getElementById('screen1');
var screen2 = document.getElementById('screen2');
var theSum='';
var decimalpressed=false;

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
    if (lastbutton.id==='equals'){ //stops just adding a digit to the last calculation
      screen2.innerHTML = this.innerHTML;
      theSum = this.innerHTML;
    };
    lastbutton=this;
    decimalpressed=true;
  }

//what happens when numbers are pressed
  if (this.className!=='func'&&this.className!=='op'){
    screen1.innerHTML = this.innerHTML; //replace characters on main screen

    if (lastbutton.id==='equals'){ //stops just adding a digit to the last calculation
      screen2.innerHTML = this.innerHTML;
      theSum = this.innerHTML;
    };
    if (lastbutton.id!=='equals'){
    theSum +=this.innerHTML; //add to theSum variable
    screen2.innerHTML = theSum;
    };

    lastbutton=this;
  };

  //operators
  if (this.className==='op'){

    screen1.innerHTML = this.innerHTML; //replace characters on main screen

    if (lastbutton.className!=='op'){
      screen2.innerHTML += this.innerHTML;  //add to characters on secondary
      theSum +=this.innerHTML; //add to theSum variable

    };
    if (lastbutton.className==='op'){ //when operators are pressed consecutively
      theSum=theSum.slice(0,theSum.length-1)+this.innerHTML;
      screen2.innerHTML=theSum;
    }
    decimalpressed=false;
    lastbutton=this;
     //revert decimalpressed to false after op
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

var lastbutton=keys[12]//to avoid error when functions act on lastbutton


}
