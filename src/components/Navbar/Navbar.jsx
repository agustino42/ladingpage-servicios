"use client"

import React, { useState} from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';



const Navbar = () => {
   const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
     useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
           setNavStyle("sticky");
        } else {
           setNavStyle("");
        }
     });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/**Version Escritorio */}
      <div className='container'>
        <div className='n-container'>
           {/**left Sectionj */}
           <div className='n-logo'>
             <span>Servicios Contables </span>
           </div>
           {/**right section */}
           <div className='n-right'>

             <div className='n-menu'>

              <Link to="wwd-wrapper" spy={true} smooth={true}>
              <span>Quienes Somos </span>
              </Link>

              <Link to="hiw-wrapper" spy smooth offset={100}>
              <span>Servicios</span>
              </Link>
               
              <Link to="wwi-wrapper" spy smooth>
              <span>Contacto</span>
              </Link>

              <Link to="t-wrapper" spy smooth offset={100}>
             <span>Testimonios</span>
              </Link>
               

               
               
              
             </div>

             <div className='fund-button'>
            Servicios-Contables
             </div>
           </div>
        </div>
      </div>
      {/**Version Para Telefonos */}
      <div className='nm-container'> 
        {/**logo */}
        <span>SERVICIOS-CONTABLES</span>

        {/**Menus de los Iconos */}
         {
          !mobileMenuOpened ? (
        <BiMenuAltRight
        size={30}
        onClick={()=>setMobileMenuOpened(true)} 
        /> ) :
        (
        <RxCross2  size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/** Mobile Menu*/}
        <div className="nm-menu"
        style={{transform: mobileMenuOpened && "translateX(0%)"}}
        >

          <Link
          onClick={() => setMobileMenuOpened(false)}
          to="wwd-wrapper"
          spy={true}
          smooth={true}
          >
          <span>Quienes Somos </span>
          </Link>

          <Link
          onClick={() => setMobileMenuOpened(false)}
          to="hiw-wrapper"
          spy
          smooth
          offset={100}
          >
           <span>Servicios</span>
          </Link>

          <Link
          onClick={() => setMobileMenuOpened(false)}
          to="wwi-wrapper"
          spy
          smooth
          >
               <span>Contacto</span>
          </Link>
        
          <Link
          onClick={() => setMobileMenuOpened(false)}
          to="t-wrapper"
          spy
          smooth
          offset={100}
          >
           <span>Testimonios</span>
          </Link>
               
           
       
          <div className="m-funded-button">
           Contactanos 
           </div>
      
          
          
        </div>
      </div>

    </div>
  )
}

export default Navbar