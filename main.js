var t = document.getElementById('t');
var m = document.getElementById('m');
var b = document.getElementById('b');
var nav = document.getElementById('navlink');
var html = document.getElementById('htmlscroll');
var backToTop = document.getElementById("back-to-top");

function toggle() {   
    if (window.innerWidth <= '850') {
        nav.classList.toggle('appear');
        html.classList.toggle('scroll');
        t.classList.toggle('toggleT');
        m.classList.toggle('toggleM');
        b.classList.toggle('toggleB');
    }
}

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if(window.pageYOffset > 300){
    backToTop.style.display = "flex";
  }
  else {
    backToTop.style.display = "none";
  }
}

  




