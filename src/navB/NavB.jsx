import React, {useState} from 'react'
import 'C:/ReactP/banco/src/Estilos-css/NabB.css'
import {Link} from 'react-router-dom'



export const NavB = () => {
  const links=[
    {
      name:"/UI_solicitudT",
      href:"/UI_solicitudT"
    },
    {
      name:"/UI_TarjetasS",
      href:"/UI_TarjetasS"
    },
    {
      name:"/UI_TajetasA",
      href:"/UI_TajetasA"
    },
    {
      name:"/App",
      href:"/App"
    }
  ];
  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <div className='navBar'>
      
      <img className='icono_navb' src={require('../Recursos/banco_icono.png')}></img>
        <div className='nav_logo'>
          
         <p>Banco Credit Suisse</p>
        </div>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a className='items_navb' href="/App"> Inicio</a>
          <a className='items_navb' href="/UI_solicitudT"> Solicitud de Tarjetas</a>
          <a className='items_navb' href="/UI_TarjetasS"> Tarjetas Solicitadas</a>
          <a className='items_navb' href="/UI_TajetasA"> tarjetas Aprovadas</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
          <spam></spam>
          <spam></spam>
          <spam></spam>
        </div>

    </div>
  )
}

export default NavB;
