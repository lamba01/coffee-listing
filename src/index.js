import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  // color palette
  palette: {
    primary: {
      main: "#FEF7EE",
    },
  },
  // typography
  typography: {
    myHeader: {
      color: '#FEF7EE',
      fontSize: '2rem',
      paddingBottom: '10px'
    },
    myParagraph: {
      color: '#6F757C',
      fontSize: '1rem'
    },
    mycard: {
      color: '#FEF7EE',
      fontSize: '0.75rem',
    },
    mycardPrice: {
      color: '#111315',
      fontSize: '0.75rem',
      backgroundColor: '#BEE3CC',
      padding: '5px',
      borderRadius: '5px'
    }
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
