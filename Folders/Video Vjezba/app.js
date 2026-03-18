// Pronalaženje elemenata btn i videa
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
 
// Dodavanje event listener-a
btn.addEventListener("click", function() {
      // Provjera da li btn već ima klasu "slide"
    if(!btn.classList.contains("slide")){
      // Dodavanje klase "slide" i pauziranje videa
      btn.classList.add("slide");
      video.pause()
    } else {
         // Uklanjanje klase "slide" i puštanje videa
         btn.classList.remove("slide");
         video.play();
    }
});
 
 
//Preloder funkcionalnost
const preloader = document.querySelector(".preloader");
 
//dodati EL na load prozora
 
window.addEventListener("load", function(){
  // //dodati klasu ''hide-preloader' za skrivanje
  // preloader.classList.add("hide-preloader");
 
  //preloder sa trajanjem od 5 milisekundi
 
  setTimeout(function () {
    preloader.classList.add("hide-preloader");
  }, 5000)
})
