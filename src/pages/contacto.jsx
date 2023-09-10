import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import contacto from '../assets/contacto.jpg'

export const ContactoPage = () => {
    return (
        <div className='page'>
            <NavBar />
            <h2>Su caso ES TILO</h2>
            <img src={contacto} height={200} alt='imgen de contacto' /><br />
            <br />
            <Button variant='contained'>Llame a una sucursal</Button>
        </div>
    )
}

export default ContactoPage