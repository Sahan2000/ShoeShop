import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import {CartProvider} from "./context/CartContext.tsx";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>,
)
