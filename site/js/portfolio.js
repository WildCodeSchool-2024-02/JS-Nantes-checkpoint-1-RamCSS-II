const changeAvatar = document.getElementById('avatar-img');

// Changement d'image après un clic sur l'avatar

changeAvatar.addEventListener('click', function() {
    changeAvatar.src = "site\image\avatar.svg";
});


// Changement de nom

const nameChange = document.getElementById('firstname');

function openPrompt() {
const userName = prompt("What's your name? :");

nameChange.innerHTML = userName;
nameChange.style.color = "white";
}

