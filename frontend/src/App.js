import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './Components/Navi';
import Home from './Components/Home';
import ProductList from './Components/Products';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Orders from './Components/Orders';
import OrderTracker from './Components/OrderTracker';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    showNotification(`${product.name} added to cart`);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Hide after 3 seconds
  };

  return (
    <Router>
      <div>
        <Navi />
        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-20">
            {notification}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ordertrack" element={<OrderTracker/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
