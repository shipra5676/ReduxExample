'use client';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = (event) => {
      event.preventDefault();
      alert('Product added to cart');
     };

  return (
    <div className="max-w-xs rounded-lg border border-gray-200 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      {<img
        src="./productImg.png"
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      }

      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-800">{product.title}</h5>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <div className="mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
        </div>
        <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;