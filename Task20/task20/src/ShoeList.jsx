// src/ShoeList.js
import React from 'react';

const shoes = [
  { id: 1, name: 'Blue Shoes 1', price: 50, image: 'shoe1.jpg' },
  { id: 2, name: 'Blue Shoes 2', price: 75, image: 'shoe2.png' },
  { id: 3, name: 'Black Shoes ', price: 100, image: 'shoe3.png' }, 
  { id: 4, name: 'White Shoe', price: 150, image: 'shoe4.png' },
];

const ShoeList = ({ addToCart }) => {
  return (
    <div className="shoe-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
