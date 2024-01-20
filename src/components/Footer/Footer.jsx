import React from 'react'
import './Footer.css'
import EmailBox from "../EmailBox/EmailBox";


const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
          <div className="f-container">
              <span className="title">Contactanos. "Servicios las 24 Horas"</span>
              <EmailBox />

              <hr />
              <div className="f-menu">
                <span>Inicio</span>
                <span>Servicios que Ofrecemos</span>
                <span>Servicios Contables</span>
                <span>Quienes Somos</span>
                <span>Personal Capacitado</span>
              </div>

              <hr />

              <span className="copy">Creado y Diseñado por Agustino C.A🚀</span>

          </div>
        </div>
    </div>
  )
}

export default Footer