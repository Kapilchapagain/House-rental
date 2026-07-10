import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Propertyfilter from './components/propertyfilter'
import Login from './pages/loginpage/Login'
import Register from './pages/registerpage/Register'
import AboutUs from './pages/aboutus/AboutUs'
import Homepage from './pages/homepage/Homepage'
import Properties from './pages/propertypage/Properties'
import Contact from './pages/contactpage/Contact'
import PropertyDetails from './pages/propertydetails/PropertyDetails'

const App = () => {
  return (
    <>
    

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      {/* nested routes */}
      <Route path='' element={<MainLayout/>}>
      <Route path='/' element={<Homepage/>}/>
      <Route path='properties' element={<Properties/>}/>
      <Route path='/propertydetails' element={<PropertyDetails/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
      
      
      
    </Routes>
    
    </>
    
  )
}

export default App