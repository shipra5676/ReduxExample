import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu,AiOutlineShoppingCart } from 'react-icons/ai';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cart from './Cart';
import App from '../containers/App';
import Product from '../containers/Product';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <Router>
      <div className='bg-black justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <nav>
          <ul className='hidden md:flex'>
      
            <li  className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              <Link to="/Product">Product</Link>
            </li>
            <li  className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              <Link to="/Cart"><AiOutlineShoppingCart size={20} /></Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

      </div>
    </Router>
  );
};

export default Navbar;