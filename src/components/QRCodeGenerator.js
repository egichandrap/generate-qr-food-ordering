import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const qrValue = "https://assets-pergikuliner.com/Wf1AdlxMpMQ_3hbWnYPgTv5Ervk=/fit-in/758x598/smart/https://assets-pergikuliner.com/uploads/image/picture/3111218/picture-1701327469.jpg"; // Ganti dengan URL atau teks yang Anda inginkan

  return (
    <div>
      <QRCodeCanvas 
        value={qrValue} 
        size={256} // Ukuran QR Code
        bgColor="#ffffff" // Warna background
        fgColor="#000000" // Warna QR Code
        level="H" // Level error correction (L, M, Q, H)
        includeMargin={true}
      />
    </div>
  );
};

export default QRCodeGenerator;