//comment
window.onload = function(){

var keys = document.querySelectorAll('#calc span');
var screenface = document.getElementById('screen');

var buttonclick = function(e){
  screenface.innerHTML = this.innerHTML;

};

for (var i=0; i<keys.length;i++){
  console.log(keys[i]);
  keys[i].addEventListener('click',buttonclick, false);
};

}
