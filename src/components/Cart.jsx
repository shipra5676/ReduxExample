'use client';
import React, { useState } from 'react';

const Cart = ({ product }) => {
  const handleAddToCart = (event) => {
    event.preventDefault();
    alert('Product added to cart');
  };

  return (
    <div className='container text-rose-950  p-6'> <h1 >Cart Page</h1> </div>
  );

};

export default Cart;