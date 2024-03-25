const iconImg = document.querySelector('.avatar-img');
const firstname = document.querySelector('#firstname');
const btnName = document.querySelector('#btn-name');
const backColor = document.querySelector('.pink-bg');
const link = document.querySelectorAll('a');

const listOne = document.querySelector('#front-dev-tools');
const btnModify = document.querySelector('.btn-modify');

const listFirst = document.querySelector('#one');
const listSecond = document.querySelector('#two');
const listThirs = document.querySelector('#three');

const btnAdd = document.querySelector('.btn-add');
const listTwo = document.querySelector('#list-two');
const toolsAdd = document.querySelector('#tools');

console.log('valeur de src :',iconImg.src);
console.log('image recupérer ',iconImg);

iconImg.addEventListener('click', () => {
    
    if(iconImg.src=== "http://127.0.0.1:5500/JS-Nantes-checkpoint-1-RamCSS-II/site/image/avatar.svg" ){
    // le live server charge limage avec ip du server 
        iconImg.src="image/avatar-bis.png";
        console.log('je suis le if')
        
    }else{
        iconImg.src="image/avatar.svg";
        console.log('je suis le else')
    }
});

btnName.addEventListener('click', () =>{
    let linkColor = prompt("choicisez votre coleur pour les liens : ")
    let newColor = prompt("choicisez votre couleur : ")
    let newName = prompt("écrivez votre nom : ");
    console.log('j\'ai clicker');
    
    firstname.textContent = newName;
    firstname.style.color = "white";
    backColor.style.backgroundColor = newColor;
    link.forEach((a) =>{
        a.style.color = linkColor;
    });
    
    console.log('couleur de fond ',newColor);
});

btnModify.addEventListener('click', () =>{
    console.log('ici btnModify clicker ',btnModify)

    let one = prompt("choicisez votre 1e tools : ")
    let two = prompt("choicisez votre 2e tools : ")
    let three = prompt("choicisez votre 3e tools : ");
    console.log('click');

    listFirst.textContent = one;
    listSecond.textContent = two;
    listThirs.textContent = three;

});


btnAdd.addEventListener('click', () =>{
    console.log('ici btnModify clicker ',btnAdd)
    const li = document.createElement('li');
    li.textContent = toolsAdd.value ;
    listTwo.appendChild(li);
});
