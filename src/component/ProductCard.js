import React from 'react';
import '../style/ProductCard.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import myImage from '../asset/dll.png';

function ProductCard({ name, description, price, button }) {
  const navigate = useNavigate()
  return (

    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={myImage} className='image' alt="Deskripsi gambar" />
      <h2>{price}</h2>
      <button onClick={() => navigate('/')} className="CartBtn"><span className='text'>{button}</span>
      </button>
    </div>
  );
}

export default ProductCard;
