import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SideBar from './componant/SideBar.jsx'
import Mainpage from './componant/Mainpage.jsx'
import PlayBar from './componant/PlayBar.jsx'
import "./componant/style/SideBar.css"
import "./componant/style/Mainpage.css"
import "./componant/style/PlayBar.css"
import "./componant/style/Global.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mianpage">
      <SideBar />
      <Mainpage/>
      <PlayBar/>
    </div>
  </StrictMode>,
)
