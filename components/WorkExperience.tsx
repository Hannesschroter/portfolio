import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Project } from '@/typings';

type Props = {
  projects: Project[]
}

function WorkExperience({projects}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex relative overflow-hidden flex-col text-lft
     pt-10 px-1 justify-evenly mx-auto items-center">
    <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>


    <div className="scrollbar-hide w-[100%] flex space-x-5 overflow-x-scroll p-3 pt-10 sm:pd-10 snap-x snap-mandatory">
        {projects?.map((project) =>(
          <ExperienceCard key={project._id} project={project}/>
        ))}
    
    </div>



    </motion.div>
  )
}

export default WorkExperience