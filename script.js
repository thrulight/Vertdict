//Animation nav bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}

//Navigation bar mobile version
function openNav() {
   document.getElementById("nav-bar-mobile").style.display= "flex";
   document.getElementById("icon").style.display= "none";
   document.getElementById("overlay").style.width= "100%";
   document.getElementById("X").style.display= "flex";
}
function closeNav() {
   document.getElementById("nav-bar-mobile").style.display= "none";
   document.getElementById("icon").style.display= "flex";
   document.getElementById("overlay").style.width= "0%";
   document.getElementById("X").style.display= "none";
}