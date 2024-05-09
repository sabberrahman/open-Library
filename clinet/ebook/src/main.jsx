import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <div  className='dark:bg-gray-100 dark:text-gray-950'>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </div>
   
  </BrowserRouter>
)
