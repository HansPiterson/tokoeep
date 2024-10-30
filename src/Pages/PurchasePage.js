import React, { useState } from 'react';
import '../style/PurchasePage.css';

function PurchasePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pembelian berhasil untuk ${formData.name} sejumlah ${formData.quantity}!`);
  };

  return (
    <div className="purchase-page">
      <h2>Halaman Pembelian</h2>
      <form onSubmit={handleSubmit} className="purchase-form">
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>No. Telepon:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Alamat:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Jumlah Pembelian:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="submit" className="purchase-button">Konfirmasi Pembelian</button>
      </form>
    </div>
  );
}

export default PurchasePage;
