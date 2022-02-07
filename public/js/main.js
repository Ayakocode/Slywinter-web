const loader = document.querySelector(".loader")

$('.burger_nav_toggle').click(function(e){
  e.preventDefault();
  $('.m-title-right').toggleClass('toggle-open');
  $('.burger_nav_toggle').toggleClass('toggle-open');
  $('.box-slybot-img').toggleClass('toggle-open');
  $('.box-menu-bot').toggleClass('toggle-open');

})
var loaderStart;

function loaderFunction() {
    loaderStart = setTimeout(affichagePage, 1501);
  }
  
  function affichagePage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
  }


