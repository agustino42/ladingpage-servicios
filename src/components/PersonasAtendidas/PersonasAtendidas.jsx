import React from 'react'
import './PersonasAtendidas.css'
import Sliderversion from './Sliderversion'

const PersonasAtendidas = () => {
  return (
    <div className="t-wrapper">
       <div className="container">
           <div className="t-container">
               <div className="t-head">
                   <span className="tag">Trabajos 100% Garantizados</span>
                   <span className='title'>La contabilidad es nuestro Compromiso</span>
                   <span className="des">Oficina Contable C.A</span>
               </div>
           </div>

           {/**slider Section */}
            <Sliderversion />
       </div>
    </div>
  )
}

export default PersonasAtendidas