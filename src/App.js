import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './component/ProductCard';
import PurchasePage from './Pages/PurchasePage';

const App =() => {
  return (    
    <Router>
      <div className="App">
      <Navbar />
      <div className="product-section">
        <ProductCard 
          name="Diamond Lock"
          price="Rp.5,000"
          imageUrl="./asset/dll.png"
          description="Jual Diamond Lock"
          button="Jual"
        />
        <ProductCard 
          name="Diamond Lock"
          price="Rp.4,000"
          description="Beli Diamond Lock"
          button="Beli"
        />
      </div>
      
      <Routes>
        <Route path='/PurchasePage' element={<PurchasePage/>} />
        {/* <Route path='/' element={<ProductCard/>} /> */}
        
          
      </Routes>
      </div>
    </Router>
  )
}

export default App;
