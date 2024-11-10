import React, { useState } from 'react';
import QRScanner from '../components/QRScanner';
import axios from 'axios';

const Order = () => {
  const [tableNumber, setTableNumber] = useState('');

  const handleScanSuccess = (data) => {
    setTableNumber(data);
  };

  const handleOrder = async () => {
    if (!tableNumber) {
      alert('Nomor meja tidak ditemukan!');
      return;
    }
    try {
      await axios.post('/api/order', { table: tableNumber });
      alert('Pesanan berhasil dikirim!');
    } catch (error) {
      alert('Gagal memesan, coba lagi!');
      console.error(error);
    }
  };

  return (
    <div className="order-container">
      <h2>Scan QR Code</h2>
      {!tableNumber ? (
        <QRScanner onScanSuccess={handleScanSuccess} />
      ) : (
        <div>
          <p>Nomor Meja: {tableNumber}</p>
          <button className="confirm-button" onClick={handleOrder}>
            Konfirmasi Pesanan
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
