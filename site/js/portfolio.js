const image = document.getElementById('avatar');

image.addEventListener('click', function() {
    if (image.src.endsWith('avatar-bis.png')) {
        image.src = '/site/image/avatar.svg';
    } else if (image.src.endsWith('avatar.svg')) {
        image.src = '/site/image/avatar-bis.png';
    }
});

const bouton = document.getElementById('name-change');
const nom = document.getElementById('firstname');

bouton.addEventListener('click', function() {
    const couleurFond = prompt("Entrez une couleur de fond (en hexadécimal #750ff7) :");
    if (couleurFond !== null && couleurFond.trim() !== "") {
        document.documentElement.style.setProperty('--lightWildColor', couleurFond);
        const menuElement = document.querySelector(".menu");
        if (menuElement) {
            menuElement.style.color = couleurFond; //ça marche pas :-(
        }
        const nouveauNom = prompt("Entrez votre nom :");
        if (nouveauNom !== null && nouveauNom.trim() !== "") {
            nom.textContent = nouveauNom;
            nom.style.color = 'white';
        }
    }
});
