/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ListPersonPage} from './pages/listPersonPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route/>
        <Route path='personList' element= {<ListPersonPage/>} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
