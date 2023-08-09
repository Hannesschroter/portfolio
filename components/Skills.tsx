import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div className="flex relative overflow-hidden flex-col text-lft
    pt-10 px-1 mx-auto md:text-left max-w-[2000px]
    xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center">
    <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
    <h3 className="mt-10 uppercase tracking-[3px]">Click on a skill for current proficiency</h3>
    <h4 className="mt-10 uppercase tracking-[3px]"> Languages </h4>
    <div className="mx-2 mt-10 grid grid-cols-4 gap-4 justify-evenly">
      {skills?.map(skill => (
        <Skill key={skill._id} skill={skill}/>


      )   
      )}

    </div>
    
    
    </motion.div>

    
  )
}

export default Skills