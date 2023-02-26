
// for ham menu

const Ham_menu = document.getElementById('menu-icon');
const Close_icon = document.getElementById('close-icon');
const nav = document.getElementById('navlist');

if (Ham_menu) {
    Ham_menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (Close_icon) {
    Close_icon.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// for displaying cart page through cart btn

let cart_btn = document.getElementsByClassName('add-to-cart-icon');
console.log(cart_btn);
if (cart_btn) {
    for (i = 0; i < cart_btn.length; i++) {
        cart_btn[i].addEventListener("click", function () {
            window.location.href = "/html/cart.html";
        });
    }
}

// for removing cart items through bin icon

if (window.location.pathname == "/html/cart.html") {

    let binIcon = document.getElementsByClassName("fa-trash");
    let cartItems = document.getElementsByTagName("tr");
   
    for( let i=0; i < binIcon.length; i++){
    
        binIcon[i].addEventListener("click", function (){   

            cartItems[i+1].style.display="none";    

            if(getComputedStyle(cartItems[1]).display === "none" &&  getComputedStyle(cartItems[2]).display === "none" && getComputedStyle(cartItems[3]).display === "none"){
             total = 0;

            }  else if(getComputedStyle(cartItems[1]).display === "none" &&  getComputedStyle(cartItems[2]).display === "none"){
                total = 449;

            } else if(getComputedStyle(cartItems[1]).display === "none" &&  getComputedStyle(cartItems[3]).display === "none"){
                total = 699;

            }else if(getComputedStyle(cartItems[3]).display === "none" &&  getComputedStyle(cartItems[2]).display === "none"){
                total = 1499;

            }else if(getComputedStyle(cartItems[1]).display === "none" ){
                total = total-1499;

            }else if(getComputedStyle(cartItems[2]).display === "none" ){
                total = total-699;

            }else if(getComputedStyle(cartItems[3]).display === "none" ){
                total = total-449;

            }

            cartTotal.innerHTML=total;
            subTotal.innerHTML=total;
        });
        
    }
    
    // variables for calculating cart value

    let cartTotal = document.getElementById("total");
    let subTotal = document.getElementById("subtotal");
    let total = 2647;
  
}


// for displaying error page

let pro_box = document.getElementsByClassName('product');
if (pro_box) {
    for (i = 0; i < pro_box.length; i++) {
        if (pro_box[0].classList.contains('HRX')) {
            for (i = 1; i < pro_box.length; i++) {
                pro_box[i].addEventListener("click", function () {
                    window.location.href = "/html/oops.html";
                });
            }
        }
        else {
            pro_box[i].addEventListener("click", function () {
                window.location.href = "/html/oops.html";
            });
        }
    }
}
