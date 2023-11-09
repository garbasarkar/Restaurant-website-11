import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import PrivateAuth from './PrivateAuth/PrivateAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivateAuth>
    <RouterProvider router={Routes}>
    </RouterProvider>
    </PrivateAuth>
  </React.StrictMode>,
)
