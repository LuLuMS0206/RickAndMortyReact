import React from 'react'
import ReactDOM from 'react-dom/client'
import {ListPersonPage} from './pages/listPersonPage'
import {BrowserRouter, Routes,Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route/>
        <Route path='personList' element= {<ListPersonPage/>} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
