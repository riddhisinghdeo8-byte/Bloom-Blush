function showPage(page) {
    let sections = document.querySelectorAll(".page");
    sections.forEach(s => s.classList.remove("active"));

    let current = document.getElementById(page);
    if (current) {
        current.classList.add("active");
    }
}

function showCart() {
    window.location.href = "cart.html";
}

/* SAMPLE PRODUCTS */

let products = [
    {
        name: "Lipstick",
        price: 499,
        image: "images/lipstick.jpg"
    },
    {
        name: "Face Serum",
        price: 799,
        image: "images/serum.jpg"
    },
    {
        name: "Brush Set",
        price: 999,
        image: "images/brush.jpg"
    }
];

let productBox = document.getElementById("products");

if (productBox) {

    products.forEach(p => {

        let div = document.createElement("div");

        div.innerHTML = `
            <img src="${p.image}" width="180">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>

            <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">
                Add to Cart
            </button>
        `;

        productBox.appendChild(div);

    });

}

function addToCart(name, price, image, shade = "") {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item =>
        item.name === name &&
        item.shade === shade
    );

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            shade: shade,
            qty: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

let user = JSON.parse(localStorage.getItem("user"));

if (
    localStorage.getItem("loggedIn") === "true" &&
    user &&
    document.getElementById("accountLink")
) {
    document.getElementById("accountLink").innerHTML = "👤 " + user.name;
}