🍽️ Hostify — Restaurant Menu & Booking Web App

Hostify is a simple restaurant web application that allows users to:

Browse food & drink items

Filter menu items by category

Add items to a cart

View cart & checkout summary

Place orders (sent to a mock backend)

Make table reservations

Toggle between Light/Dark mode

Save bookings & orders locally

Everything runs purely on frontend JavaScript, using localStorage for saving data.

🚀 Features
✔ Menu Filtering

Users can filter the menu by:

All

Food

Drink

Filtering updates the menu dynamically.

✔ Shopping Cart

Users can:

Add items to cart

Increase or decrease quantity

Remove items

See total price

View cart sidebar

Cart updates instantly.

✔ Checkout Modal

When checking out:

Order summary is shown

Total price is calculated

Order is “sent” using a fake API (jsonplaceholder)

Order is saved in localStorage

✔ Table Booking

Customers can fill:

Name

Email

Phone

Date

Time

Number of Guests

Bookings are stored in localStorage.

✔ Light & Dark Mode

Users can toggle themes:

Theme is saved in localStorage

Theme persists on refresh

🛠️ Tech Stack

HTML

CSS

Vanilla JavaScript (No frameworks)

LocalStorage (Data persistence)

📦 Project Structure
/assets         → images, icons, etc.
styles.css      → main styles
menu.js         → menu items, filtering logic
cart.js         → cart system logic
booking.js      → booking form logic
index.html      → home page
menu.html       → menu page
booking.html    → booking page


(Your actual structure may vary — adjust accordingly.)

🔥 How to Use

Clone the project

Open index.html in your browser

Browse menu, add to cart, make a booking

All data persists using localStorage

📡 Fake Backend (for Orders)

Orders are sent to:

POST https://jsonplaceholder.typicode.com/posts


This simulates a real API without requiring a backend server.

🧠 Future Improvements

Add authentication (JWT)

Add admin dashboard for managing orders & bookings

Connect to a real backend

Add payment integration

Add animations + improved UI
