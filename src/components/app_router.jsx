import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import ReunionPage from '../pages/reuniones'
import SoonPage from '../pages/soontm'
import ContactoPage from '../pages/contacto'
import FormularioPage from '../pages/formulario'
import HorarioPage from '../pages/horario'
import AnalisisPage from '../pages/Analisis'
import MenuAnalisisPage from '../pages/menuanalisis'
import AnalisisPage2 from '../pages/Analisis2'
import AnalisisPage3 from '../pages/Analisis3'
import AnalisisPage4 from '../pages/Analisis4'
import AnalisisPage5 from '../pages/Analisis5'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />}  />
        <Route path='/soontm' element={<SoonPage />} />
        <Route path='/reuniones' element={<ReunionPage />} />
        <Route path='/formulario' element={<FormularioPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
        <Route path='/horario' element={<HorarioPage />} />
        <Route path='/menuanalisis' element={<MenuAnalisisPage />} />
        <Route path='/Analisis' element={<AnalisisPage />} />
        <Route path='/Analisis2' element={<AnalisisPage2 />} />
        <Route path='/Analisis3' element={<AnalisisPage3 />} />
        <Route path='/Analisis4' element={<AnalisisPage4 />} />
        <Route path='/Analisis5' element={<AnalisisPage5 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
