import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingCarousel from './App.jsx'
import './index.css'
import NavBar from './components/ui/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Description from './components/ui/Description.jsx'
import Testimonies from './components/ui/Testimonies.jsx'
import Footer from './components/ui/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    
    <BrowserRouter>
      <NavBar />
      <div className='bg-black'>
        <LandingCarousel />
        <Description />
      </div>
      <div className='bg-white'>
        <Testimonies/>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
