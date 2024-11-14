// Sélectionne le carré et le paragraphe du message
const carreRouge = document.getElementById("carre-rouge");
const message = document.getElementById("message");

// Ajoute un événement de clic au carré
carreRouge.addEventListener("click", function() {
    // Affiche le message dans le paragraphe
    message.textContent = "Bravo ! Tu sais cliquer sur un carré rouge :)";
});
