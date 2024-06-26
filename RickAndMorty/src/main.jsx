import React from 'react'
import ReactDOM from 'react-dom/client'
import { ListPersonPage } from './pages/listPersonPage'
import { ListEpisodesPage } from './pages/listEpisodesPage'
import { InfoEpisodesPage } from './pages/infoEpisodesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormCharacterPage } from './pages/formCharacterPage'
import { Provider } from 'react-redux'
import { Store } from './store/store.js'
import {NavbarComponent} from '../src/components/navbarComponent/navbarComponent.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarComponent />} >
            <Route path='personList' element={<ListPersonPage />} />
            <Route path='episodes' element={<ListEpisodesPage />} />
            <Route path='infoEpisodes/:id' element={<InfoEpisodesPage />} />
            <Route path='formCharacter' element={<FormCharacterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
