let orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("ordersContainer");

function renderOrders() {
  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders yet 🥲</p>";
    return;
  }

  orders.reverse().forEach(order => {
    let itemsHTML = "";

    order.items.forEach(i => {
      itemsHTML += `<li>${i.name} × ${i.qty} = ₹${i.price * i.qty}</li>`;
    });

    container.innerHTML += `
      <div class="order-card">
        <h3>Order #${order.id}</h3>
        <p>📅 ${order.date}</p>
        <p>💳 Payment: ${order.payment}</p>

        <ul>${itemsHTML}</ul>

        <h4>Total: ₹${order.total}</h4>
      </div>
    `;
  });
}

renderOrders();