
let avatar = document.getElementById("avatar");

avatar.addEventListener("click", function () {
    if (avatar.src === "image/avatar.svg") {
        avatar.src = "image/avatar-bis.png"
    } else {
        avatar.src = "image/avatar.svg"
    }
});
let modifyButton = document.getElementById("modifyButton");
modifyButton.addEventListener("click", () => {
    let newColor = prompt("Enter a color:");
    let userName = prompt("What's your name?");
    let firstNameSpan = document.getElementById("firstname")
    firstNameSpan.innerHTML = userName;
    firstNameSpan.style.color = "white";
    let pinkh4s = document.querySelectorAll(".pink-text");

    pinkh4s.forEach((item) => {
        item.style.color = "#750ff7"
    })
    let pinkSections = document.querySelectorAll(".pink-bg");
    pinkSections.forEach((section) => {
        section.style.backgroundColor = "#750ff7"
    })
    let purpleLinks = document.querySelectorAll(".navLink");
    purpleLinks.forEach((link) => {
        link.style.color = "#750ff7"
    })


});



