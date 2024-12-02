## Food App
A dynamic and interactive food ordering web app built using React.js & styled with Tailwind CSS. The app allows users to browse restaurants, 
search for specific eateries, view menus, and filter top-rated options seamlessly.

## Features
1. Dynamic Restaurant Listings: Fetches real-time restaurant data from Swiggy's live API.
2. Search and Filter:
   Search restaurants by name.
   Filter restaurants based on top ratings (>4.3).
3. Restaurant Menu Viewer:
   Displays restaurant details (name, cuisines, cost for two, and average rating).
   Interactive accordion for menu categories.
4. Cart Functionality: Add menu items to the cart for a simulated checkout experience.

5. Global State Management: Redux store integration for cart functionality.

## Technologies Used

## Frontend:
React.js with React Router for single-page application (SPA) functionality.
Tailwind CSS for responsive, modern styling.

## State Management:
Redux Toolkit and Context API.
## Custom Hooks: 
For reusable logic (e.g., API calls, status detection).
## API Integration: 
Live Swiggy API for restaurant and menu data.
## JavaScript (ES6+): 
For functional components and dynamic features.

## Installation

## Clone the repository:
```bash
git clone https://github.com/your-username/food-app.git
```
## Navigate to the project directory:
cd food-app

## Install dependencies:
```bash
npm init
````
## Install Parcel bundler:
```bash
npm install -D parcel
```
```bash
npx parcel indexFapp.html
```
```bash
npm install react
npm install react-Dom
```

Start the development server with Parcel:
npm start

## API Details

## Restaurants List:
Uses the live Swiggy API to fetch restaurant details:
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
## Restaurant Menu:
Fetches menu details dynamically using the restaurant ID:
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=LAT&lng=LNG&restaurantId=RES_ID

## Use https://corsproxy.io/? before the URL during local development to bypass CORS restrictions.

## Some Screenshots:

![foodapp (3)](https://github.com/user-attachments/assets/b0d72285-62f1-4de7-8c59-55f0d07bc782)


![foodapp (2)](https://github.com/user-attachments/assets/a1548f54-28f4-43ef-a0d8-006c5c84c1c7)


![foodapp (1)](https://github.com/user-attachments/assets/68f6211b-9e6d-43a5-a6b0-168ec7140100)

