imgClickAndChange.addEventListener("click", function () {

    if (document.getElementById("imgClickAndChange").src == "./image/avatar-bis.png") {
        document.getElementById("imgClickAndChange").src = "./image/avatar.svg";
    }
    else {
        document.getElementById("imgClickAndChange").src = "./image/avatar-bis.png";
    }

});


// si on clique sur l'image :
//  on vérifie que l'image est bien l'avatar .png
//  dans ce cas on change en avatar.svg
//
// sinon , vu que c'est pas .png, c'est forcément l'autre (.svg)
// Dans ce cas on remet le .png
