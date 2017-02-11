//comment
window.onload = function(){

var keys = document.querySelectorAll('#calc span');
var screenface = document.getElementById('screen');
var theSum='';

var buttonclick = function(e){
  if (this.innerHTML!=='='){
  screenface.innerHTML = this.innerHTML;
  theSum +=this.innerHTML;
};
if (this.innerHTML==='='&&(theSum)){
    screenface.innerHTML=eval(theSum);
    theSum = eval(theSum);
  };
};

for (var i=0; i<keys.length;i++){
  console.log(keys[i]);
  keys[i].addEventListener('click',buttonclick, false);
};

}
