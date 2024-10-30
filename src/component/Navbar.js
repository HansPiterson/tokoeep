import React, { useState } from 'react';
import { MdShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import '../style/Navbar.css';

function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">NaStore</div>
      <div className="navbar-items">
        {/* Icon untuk Cart */}
        <div className="icon" onClick={() => setCartOpen(!isCartOpen)}>
        <MdShoppingBag />
        </div>
        {/* Icon untuk Login */}
        <div className="icon" onClick={() => setLoginOpen(!isLoginOpen)}>
        <FaUser />
        </div>
      </div>
      
      {/* Pop-up untuk Cart */}
      {isCartOpen && (
        <div className="popup">
          <h3>keranjang</h3>
          <p>Isi keranjang belanja akan tampil di sini.</p>
        </div>
      )}
      {/* Pop-up untuk Login */}
      {isLoginOpen && (
        <div className="popup">
          <h3>Login</h3>
          
          <p>Form login akan tampil di sini.</p>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
