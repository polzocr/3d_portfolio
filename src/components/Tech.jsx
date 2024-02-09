import React from "react";
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const SkillCard = ({name,icon}) => {
  return (
    <div className="flex flex-col dark:hover:bg-gray-700  dark:bg-gray-200 border-gray-800 dark:border-white border-4 rounded-lg p-3 sm:m-2 m-4 transition duration-500 ease-in-out hover:bg-gray-800 hover:text-gray-200 transform hover:-translate-y-1 hover:scale-10 items-center justify-center">
      <img alt={name}  width="64" height="64"  data-nimg="1" className="lg:h-20 lg:w-20 sm:h-10 sm:w-10 fill-current hover:opacity-50" src={icon}></img>
      <div className="flex flex-col items-start mt-4 ">
        <h4 className="text-xl font-semibold pt-3">{name}</h4>
      </div>
    </div>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>Compétences</p>
        <h2 className={styles.sectionHeadText}>Compétences.</h2>
      </motion.div>
      {/* <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div> */}


    <div className="flex items-center justify-center pb-20 pt-10">
      <div className="grid xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-3 max-w-6xl">
        {technologies.map((technology) => (
          <SkillCard name={technology.name} icon={technology.icon} key={technology.name}/>
        ))}

      </div>
    </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "");