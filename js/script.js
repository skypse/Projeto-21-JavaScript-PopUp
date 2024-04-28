// Escopo global
let popup = document.getElementById('popup');

// função que abre o popup
function openPopup(){
  popup.classList.add("open-popup");
}

// função fecha o popup
function closePopup(){
    popup.classList.remove('open-popup');
}