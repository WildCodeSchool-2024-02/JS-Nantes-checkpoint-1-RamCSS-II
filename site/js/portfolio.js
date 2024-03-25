//on attend que le Dom soit chargé
document.addEventListener("DOMContentLoaded", (event) => {

    //changement d'image au clic
    const avatar = document.getElementById("avatar");

    let toggleState = true;
    avatar.addEventListener("click", function () {
        //si c'est l'image de base on change
        if (toggleState) {
            avatar.src = "./image/avatar.svg";
        }else{
            avatar.src = "./image/avatar-bis.png";
        }
        toggleState = !toggleState;

    });

    //changement de nom au clic
    const nameDevelopper = document.getElementById("firstname");
    nameDevelopper.addEventListener("click", function () {

        //on affiche le prompt
        let resultName = window.prompt("Enter your Name");
        //on applique la class pour changer la couleur du texte
        nameDevelopper.classList.add("white");
        nameDevelopper.innerHTML = resultName;

        //bloc de description
        // const description = document.querySelector(".description");
        // description.classList.replace("pink-bg", "purple-bg");

        //tous les background
        const allBackground = document.querySelectorAll(".pink-bg");
        allBackground.forEach(element => {
            element.classList.replace("pink-bg", "purple-bg");
        });
       
        //tous les colors
        const allTitles = document.querySelectorAll(".pink-text");
        allTitles.forEach(element => {
            element.classList.replace("pink-text", "purple");
        });

        //tous les links a
        const allLinks = document.querySelectorAll("a");
        allLinks.forEach(element => {
            element.classList.add("purple");
        });
          

    });
    //changement de nom au clic
    const btnChange = document.getElementById("btn_change");
    const listDevTools = document.getElementById("front-dev-tools");

    btnChange.addEventListener("click", function () {
        listDevTools.innerHTML = "<li>Php</li><li>Js</li><li>Ajax</li>"
    });


});