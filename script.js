let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}


window.onscroll = () => {

    menu.classList.revmove('fa-times')
    navbar.classList.remove('active')

}




function a1(){
    window.scrollTo(0,800);
}

function a2(){
    window.scrollTo(0,1100);
}

function a3(){
    window.scrollTo(0,1400);
}

function a4(){
    window.scrollTo(0,1700);
}

function a5(){
    window.scrollTo(0,2000);
}





