import {motion} from 'framer-motion'
import { localisation } from '../assets' 

import {styles} from '../styles'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '> 
      <div className={`${styles.paddingX} absolute inset-0  lg:top-[220px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00E8EE]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-[#00E8EE]'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hey ! C'est<span className='text-[#00E8EE]'> Paul</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Je suis développeur <span className='text-[#00E8EE]'> Javascript</span> <br className='sm:block hidden'/>aussi bien <span className='text-[#00E8EE]'> FrontEnd</span> que  <span className='text-[#00E8EE]'> BackEnd</span></p>
          <div className='mt-5 flex items-center gap-4'>
            <img src={localisation} alt="localisation-logo" className='w-5 invert'/>
            <p className='text-[#00E8EE] text-2xl'> Paris, Ile de france</p>
          </div>
          <div className=' mt-8 sm:mt-14  flex items-center gap-5 '>
            <a href="/cv" className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:bg-[#00E8EE]'>Voir CV</a>
            <a href="#contact" className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:bg-[#00E8EE]'>Contact</a>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y:  [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className= "w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero