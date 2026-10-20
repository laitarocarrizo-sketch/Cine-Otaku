import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router";
import { TemaProvaider } from './context/TemaContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TemaProvaider>
    <App/>
    </TemaProvaider>
    </BrowserRouter>
  </StrictMode>,
)
