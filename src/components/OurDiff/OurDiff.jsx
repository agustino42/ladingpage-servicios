"use client"

import React from 'react'
import './OurDiff.css'
import Image from "next/image"
import { ourDiffFeatures } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants, containerVariants } from '@/src/utils/animation';


const OurDiff = () => {
  return (
      <div className="od-wrapper"> 
      <div className="container">
        <div className="od-container">
          {/**Heading Section */}
           <div className="od-head">

          <motion.span 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="tag">
            Oficina Contable
          </motion.span>

          <motion.span 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="title">
          Servicios y Asesorias Contables, Balances Personales y Juridicos, Certificaciones de Ingresos
          </motion.span>

          <motion.span 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text">
           Declaraciones I.S.L.R - IVA - Retenciones, Avaluos de Muebles e Inmuebles
          </motion.span>
           </div>

            {/** features */}
           <div className="od-features">
            {

              ourDiffFeatures.map((feature, i) => (
              <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              variants={containerVariants((i + 1) * 0.1)}
              className="od-feature" key={i}>
                <Image
                src={feature.icon}
                alt='feature'
                width={128}
                height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))
            
            }
           </div>
          </div>
        </div>
      </div>
  )
}

export default OurDiff