# 🛍️ FakeStore API Shopping Site

A responsive **e-commerce shopping application** built using **React.js**, **Bootstrap**, and the **Fake Store API**.

The application allows users to browse products, view product details, add products to a shopping cart, and manage their cart through a simple and responsive user interface.

## 🚀 Features

* 🛍️ Browse products from the Fake Store API
* 🔍 View detailed product information
* 🛒 Add products to shopping cart
* ➕ Increase product quantity
* ➖ Decrease product quantity
* 📱 Responsive design for desktop, tablet, and mobile
* 🎨 Bootstrap-based user interface
* ⚡ React component-based architecture
* 🔄 Fetch product data using REST API
* 🧭 Client-side navigation using React Router

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Bootstrap**
* **React Router**

### API

* **Fake Store API**
* REST API
* JSON

### Development Tools

* **Visual Studio Code**
* **Git**
* **GitHub**
* **npm**

## 📁 Project Structure

```text
Fakestore-Api-Shopping-Site/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> The exact folder structure may vary depending on the current implementation.

## 🌐 Fake Store API

This project uses the **Fake Store API** to retrieve product information dynamically.

The API provides product data such as:

* Product name
* Price
* Description
* Category
* Product image
* Rating

Example endpoint:

```text
https://fakestoreapi.com/products
```

## 💻 Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

* **Node.js** — v14 or later
* **npm** — v6 or later
* **Git**

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rakeshgodumala/Fakestore-Api-Shopping-Site.git
```

Navigate to the project directory:

```bash
cd Fakestore-Api-Shopping-Site
```

### 2. Install dependencies

```bash
npm install
```

## ▶️ Run the Application

Start the React development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

Open the URL in your browser to view the application.

The page automatically reloads when you make changes to the source code.

## 🛒 Application Flow

```text
                    FakeStore Shopping Site
                              │
                              ▼
                         Product List
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              Product Details        Add to Cart
                                        │
                                        ▼
                                  Shopping Cart
                                        │
                              ┌─────────┼─────────┐
                              ▼         ▼         ▼
                           Increase  Decrease   Remove
                              │         │         │
                              └─────────┼─────────┘
                                        ▼
                                   Cart Total
```

## 📱 Responsive Design

The application uses **Bootstrap** to provide a responsive and mobile-friendly interface.

It is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

## 🔄 API Integration

Product information is retrieved dynamically from the Fake Store API.

Example:

```javascript
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

The API response is then displayed through reusable React components.

## 🧩 React Concepts Used

This project demonstrates practical React.js concepts including:

* Functional Components
* JSX
* Props
* State Management
* React Hooks
* `useState`
* `useEffect`
* Event Handling
* Conditional Rendering
* List Rendering
* API Integration
* React Router
* Component Reusability

## 🧪 Available Scripts

### Start Development Server

```bash
npm start
```

Runs the application in development mode.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Create Production Build

```bash
npm run build
```

Creates an optimized production build inside the `build` directory.

### Eject

```bash
npm run eject
```

> **Note:** Ejecting is irreversible. It is generally not required for this project.

## 📸 Screenshots

Add screenshots of your application here.

For example:

```markdown
![Home Page](./screenshots/home.png)

![Product Details](./screenshots/product-details.png)

![Shopping Cart](./screenshots/cart.png)
```

Recommended screenshots:

1. Home/Product listing
2. Product details
3. Shopping cart
4. Responsive/mobile view

## 🎯 Project Objective

The objective of this project is to demonstrate practical frontend development skills by building a responsive e-commerce application using **React.js** and integrating a real REST API.

The project demonstrates:

* React.js development
* REST API integration
* Dynamic product rendering
* Shopping cart functionality
* State management
* Bootstrap responsive UI
* Component-based architecture
* Client-side routing
* Git and GitHub workflow

## 🔮 Future Enhancements

Possible future improvements include:

* User registration and login
* Product search
* Category filtering
* Backend integration
* User profile management
* Product reviews and ratings
* Deployment to a cloud platform

## 👨‍💻 Author

**Rakesh Godumala**

Frontend / Full Stack Web Developer

### Technologies

`React.js` `JavaScript` `Bootstrap` `HTML5` `CSS3` `REST API`

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
