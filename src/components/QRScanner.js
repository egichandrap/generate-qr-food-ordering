import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
//   const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 });
    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
        scanner.clear();
      },
      (error) => console.warn('Error scanning', error)
    );

    return () => scanner.clear();
  }, [onScanSuccess]);

  return <div id="reader" className="scanner-container"></div>;
};

export default QRScanner;
