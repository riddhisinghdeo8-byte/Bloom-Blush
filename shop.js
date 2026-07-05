if(localStorage.getItem("loggedIn")!="true"){

alert("Please login first 🔐");

window.location.href="auth.html";

}
// ===============================
// 💄 PRODUCT DATABASE (60 ITEMS)
// ===============================

const products = [
  // ================= MAKEUP (20)
  { id: 1, name: "Lipstick", category: "makeup", price: 499, discount: 699, rating: 4.5,image:"images/matte-lipstick.jpg" },
  { id: 2, name: "Liquid Foundation", category: "makeup", price: 899, discount: 1299, rating: 4.7,image:"images/liquid-foundation.jpg" },
  { id: 3, name: "Compact Powder", category: "makeup", price: 399, discount: 599, rating: 4.3,image:"images/compact-powder.jpg" },
  { id: 4, name: "Kajal Pencil", category: "makeup", price: 199, discount: 299, rating: 4.6,image:"images/kajal-pencil.jpg" },
  { id: 5, name: "Blush Palette", category: "makeup", price: 699, discount: 999, rating: 4.4,image:"images/blush-palette.jpg" },
  { id: 6, name: "Highlighter Stick", category: "makeup", price: 549, discount: 799, rating: 4.5,image:"images/highlighter-stick.jpg" },
  { id: 7, name: "Eyeliner Pen", category: "makeup", price: 249, discount: 399, rating: 4.2,image:"images/eyeliner-pen.jpg" },
  { id: 8, name: "Eyeshadow Palette", category: "makeup", price: 999, discount: 1499, rating: 4.8,image:"images/eyeshadow-palette.jpg" },
  { id: 9, name: "BB Cream", category: "makeup", price: 299, discount: 499, rating: 4.1,image:"images/bb-cream.jpg" },
  { id: 10, name: "CC Cream", category: "makeup", price: 349, discount: 599, rating: 4.3,image:"images/cc-cream.jpg" },
  { id: 11, name: "Makeup Primer", category: "makeup", price: 599, discount: 899, rating: 4.6,image:"images/makeup-primer.jpg" },
  { id: 12, name: "Setting Spray", category: "makeup", price: 649, discount: 999, rating: 4.4,image:"images/setting-spray.jpg" },
  { id: 13, name: "Lip Gloss", category: "makeup", price: 299, discount: 499, rating: 4.2,image:"images/lip-gloss.jpg" },
  { id: 14, name: "Cream Blush", category: "makeup", price: 449, discount: 699, rating: 4.3,image:"images/cream-blush.jpg" },
  { id: 15, name: "Contour Kit", category: "makeup", price: 799, discount: 1199, rating: 4.6,image:"images/contour-kit.jpg" },
  { id: 16, name: "Makeup Sponge", category: "makeup", price: 199, discount: 299, rating:4.5,image:"images/makeup-sponge.jpg" },
  { id: 17, name: "Brow Pencil", category: "makeup", price: 249, discount: 399, rating: 4.2,image:"images/brow-pencil.jpg" },
  { id: 18, name: "Lip Liner", category: "makeup", price: 199, discount: 299, rating: 4.3,image:"images/lip-liner.jpg" },
  { id: 19, name: "Mascara", category: "makeup", price: 399, discount: 599, rating: 4.5,image:"images/mascara.jpg" },

  { id: 20, name: "Makeup Brush Set", category: "makeup", price: 999, discount: 1499, rating: 4.7,image:"images/makeup-brush-set.jpg" },

  // ================= SKINCARE (20)
  { id: 21, name: "Face Cleanser", category: "skincare", price: 299, discount: 499, rating: 4.4, image:"images/face-cleanser.jpg" },
  { id: 22, name: "Vitamin C Serum", category: "skincare", price: 799, discount: 1199, rating: 4.8, image:"images/vitamin-c-serum.jpg" },
  { id: 23, name: "Hyaluronic Acid Serum", category: "skincare", price: 899, discount: 1299, rating: 4.7, image:"images/hyaluronic-acid-serum.jpg" },
  { id: 24, name: "Face Moisturizer", category: "skincare", price: 499, discount: 799, rating: 4.5, image:"images/face-moisturizer.jpg" },
  { id: 25, name: "Sunscreen SPF 50", category: "skincare", price: 599, discount: 999, rating: 4.6, image:"images/sunscreen-spf-50.jpg" },
  { id: 26, name: "Night Cream", category: "skincare", price: 699, discount: 1099, rating: 4.5, image:"images/night-cream.jpg" },
  { id: 27, name: "Face Toner", category: "skincare", price: 399, discount: 699, rating: 4.3,image:"images/face-toner.jpg" },
  { id: 28, name: "Face Mask Pack", category: "skincare", price: 299, discount: 499, rating: 4.4, image:"images/face-mask-pack.jpg" },
  { id: 29, name: "Retinol Serum", category: "skincare", price: 999, discount: 1499, rating: 4.8, image:"images/retinol-serum.jpg" },
  { id: 30, name: "Under Eye Cream", category: "skincare", price: 549, discount: 899, rating: 4.5, image:"images/under-eye-cream.jpg" },
  { id: 31, name: "Aloe Vera Gel", category: "skincare", price: 199, discount: 299, rating: 4.2, image:"images/aloe-vera-gel.jpg" },
  { id: 32, name: "Charcoal Face Wash", category: "skincare", price: 249, discount: 399, rating: 4.3, image:"images/charcoal-face-wash.jpg" },
  { id: 33, name: "Face Scrub", category: "skincare", price: 349, discount: 599, rating: 4.4, image:"images/face-scrub.jpg" },
  { id: 34, name: "Lip Balm", category: "skincare", price: 149, discount: 249, rating: 4.6,image:"images/lip-balm.jpg" },
  { id: 35, name: "Sheet Masks", category: "skincare", price: 199, discount: 349, rating: 4.5,image:"images/sheet-masks.jpg" },
  { id: 36, name: "Skin Brightening Serum", category: "skincare", price: 899, discount: 1399, rating: 4.7, image:"images/skin-brightening-serum.jpg" },
  { id: 37, name: "Anti Acne Gel", category: "skincare", price: 399, discount: 699, rating: 4.4, image:"images/anti-acne-gel.jpg" },
  { id: 38, name: "Face Oil", category: "skincare", price: 599, discount: 999, rating: 4.6, image:"images/face-oil.jpg" },
  { id: 39, name: "Rose Water Toner", category: "skincare", price: 199, discount: 299, rating: 4.3, image:"images/rose-water-toner.jpg" },
  { id: 40, name: "Peel Off Mask", category: "skincare", price: 299, discount: 499, rating: 4.2, image:"images/peel-off-mask.jpg" },

  // ================= BEAUTY TOOLS (20)
  { id: 41, name: "Makeup Brush Set Pro", category: "tools", price: 999, discount: 1499, rating: 4.7, image:"images/makeup-brush-set-pro.jpg" },
  { id: 42, name: "Beauty Blender Pack", category: "tools", price: 299, discount: 499, rating: 4.5, image:"images/beauty-blender-pack.jpg" },
  { id: 43, name: "Eyelash Curler", category: "tools", price: 199, discount: 299, rating: 4.4, image:"images/eyelash-curler.jpg" },
  { id: 44, name: "Tweezers Set", category: "tools", price: 149, discount: 249, rating: 4.3, image:"images/tweezers-set.jpg" },
  { id: 45, name: "Face Roller", category: "tools", price: 499, discount: 799, rating: 4.6, image:"images/face-roller.jpg" },
  { id: 46, name: "Gua Sha Stone", category: "tools", price: 399, discount: 699, rating: 4.5, image:"images/gua-sha-stone.jpg" },
  { id: 47, name: "Makeup Organizer", category: "tools", price: 699, discount: 1099, rating: 4.4, image:"images/makeup-organizer.jpg" },
  { id: 48, name: "Hair Straightener Brush", category: "tools", price: 1499, discount: 1999, rating: 4.7, image:"images/hair-straightener-brush.jpg" },
  { id: 49, name: "Hair Dryer", category: "tools", price: 1299, discount: 1799, rating: 4.6, image:"images/hair-dryer.jpg" },
  { id: 50, name: "Makeup Mirror LED", category: "tools", price: 899, discount: 1299, rating: 4.5, image:"images/makeup-mirror-led.jpg" },
  { id: 51, name: "Nail Cutter Set", category: "tools", price: 199, discount: 299, rating: 4.3, image:"images/nail-cutter-set.jpg" },
  { id: 52, name: "Facial Steamer", category: "tools", price: 999, discount: 1499, rating: 4.6, image:"images/facial-steamer.jpg" },
  { id: 53, name: "Blackhead Remover Tool", category: "tools", price: 149, discount: 249, rating: 4.2, image:"images/blackhead-remover-tool.jpg" },
  { id: 54, name: "Makeup Palette Mixing Plate", category: "tools", price: 249, discount: 399, rating: 4.4, image:"images/makeup-palette-mixing-plate.jpg" },
  { id: 55, name: "Hair Curling Wand", category: "tools", price: 1199, discount:999, rating: 4.5, image:"images/hair-curling-wand.jpg" },
  { id: 56, name: "Facial Cleansing Brush", category: "tools", price: 699, discount: 999, rating: 4.6, image:"images/facial-cleansing-brush.jpg" },
  { id: 57, name: "Skin Analyzer Device", category: "tools", price: 1499, discount: 1999, rating: 4.6, image:"images/skin-analyzer-device.jpg" },
  { id: 58, name: "Makeup Cleaning Brush", category: "tools", price: 299, discount: 499, rating: 4.4, image:"images/makeup-cleaning-brush.jpg" },
  { id: 59, name: "Travel Makeup Bag", category: "tools", price: 399, discount: 699, rating: 4.5, image:"images/travel-makeup-bag.jpg" },
  { id: 60, name: "LED Face Mask", category: "tools", price: 1999, discount: 2999, rating: 4.8, image:"images/led-face-mask.jpg" }
];


