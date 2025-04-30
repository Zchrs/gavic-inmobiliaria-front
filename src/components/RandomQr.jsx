/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Para QR en formato Canvas
import { QRCodeSVG } from 'qrcode.react';    // Para QR en formato SVG (recomendado)
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RandomQr = () => {
  const [qrValue, setQrValue] = useState('');
  const [baseUrl] = useState('https://tudominio.com/redirect');
  const [fullUrl, setFullUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    generateRandomQr();
  }, []);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
  };

  const generateRandomQr = () => {
    const randomId = generateRandomId();
    const newUrl = `${baseUrl}?id=${randomId}`;
    setQrValue(newUrl);
    setFullUrl(newUrl);
  };

  const handleRedirect = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      toast.success(`Redirigiendo para el código QR con ID: ${id}`);
      // navigate(`/product/${id}`);
    }
  };

  return (
    <div className="qr-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2>Generador de Código QR</h2>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        margin: '20px 0',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <QRCodeSVG 
          value={qrValue} 
          size={256}
          level="H"
          includeMargin={true}
          fgColor="#333333"
        />
      </div>
      
      {/* Resto del componente permanece igual */}
      <div style={{ margin: '15px 0' }}>
        <button 
          onClick={generateRandomQr}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: '10px'
          }}
        >
          Generar Nuevo QR
        </button>
        
        <CopyToClipboard 
          text={fullUrl} 
          onCopy={() => toast.info('URL copiada al portapapeles!')}
        >
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Copiar Enlace
          </button>
        </CopyToClipboard>
      </div>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        width: '100%',
        wordBreak: 'break-all'
      }}>
        <p><strong>Enlace generado:</strong></p>
        <p>{fullUrl}</p>
      </div>
      
      <button 
        onClick={handleRedirect}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Simular Escaneo (Solo demo)
      </button>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt doloremque dolorem accusamus voluptate, vel, delectus, culpa dolorum veniam quae atque. Est amet minus aut ducimus sint necessitatibus incidunt aspernatur.</p> */}
    </div>
  );
};