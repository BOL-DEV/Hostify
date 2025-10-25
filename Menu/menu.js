const menuCard = document.querySelector(".menu-items");
const filterAll = document.querySelector(".menu_filter-all");
const filterFood = document.querySelector(".menu_filter-food");
const filterDrink = document.querySelector(".menu_filter-drink");

const menu = [
  {
    name: "Jollof Rice",
    title: "Classic Nigerian rice cooked in spicy tomato sauce",
    type: "Food",
    amount: "₦2,500",
    image:
      "https://images.unsplash.com/photo-1653981608672-aea09b857b20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Fried Rice & Chicken",
    title: "Golden fried rice served with crispy fried chicken",
    type: "Food",
    amount: "₦3,200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UuG6anrb9H_bbIsfmKta7qTCWJVKC4ga8hFdByyUsEcxjlxcgPU-FE5xaJoJpWgH2pE&usqp=CAU",
  },
  {
    name: "Amala & Ewedu Soup",
    title: "Soft amala with rich ewedu and assorted meat",
    type: "Food",
    amount: "₦2,800",
    image: "https://allnigerianfoods.com/wp-content/uploads/yoruba-foods1.jpg",
  },
  {
    name: "Pounded Yam & Egusi Soup",
    title: "Smooth pounded yam with thick melon seed soup",
    type: "Food",
    amount: "₦3,000",
    image:
      "https://kscuisine.com/wp-content/uploads/2019/10/egusi-soup-i-500x500.jpeg",
  },
  {
    name: "Efo Riro & Rice",
    title: "Steamed rice served with rich spinach stew",
    type: "Food",
    amount: "₦2,700",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyX5YWAaCO4UeRDvpFmetcTDTBGXYv8QXeA&s",
  },
  {
    name: "Suya",
    title: "Grilled spicy beef skewers with onions and pepper",
    type: "Food",
    amount: "₦1,200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw60s_HWGVCQanwGx5Gfny2YJ3cLWRCzCOuQ&s",
  },
  {
    name: "Zobo Drink",
    title: "Chilled hibiscus drink with pineapple flavor",
    type: "Drink",
    amount: "₦500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0vHjai5Xau6TfFrIDxvd5C9_Np1dsttw7A&s",
  },
  {
    name: "Chapman",
    title: "Refreshing mix of soda, fruit juice, and bitters",
    type: "Drink",
    amount: "₦800",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KMnbCnIJScwg2eAQXOfxc910YCjJzv01Gg&s",
  },
  {
    name: "Palm Wine",
    title: "Traditional sweet-tasting palm sap drink",
    type: "Drink",
    amount: "₦1,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy88j7TIq-pqYTmy5l3JkY2rHu6Hj1vUBMmQ&s",
  },
];

const displayMenu = (item) =>
  (menuCard.innerHTML += `
    <div class="menu_card">
     <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.title}</p>
      <h5>${item.type}</h5>
      <h4>${item.amount}</h4>
      <button class="add-to-cart" data-name="${item.name}">Add to cart</button>
    </div>
  `);

filterMenu("All");

function filterMenu(type) {
  menuCard.innerHTML = "";
  const filteredMenu = menu.filter(
    (item) => item.type === type || type === "All"
  );
  filteredMenu.forEach((item) => {
    displayMenu(item);
  });

  if (type === "All") {
    filterAll.classList.add("active");
    filterFood.classList.remove("active");
    filterDrink.classList.remove("active");
  } else if (type === "Food") {
    filterAll.classList.remove("active");
    filterFood.classList.add("active");
    filterDrink.classList.remove("active");
  } else {
    filterAll.classList.remove("active");
    filterFood.classList.remove("active");
    filterDrink.classList.add("active");
  }
}

filterAll.addEventListener("click", () => {
  filterMenu("All");
});
filterFood.addEventListener("click", () => {
  filterMenu("Food");
});
filterDrink.addEventListener("click", () => {
  filterMenu("Drink");
});

// === CART SETUP ===
const cartBtn = document.querySelector(".cart-btn");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCartBtn = document.querySelector(".close-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItemsContainer = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total");

let cart = [];

cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const itemName = e.target.dataset.name;
    const selectedItem = menu.find((m) => m.name === itemName);
    addToCart(selectedItem);
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("increase")) {
    const name = e.target.dataset.name;
    cart.find((i) => i.name === name).quantity++;
    updateCart();
  }

  if (e.target.classList.contains("decrease")) {
    const name = e.target.dataset.name;
    const item = cart.find((i) => i.name === name);
    if (item.quantity > 1) item.quantity--;
    else cart = cart.filter((i) => i.name !== name);
    updateCart();
  }
});

// === Cart Functions ===
function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
}

function addToCart(item) {
  const existing = cart.find((i) => i.name === item.name);
  if (existing) existing.quantity++;
  else cart.push({ ...item, quantity: 1 });
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p style="text-align:center;opacity:0.8;">Your cart is empty.</p>';
    cartCount.textContent = 0;
    cartTotal.textContent = "₦0";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const price = parseInt(item.amount.replace(/[₦,]/g, ""));
    total += price * item.quantity;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${item.amount}</p>
        </div>
        <div class="cart-quantity">
          <button class="decrease" data-name="${item.name}">−</button>
          <span>${item.quantity}</span>
          <button class="increase" data-name="${item.name}">+</button>
        </div>
      </div>
    `;
  });

  cartCount.textContent = cart.reduce((acc, i) => acc + i.quantity, 0);
  cartTotal.textContent = `₦${total.toLocaleString()}`;
}

// === CHECKOUT SETUP ===
const checkoutBtn = document.querySelector(".checkout-btn");
const cartItemsCont = document.querySelector(".cart-items");
const cartTotalDisplay = document.querySelector(".cart-total");
const modal = document.querySelector(".checkout-modal");
const modalItems = document.querySelector(".checkout-items");
const modalTotal = document.querySelector(".checkout-total");
const confirmBtn = document.querySelector(".confirm-order");

function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty, bruh. Add something first 😒");
    return;
  }

  modalItems.innerHTML = "";

  let total = 0;
  let orderItems = [];

  cart.forEach((item) => {
    const price = parseInt(item.amount.replace(/[₦,]/g, ""));
    const subTotal = price * item.quantity;
    total += subTotal;

    orderItems.push({
      name: item.name,
      quantity: item.quantity,
      price,
      subtotal: subTotal,
    });

    modalItems.innerHTML += `
      <div class="modal-item">
        <span>${item.name}</span>
        <span>x${item.quantity}</span>
        <span>₦${subTotal.toLocaleString()}</span>
      </div>
    `;
  });

  modalTotal.textContent = `₦${total.toLocaleString()}`;
  modal.classList.add("show");

  const payload = {
    orderId: `ORD-${Date.now()}`,
    customer: "Guest",
    items: orderItems,
    total,
    timestamp: new Date().toISOString(),
  };

  confirmBtn.onclick = async () => {
    confirmBtn.textContent = "Processing...";
    confirmBtn.disabled = true;

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Order placed successfully ✅");
        console.log("✅ Sent to backend:", payload);
        modal.classList.remove("show");
        cart = [];
        updateCart();
      } else {
        throw new Error("Failed to send order");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong 😤");
    } finally {
      confirmBtn.textContent = "Confirm Order";
      confirmBtn.disabled = false;
    }
  };
}

checkoutBtn.addEventListener("click", () => {
  openCheckout();
  closeCart();
});