// ===============================
// 🛒 CART + WISHLIST STORAGE
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// ===============================
// 📦 RENDER PRODUCTS
// ===============================

const container = document.getElementById("productContainer");

  function renderProducts(list){

    container.innerHTML="";

    list.forEach(p=>{

        container.innerHTML +=`

        <div class="card" onclick="openProduct(${p.id})">

        <img src="${p.image}" alt="${p.name}" class="product-img">

            <h3>${p.name}</h3>

            <p>⭐ ${p.rating}</p>

            <p>₹${p.price}
            <del>₹${p.discount}</del></p>

            <button onclick="event.stopPropagation();addToCart(${p.id})">
            Add to Cart 🛒
            </button>

            <button onclick="event.stopPropagation();toggleWishlist(${p.id})">
            ❤️ Wishlist
            </button>

        </div>

        `;

    });

}

function openProduct(id){

    window.location.href="product.html?id="+id;

}


// ===============================
// 🛒 CART FUNCTION
// ===============================
 function addToCart(id) {

    let product = products.find(p => p.id === id);

    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.id === id);

    if (existing) {

        existing.qty += 1;

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

    updateCounts();

    if (confirm("Added to cart 🛒\nGo to cart now?")) {
        window.location.href = "cart.html";
    }

}

// ===============================
// ❤️ WISHLIST FUNCTION
// ===============================

function toggleWishlist(id) {
  let index = wishlist.indexOf(id);

  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateCounts();
}


// ===============================
// 🔢 UPDATE COUNTS
// ===============================

function updateCounts() {
  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("wishlistCount").innerText = wishlist.length;
}


// ===============================
// 🔍 SEARCH + FILTER + SORT
// ===============================

document.getElementById("searchBar").addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("sortPrice").addEventListener("change", filterProducts);

function filterProducts() {
  let search = document.getElementById("searchBar").value.toLowerCase();
  let category = document.getElementById("categoryFilter").value;
  let sort = document.getElementById("sortPrice").value;

  let filtered = products.filter(p => {
    return (
      p.name.toLowerCase().includes(search) &&
      (category === "all" || p.category === category)
    );
  });

  if (sort === "lowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "highLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}


// ===============================
// 🚀 INIT PAGE
// ===============================

renderProducts(products);
updateCounts();
localStorage.setItem("products", JSON.stringify(products));