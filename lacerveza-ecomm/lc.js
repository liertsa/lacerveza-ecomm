// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
        window.onload = function(){
            setTimeout(function(){
                popup.style.display = "block"
            }, 45000)
        }
        close.addEventListener('click', () => {
            popup.style.display = "none"
        })

//GATEPASS :(
function myFunction() {
    alert("");
  }
  if (confirm("Are you 18 and above?")) {
      txt = "You pressed OK!";
  } else {
      txt = "You pressed Not YET!";
 }




// n is number of stars required
