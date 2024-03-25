let i=0;
function changepicture(){
    if(i===0){
    document.querySelector('#changepic').setAttribute('src','image/avatar.svg');i=1;
    }else{
        document.querySelector('#changepic').setAttribute('src','image/avatar-bis.png');i=0;
    }
}
function changename(){
    let name=prompt('enter name','');
    let color=prompt('enter color','');
    document.querySelector('#firstname').style.color='white';
    document.querySelector('#firstname').innerHTML=name;

    document.querySelector('.pink-bg').style.style.backgroundColor=color;
}