window.onscroll=function() {sticky()};
var navbar=document.getElementById('nav');;
let top=navbar.offsetTop;
function sticky(){
    if(window.scrollY>=top){
        navbar.classList.add('stick');
    }
    else{
        navbar.classList.remove('stick');
    }
}
