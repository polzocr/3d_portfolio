import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Présentation.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Je suis un développeur Javascript avec de l'expérience en FrontEnd et en Backend sur des frameworks comme React et Node.js.
        J'utilise des Api externes que je formattent pour un affichage des données optimal, ou bien je créé moi-même un backend sécurisé en RestAPI.
        J'implémente ensuite le tout dans des applications "user-friendly". 
        J'apprend facilement de nouvelles technologies que j'aime utiliser pour résoudre des problèmes concrets. 
        Le travail en équipe et l'esprit de groupe sont des moteurs pour moi dans le travail et dans la vie de tous les jours. 
      </motion.p>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className=' mt-6'>
        <a href="https://www.linkedin.com/in/paul-w11" rel='noreferrer' target='_blank' className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:bg-[#00E8EE]'>Linkedin</a>
      </motion.div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")