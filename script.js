function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

if (window.location.pathname.includes("cart.html")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = `Total: ₹${total}`;
}
