const imgAvatar = document.querySelector('.img-avatar');

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "./image/avatar.svg";
});


const textName = document.querySelector('#firstname');

textName.addEventListener('click', function () {
    textName.innerHTML = "Théo";
    textName.style.color = "white";
});

const button = document.querySelector('button');

button.addEventListener('click', function () {
    const userInput = prompt('Please chose your hexadecimal color :');
    document.getElementsByClassName('purple-bg').className = 'pink-bg';
})

// DOM non terminé
