let searchform=document.querySelector('.search');

document.querySelector('#search-btn').onclick=()=>
{
    searchform.classList.toggle('active');
    cart.classList.remove('active');
    log.classList.remove('active');
}
let cart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>
{
    cart.classList.toggle('active');
    searchform.classList.remove('active');
    log.classList.remove('active');
}
let log=document.querySelector('.login');

document.querySelector('#login-btn').onclick=()=>
{
    log.classList.toggle('active');
    cart.classList.toggle('active');
    searchform.classList.remove('active');
}

window.onscroll=()=>
{
    searchform.classList.remove('active');
    cart.classList.remove('active');
    log.classList.remove('active');
}



