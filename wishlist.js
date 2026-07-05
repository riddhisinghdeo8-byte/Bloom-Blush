let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderWishlist() {
  const container = document.getElementById("wishlistContainer");
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<p>No items in wishlist 💔</p>";
    return;
  }

  wishlist.forEach(id => {
    let product = products.find(p => p.id === id);
    if (!product) return;

    container.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>⭐ ${product.rating}</p>
        <p>💰 ₹${product.price} <del>₹${product.discount}</del></p>

        <button onclick="addToCart(${product.id})">Add to Cart 🛒</button>
        <button onclick="removeFromWishlist(${product.id})">Remove ❤️</button>
      </div>
    `;
  });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(i => i !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find(p => p.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

renderWishlist();