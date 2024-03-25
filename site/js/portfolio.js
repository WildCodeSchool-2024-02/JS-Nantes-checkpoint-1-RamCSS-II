// Step 1

const avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
    // not very clean, like not clean at all, it'll break at deployment.
    if (avatar.src == "http://127.0.0.1:5500/site/image/avatar-bis.png") {
        avatar.src = "./image/avatar.svg"
    } else {
        console.log("movement")
        avatar.src = "./image/avatar-bis.png";
    }
});



// Step 2 

const nameButton = document.getElementById("name-editor-button");
const firstname = document.getElementById("firstname");
const desciptionSection = document.querySelector(".description");
const elementsWithPinkBackground = document.querySelectorAll(".pink-bg");
const elementsWithPinkText = document.querySelectorAll(".pink-text");
const htmlLinks = document.querySelectorAll("a");



nameButton.addEventListener("click", () => {

    // i put a color as the default here for testing purposes.
    const customColor = prompt("enter a #color", "#750ff7");

    // part about the colors
    // section and footer
    for (let i=0; i<elementsWithPinkBackground.length;i++) {
       elementsWithPinkBackground[i].style.backgroundColor = customColor;
    }
    //titles
    for (let i=0; i<elementsWithPinkText.length;i++) {
        elementsWithPinkText[i].style.color = customColor;
     }
     //html links
     for (let i=0; i<htmlLinks.length;i++) {
        htmlLinks[i].style.color = customColor;
     }


    firstname.innerText = prompt("what's your name, kid ?", "Francis XV");
    firstname.style.color = "white";



})