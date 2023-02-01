import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import  ShopContextProvider from './Context/ShopContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>

  <ShopContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ShopContextProvider>

  </ChakraProvider>

);