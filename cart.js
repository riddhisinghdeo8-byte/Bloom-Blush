let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

function displayCart(){

    cartItems.innerHTML="";

    if(cart.length===0){

        cartItems.innerHTML=`
        <div style="text-align:center;padding:60px;background:white;border-radius:20px;">

            <h2>Your Cart is Empty 🛍️</h2>

            <p>Looks like you haven't added any products yet.</p>

            <br>

            <a href="shop.html"
            style="
            background:#B76E79;
            color:white;
            padding:15px 35px;
            text-decoration:none;
            border-radius:40px;">
            Continue Shopping
            </a>

        </div>
        `;

        subtotal.innerText="₹0";
        total.innerText="₹0";
        return;
    }

    let grandTotal=0;

    cart.forEach((item,index)=>{

        let qty=item.qty||1;

        let price=Number(item.price)||0;

        grandTotal+=price*qty;

        cartItems.innerHTML+=`

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="product-details">

                <h3>${item.name}</h3>

                ${item.shade ? `<p><b>Shade:</b> ${item.shade}</p>` : ""}

                <p class="price">₹${price}</p>

                <div class="qty">

                    <button onclick="changeQty(${index},-1)">−</button>

                    <span>${qty}</span>

                    <button onclick="changeQty(${index},1)">+</button>

                </div>

            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>

        </div>

        `;
    });

    subtotal.innerText="₹"+grandTotal;

    let finalTotal=grandTotal-100;

    if(finalTotal<0){

        finalTotal=0;

    }

    total.innerText="₹"+finalTotal;

    localStorage.setItem("cart",JSON.stringify(cart));

}

// ===============================
// ➕ CHANGE QUANTITY
// ===============================

function changeQty(index, change){

    cart[index].qty += change;

    if(cart[index].qty <= 0){
        cart.splice(index,1);
    }

    displayCart();
}


// ===============================
// ❌ REMOVE PRODUCT
// ===============================

function removeItem(index){

    if(confirm("Remove this product from cart?")){
        cart.splice(index,1);
        displayCart();
    }

}


// ===============================
// 🎁 APPLY COUPON
// ===============================

let couponApplied = false;

function applyCoupon(){

    const coupon = document.getElementById("coupon").value.trim().toUpperCase();

    if(coupon === "BLOOM20" && !couponApplied){

        couponApplied = true;

        let currentTotal = Number(total.innerText.replace("₹",""));

        let discount = currentTotal * 0.20;

        total.innerText = "₹" + Math.round(currentTotal - discount);

        alert("🎉 Coupon Applied! 20% OFF");

    }

    else if(couponApplied){

        alert("Coupon already applied.");

    }

    else{

        alert("Invalid Coupon Code!");

    }

}


// ===============================
// 💳 CHECKOUT
// ===============================

document.querySelector(".checkout-btn").addEventListener("click",function(){

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    window.location.href="checkout.html";

});


// ===============================
// 🚀 LOAD CART
// ===============================

displayCart();