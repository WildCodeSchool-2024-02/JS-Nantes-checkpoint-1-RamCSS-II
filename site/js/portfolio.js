//Step 1
const avatarImg = document.querySelector("#avatar-bis");

avatarImg.addEventListener("click", function () {
    avatarImg.src = "./image/avatar.svg"
})

// Step 2 and 3 and 4 and 5
// par soucis de temps, le bouton n'a pas le CSS attendu
const nameButton = document.querySelector("#name-button");

// color to replace : #750ff7
nameButton.addEventListener("click", function () {
    const sectionBackgroundColor = document.querySelectorAll(".pink-bg");
    const textColor = document.querySelectorAll(".pink-text");
    const linkColor = document.querySelectorAll(".nav-link");
    const newColor = prompt("Enter your color :");
    console.log("text rose :", textColor);
    console.log("Liens", linkColor);

    for (let i = 0; i <= sectionBackgroundColor.length; i++) {
        sectionBackgroundColor[i].style.backgroundColor = newColor;
    }

    for (let i = 0; i <= textColor.length; i++) {
        textColor[i].style.color = newColor;        // la couleur n'est pas prise en compte
    }

    for (let i = 0; i <= linkColor.length; i++) {
        linkColor[i].style.color = newColor;        // la couleur n'est pas prise en compte
    }
})


nameButton.addEventListener("click", function () {
    const firstName = document.querySelector("#firstname");
    const questionName = prompt("Enter your name :");

    firstName.innerHTML = questionName;
    firstName.style.color = "white";
})

// Step 6 
const modifyButton = document.querySelector("#modify-dev-tools");

modifyButton.addEventListener("click", function () {
    const liElements = document.querySelectorAll("#front-dev-tools>li");
    console.log("Liste outils", liElements);

    for (let i = 0; i <= liElements.length; i++) {
        liElements[0].innerHTML = "VS Code";
        liElements[1].innerHTML = "Github";
        liElements[2].innerHTML = "Terminal";
    }
})


// Try selecting the all li elements of list dev tool front.
// Then create a for loop to replace li elements with your list of dev tool front by creating a list with 3 elements like VSCode, Github, Terminal.