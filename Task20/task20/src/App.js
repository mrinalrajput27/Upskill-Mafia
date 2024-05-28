// src/App.js
import React, { useState } from 'react';
import ShoeList from './ShoeList';
import Cart from './Cart';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoeId);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== shoeId);
      } else {
        return prevCart.map(item =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <ShoeList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
