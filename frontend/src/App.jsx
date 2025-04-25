import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Facilities from './pages/Facilities/Facilities'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Downloads from './pages/Downloads/Downloads'
import ContactUs from './pages/ContactUs/ContactUs'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Gallery from './pages/Gallery/Gallery'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {/* <Sidebar/> */}
      <div className='app'>
        {
          showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>
        }
        <Navbar setShowLogin = {setShowLogin}/>
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/facility' element={<Facilities />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
