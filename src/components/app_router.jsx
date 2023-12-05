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
import Perfil from '../pages/perfil'
import Catalogo from '../pages/Catalogo'
import DevolucionPage from '../pages/devolucion'
import PrestamoPage from '../pages/prestamo'
import ReportesPage from '../pages/reportes'
import ReportesPage2 from '../pages/reportes2Get'

const AppRouter = () => {
  return (
    <BrowserRouter basename='/react'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />}  />
        <Route path='/soontm' element={<SoonPage />} />
        <Route path='/reuniones' element={<ReunionPage />} />
        <Route path='/formulario' element={<FormularioPage />} />
        <Route path='/devolucion' element={<DevolucionPage />} />
        <Route path='/prestamo' element={<PrestamoPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
        <Route path='/horario' element={<HorarioPage />} />
        <Route path='/menuanalisis' element={<MenuAnalisisPage />} />
        <Route path='/Analisis' element={<AnalisisPage />} />
        <Route path='/Analisis2' element={<AnalisisPage2 />} />
        <Route path='/mi-perfil' element={<Perfil />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/reportes' element={<ReportesPage />} />
        <Route path='/ApartadoUsuariosRevisarAñadir' element={<ReportesPage2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
