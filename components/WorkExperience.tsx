import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Project } from '@/typings';
import Spotlight from './Spotlight';

type Props = {
  projects: Project[]
}

function WorkExperience({projects}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex relative overflow-x-hidden flex-col text-lft
     pt-10 px-1 justify-evenly mx-auto items-center min-h-screen">


    {/* <div className="absolute aspect-square sm:w-[600px] md:w-[800px] lg:mt-[10%] w-[400px] lg:w-[1000px] xl:w-[1000px] max-w-[1300px] stroke-gray-300/70">
      <div className="absolute inset-0 translate-x-[100px] lg:translate-x-[1200px] translate-y-[70px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div> */}

    <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>


    <div className="scrollbar-hide w-[100%] flex space-x-5 overflow-x-scroll p-3 pt-10 sm:pd-10 snap-x snap-mandatory z-10">
        {projects?.map((project) =>{
          return (
                <ExperienceCard key={project._id} project={project} />

          );
        })}
    
    </div>



    </motion.div>
  )
}

export default WorkExperience