// load cart + products
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const summary = document.getElementById("summary");
const totalBox = document.getElementById("total");

let total = 0;

cart.forEach(item => {
  let p = products.find(x => x.id === item.id);
  if (!p) return;

  let cost = p.price * item.qty;
  total += cost;

  summary.innerHTML += `
    <p>${p.name} × ${item.qty} = ₹${cost}</p>
  `;
});

totalBox.innerText = "Total: ₹" + total;

function payNow() {
  let selected = document.querySelector('input[name="pay"]:checked');

  if (!selected) {
    alert("Please select payment method");
    return;
  }

  if (selected.value === "upi") {
    let upi = document.getElementById("upiId").value;
    if (!upi) {
      alert("Enter UPI ID");
      return;
    }
  }

  if (selected.value === "card") {
    let name = document.getElementById("cardName").value;
    let number = document.getElementById("cardNumber").value;
    let exp = document.getElementById("expDate").value;
    let cvv = document.getElementById("cvv").value;

    if (!name || !number || !exp || !cvv) {
      alert("Fill all card details");
      return;
    }
  }

  // save order
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let items = [];
  let total = 0;

  cart.forEach(item => {
    let p = products.find(x => x.id === item.id);
    if (!p) return;

    total += p.price * item.qty;

    items.push({
      name: p.name,
      qty: item.qty,
      price: p.price
    });
  });

  orders.push({
    id: Date.now(),
    items,
    total,
    method: selected.value.toUpperCase(),
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Payment Successful 🎉 Order Placed!");

  window.location.href = "success.html";
}
function showPay(type) {
  document.getElementById("upiBox").style.display = type === "upi" ? "block" : "none";
  document.getElementById("cardBox").style.display = type === "card" ? "block" : "none";

}
let discount = 0;

function applyCoupon() {

    let code = document
        .getElementById("couponCode")
        .value
        .trim()
        .toUpperCase();

    let subtotal = Number(document
        .getElementById("subtotal")
        .dataset.amount);

    if (code === "WELCOME10") {

        discount = subtotal * 0.10;

    }

    else if (code === "BLOOM20") {

        discount = subtotal * 0.20;

    }

    else if (code === "FIRST50") {

        discount = 50;

    }

    else {

        discount = 0;

        document.getElementById("couponMessage").innerHTML =
            "❌ Invalid Coupon";

        updateTotal();

        return;
    }

    document.getElementById("couponMessage").innerHTML =
        "✅ Coupon Applied!";

    updateTotal();

}