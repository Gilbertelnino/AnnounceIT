const menu = document.querySelector('#menu');
const ul = document.querySelector('ul');
const exit = document.querySelector('.exit-btn');

const openMenu = ()=>{
    ul.classList.toggle('hide-mobile');
}
const closeMenu = ()=>{
    ul.classList.add('hide-mobile');
}
menu.addEventListener('click',openMenu);
exit.addEventListener('click',closeMenu)