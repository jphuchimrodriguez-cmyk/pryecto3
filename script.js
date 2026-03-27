function bodyLoad{
  document.getElementById("btn").style.fontsize ="15px"; 
  document.getElementById("btn").style.backgroundColor ="darkred"; 
  document.getElementByıd("btn").style.borderRadius="20px"; 
  document.getElementById("btn").style.color="white"; 
  document.getElementById("btn").style.padding="10px";
  document.getElementById("btn").style.borderStyle="dotted"; 
}
function changeTheme(){
   document.getElementById("body").style.backgroundColor="white";
   document.getElementById("nameheading").style.backgroundColor="darkorange";
   document.getElementById("anchorTag").style.color="darkblue";
   document.getElementById("anchorTag").style.borderWidth="0px";
} 
function changeImageOver(){
  document.getElementById("cartoon_img").src="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";
}
function changeImageLeave(){
  document.getElementById("cartoon_img").src="https://i.pinimg.com/originals/40/f2/42/40f242175a71e3b62fe717cad80e0cae.gif";
}