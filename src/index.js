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
      fontSize: '2rem'
    },
    myParagraph: {
      color: '#6F757C',
      fontSize: '1rem'
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
