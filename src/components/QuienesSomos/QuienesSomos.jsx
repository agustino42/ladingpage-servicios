"use client"

import React from 'react';
import './QuienesSomos.css';
import { features } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants, containerVariants } from '@/src/utils/animation';


const QuienesSomos = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container"> 
        {/** Head of the Section  */}

           <div className="wwd-head">
            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}

            className="tag">Oficina Contable C.A</motion.span>

            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="title">{" "}Trabajamos de Lunes a Viernes</motion.span>

            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="des">La contabilidad Es nuestro Compromiso</motion.span>
           </div>

           {/** Below two section blocks */}
           <div className="wwd-blocks">

            {/**Primer  block */}

           <div className="wwd-block">

            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='sec-title'>Servicios Contables
            </motion.span>

            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='text'>Servicios de Auditoria financiera
            </motion.span>

            <div className="block-features">
              {
                features.slice(0, 3).map((feature, i) => (
               <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants((i + 1 * 0.1))}
               className="block-feature" key={i}>
                <Image 
                src={feature.icon}
                alt='feature'
                width={60}
                height={60}
                />
                <span>{feature.title}</span>
               </motion.div>
                ))
              }
            </div>
           </div>

               {/**Segundo block */}
           <div className="wwd-block">
          
            <motion.span
             initial="offscreen"
             whileInView={"onscreen"}
             variants={titleVariants}
            className='sec-title'>Crece sin Preocupaciones
            </motion.span>

            <motion.span
             initial="offscreen"
             whileInView={"onscreen"}
             variants={desVariants}
            className='text'>Protege tu negocio
            </motion.span>

            <div className="block-features">
              {
                features.slice(3, 6).map((feature, i) => (
               <motion.div 
               initial="offscreen"
               whileInView="onscreen"
               variants={containerVariants((i + 1 * 0.1))}
               className="block-feature" key={i}>
                <Image 
                src={feature.icon}
                alt='feature'
                width={60}
                height={60}
                />
                <span>{feature.title}</span>
               </motion.div>
                ))
              }
            </div>
           
           </div>
           </div>
             {/** Support Block */}
             <motion.div 
             initial="offscreen"
             whileInView="onscreen"
             variants={containerVariants(0.3)}
             className="wwd-support"> 

{/**Left Side */}
  <div>
    <span className="sec-title">
          Oficina contable Asociados C.A
    </span>
    <span className="des">
     Empresa Dedicada a la Contabilidad Financiera, Asesorias Empresariales
    </span>
  </div>
   {/**right Side */}
     
     {/**<div>
      <span className="text">
          Servicios que Ofrecemos
      </span>
     
      <span className="text1">
      *Asesorias Empresariales
      </span>
    
     </div> */}
     
     
             </motion.div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos