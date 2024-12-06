import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componant/Header.jsx'
import MainPage from './componant/MainPage.jsx'
import SideBar from './componant/SideBar.jsx'
import './css/SideBar.css'
import './css/MainPage.css'
import './css/Header.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className="contain">
  <SideBar />
  <Header />
  <MainPage />
  </div>
  </StrictMode>,
)
