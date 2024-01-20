import React from 'react'
import './QueInvertir.css'
import { whoInvest } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const QueInvertir = () => {
  return (
    <div className="wwi-wrapper">
        <div className="container">
           <div className="wwi-container">
            {/**left Section */}
                 <div className="wwi-left">
                   <div className="head">
                      <motion.span 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVariants}
                      className="tag">Oficina Contable</motion.span>

                      <motion.span 
                       initial="offscreen"
                       whileInView={"onscreen"}
                       variants={titleVariants}
                      className="title">
                        {" "}
                        Ubicacion: Xxxx
                        <br /> Telefonos: xxxxxx
                      </motion.span>
                   </div>

                  {/**Feature Section */}
                   
                <div className="wwi-features">
                  {
                    whoInvest.map((feature, i) => (
                       <motion.div 
                       initial="offscreen"
                       whileInView={"onscreen"}
                       variants={containerVariants(i * 0.5 + 1)}
                       className="wwi-feature" key={i}>
                          <span className="des">{feature.title}</span>
                          <span className="text">{feature.des}</span>
                       </motion.div>
                    ))
                  }
                </div>


                  </div>
               
               
               {/**right Section */}
             {/**   <div className="wwi-right">
              <motion.img 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants(0.5)}
              src="/features/ofi6.jpg" alt="persons" />
               </div>
                */}
            </div>
         </div>
    </div>
  )
}

export default QueInvertir