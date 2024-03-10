// Récupérez le bouton "Contactez-nous"
var btn = document.querySelector(".button.contact");

// Récupérez l'élément de la fenêtre modale
var modal = document.getElementById("modal");

// Récupérez le bouton de fermeture
var span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrez la fenêtre modale 
btn.onclick = function() {
  modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur <span> (x), fermez la fenêtre modale
span.onclick = function() {
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de la fenêtre modale, fermez-la


// Récupérer la fenêtre modale
var modal2 = document.getElementById("modal2");
    
// Récupérer le bouton qui ferme la fenêtre modale
var btnClose2 = document.querySelector(".close2");

// Fonction pour ouvrir la deuxième fenêtre modale
function openModal2() {
    modal.style.display = "none";
    modal2.style.display = "block";
}

// Fonction pour fermer la deuxième fenêtre modale
function closeModal2() {
var modal2 = document.getElementById('modal2');
modal2.style.display = "none";
}

