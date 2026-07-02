import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Propertyfilter from './components/propertyfilter'

const App = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<MainLayout/>}/>
      
    </Routes>
    
    </>
    
  )
}

export default App