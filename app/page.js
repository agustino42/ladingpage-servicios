"use client"

import './page.css'
import Navbar from "@/src/components/Navbar/Navbar"
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import QuienesSomos from '@/src/components/QuienesSomos/QuienesSomos'
import OurDiff from '@/src/components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
import Work from '@/src/components/Work/Work';
import QueInvertir from '@/src/components/QueInvertir/QueInvertir';
import PersonasAtendidas from '@/src/components/PersonasAtendidas/PersonasAtendidas';
import Footer from "@/src/components/Footer/Footer"

export default function Home() {
const controls = useAnimation() 



  return (
   <motion.div
   
   className='app' animate={controls}>
    <Navbar />
    <Hero />
    <BrandingVideo />
    <QuienesSomos />

    <motion.div
    onViewportEnter={() => 
    controls.start({
      backgroundColor: "var(--secondary-color)",
    })
    }
     onViewportLeave={() =>
      controls.start({
        backgroundColor: "white",
      })
      }
      viewport={{amount: 0.4}}
    >
    <OurDiff />
    </motion.div>

    <Work />

   <motion.div
   onViewportEnter={() => 
    controls.start({
      backgroundColor: "var(--primary-color)",
    })
    }
     onViewportLeave={() =>
      controls.start({
        backgroundColor: "white",
      })
      }
      viewport={{amount: 0.4}}
   >
     <QueInvertir />
   </motion.div>
   
    <PersonasAtendidas />

    
    <Footer />
   </motion.div>
   
    );
}
