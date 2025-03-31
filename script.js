console.log("Canteen Buddy is running!");
let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.item} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalPriceElement.textContent = totalPrice;
}

function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Order placed! Total: ₹${totalPrice}`);
    cart = [];
    totalPrice = 0;
    updateCart();
  }
}