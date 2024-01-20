"use client"

import React from 'react'
import './Work.css'
import  { hitFeatures }  from '@/src/utils/data'

import Image from "next/image"
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants, containerVariants } from '@/src/utils/animation';

const Work = () => {
    const featureVariants = {
      offscreen: {
        scale: 0.5
      },
      onscreen: {
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
        },

      },
    }

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">

          {/**Head Section */}
           <div className="hiw-head">
              <motion.span 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag">
                 Tus finanzas, Nuestro Camino
              </motion.span>

              <motion.span
               initial="offscreen"
               whileInView={"onscreen"}
               variants={titleVariants}
              className="title">
               Nos Comprometemos a ayudarte a mantener tus finanzas en orden. Con Nuestro Servicios de Contabilidad,
               Asesoria fiscal y Administracion de nomina, podras Ahorrar Tiempo y Dinero
              </motion.span>

           </div>

           <div className="hiw-features">
             {
              hitFeatures.map((feature, i) => (
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
                key={i}
                className="hiw-feature">

                {/**left side */}
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "easeIn",
                    duration: 1,
                    delay: .7
                  }
                }}
                className="detail">
                  <span className="des">0{i+1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>


                {/**right side */}
                <div className="icon">
                     <Image
                     src={feature.icon}
                     width={128}
                     height={128}
                     alt='feature'
                     style={{translate: "50% 0rem"}}
                     />
                </div>

                </motion.div>
              ))
             }
           </div>

         </div>
      </div>
    </div>
  )
}

export default Work