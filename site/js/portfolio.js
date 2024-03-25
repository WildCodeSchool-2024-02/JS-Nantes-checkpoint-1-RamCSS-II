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



nameButton.addEventListener("click", () => {

    // i put a color as the default here for testing purposes.
    desciptionSection.style.backgroundColor =prompt("enter a #color","#750ff7");
    desciptionSection.classList.remove("pink-bg");
    firstname.innerText = prompt("what's your name, kid ?");
    firstname.style.color = "white";



})