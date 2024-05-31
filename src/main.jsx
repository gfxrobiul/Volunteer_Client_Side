import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={Router}></RouterProvider> </AuthProvider>
    <ToastContainer 
 position="top-right"
 autoClose={2000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="colored"
 transition:Bounce
 ></ToastContainer>
  </React.StrictMode>,
)
