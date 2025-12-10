import React from 'react';

function Spinner() {
  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle}></div>
      <p>Carregando dados da API...</p>
    </div>
  );
}

const spinnerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '200px',
};

const spinnerStyle = {
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: 'spin 1s linear infinite',
  marginBottom: '15px',
};

export default Spinner;