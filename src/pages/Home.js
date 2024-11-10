import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
// import { Link } from 'react-router-dom';

const Home = () => {
  const orderLink = `${window.location.origin}/order`;

  return (
    <div className="home-container">
      <h1>Food Ordering App</h1>
      <QRCodeGenerator url={orderLink} />
      {/* <Link to="/order" className="order-button">Pesan Sekarang</Link> */}
    </div>
  );
};

export default Home;
