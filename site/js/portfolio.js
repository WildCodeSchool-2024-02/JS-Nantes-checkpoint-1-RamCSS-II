//Step 1
const avatarImg = document.querySelector("#avatar-bis");

avatarImg.addEventListener("click", function () {
    avatarImg.src = "./image/avatar.svg"
})

// Step 2 and 3 and 4
// par soucis de temps, le bouton n'a pas le CSS attendu
const nameButton = document.querySelector("#name-button");

// color to replace : #750ff7
nameButton.addEventListener("click", function () {
    const sectionBackgroundColor = document.querySelectorAll(".pink-bg");
    const textColor = document.querySelectorAll(".pink-text");
    const newColor = prompt("Enter your color :");
    console.log(textColor);

    for (let i = 0; i <= sectionBackgroundColor.length; i++) {
        sectionBackgroundColor[i].style.backgroundColor = newColor;
    }

    for (let i = 0; i <= textColor.length; i++) {
        textColor[i].style.color = newColor;        // la couleur n'est pas prise en compte
    }
})


nameButton.addEventListener("click", function () {
    const firstName = document.querySelector("#firstname");
    const questionName = prompt("Enter your name :");

    firstName.innerHTML = questionName;
    firstName.style.color = "white";
})