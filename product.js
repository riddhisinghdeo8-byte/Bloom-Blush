let products = JSON.parse(localStorage.getItem("products")) || [];

let params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id"));

let product = products.find(p => p.id === id);

const container = document.getElementById("productDetail");

if (product) {

    container.innerHTML = `
        <div class="product-box">

            <img src="${product.image}" width="300">

            <h1>${product.name}</h1>

            <p>⭐ ${product.rating}</p>

            <p class="price">
                ₹${product.price}
                <del>₹${product.discount}</del>
            </p>

            <p class="desc">
                Premium quality beauty product from Bloom & Blush.
                Perfect for your daily beauty routine ✨
            </p>

            <button onclick="addToCart()">Add to Cart 🛒</button>

            <button onclick="addToWishlist()">❤️ Wishlist</button>

        </div>
    `;
}

function addToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.qty++;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            rating: product.rating,
            qty: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart 🛒");
}

function addToWishlist() {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(product.id)) {

        wishlist.push(product.id);

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist ❤️");
}