/*
const openModal = document.querySelector(".btn modal-btn");
const myModal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
    myModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    myModal.style.display = "none";
});
*/

//odaberi što ti treba
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn");
 
//dodaj EL za add i remove nešto s classliste
modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal")
})
closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal")
})
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("load", function(){
    setTimeout(function () {
        modal.classList.remove("open-modal");
    },5000);
});
