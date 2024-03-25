// Step 1

const avatar=document.getElementById("avatar");

avatar.addEventListener("click",()=>{  
    // not very clean, like not clean at all, it's break at deployment.
    if (avatar.src == "http://127.0.0.1:5500/site/image/avatar-bis.png"){
    avatar.src = "./image/avatar.svg"
} else {
    console.log("movement")
    avatar.src ="./image/avatar-bis.png";
}});



