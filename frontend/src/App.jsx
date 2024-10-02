import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import SingleDoctor from './pages/SingleDoctor'
import MyAppointment from './pages/MyAppointment'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='mx-3 sm:mx-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors:speciality' element={<SingleDoctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-appointment:docId' element={<MyAppointment />} />
      </Routes>
    </div>
  )
}

export default App
