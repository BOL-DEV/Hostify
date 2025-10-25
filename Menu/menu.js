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
      <button>Add to cart</button>
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
