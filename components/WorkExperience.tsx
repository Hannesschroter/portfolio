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
    
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
     max-f-full px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>


    <div className="scrollbar-hide w-full m-auto flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {projects?.map((project) =>(
          <ExperienceCard key={project._id} project={project}/>
        ))}
    
    </div>



    </motion.div>
  )
}

export default WorkExperience