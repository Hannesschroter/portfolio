import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';
import Language from './Language';
import { Skill as SkillType } from '@/typings';
import Management from './Management';

type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div className="flex relative overflow-hidden flex-col
    pt-10 px-1 mx-auto text-center max-w-[2000px]
    min-h-screen mx-auto items-center">
    <h3 className="mt-10 md:mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
    <h3 className="mt-10 uppercase tracking-[3px]">Click on a skill for current proficiency</h3>
    <h4 className="mt-10 md:mt-10 uppercase tracking-[3px]"> Languages </h4>
    <div className="mx-2 mt-10 grid grid-cols-3 gap-4 md:gap-6 md:mt-10 justify-evenly">
      <Language language="German" progress={100} url="/germany.jpg" />
      <Language language="English" progress={80} url="/English.jpg"/>
      <Language language="Spanish" progress={85} url="/Spanien.jpg"/>
    </div>

    <h4 className="mt-10 md:mt-10 uppercase tracking-[3px]"> Programming Languages </h4>
    <div className="mx-2 mt-10 grid grid-cols-4 gap-4 md:gap-6 md:mt-10 justify-evenly">
      <Language language="Python" progress={80} url="/python.png" />
      <Language language="Java" progress={50} url="/Java.jpg"/>
      <Language language="JavaScript" progress={30} url="/javascript.png"/>
      <Language language="SQL" progress={30} url="/sql.jpg"/>
    </div>

    <h4 className="mt-10 md:mt-10 uppercase tracking-[3px]"> Technology </h4> 
    <div className="mx-2 mt-10 grid grid-cols-4 gap-4 md:gap-6 justify-evenly">
      {skills?.map(skill => (
        <Skill key={skill._id} skill={skill}/>
      )   
      )}
    </div>

    <h4 className="mt-10 md:mt-10 uppercase tracking-[3px]"> Management </h4> 
    <div className="mx-2 mt-10 flex flex-wrap gap-2 justify-center md:max-w-[800px] md:gap-3 lg:gap-4">
      <Management skill="Organizational Design" />
      <Management skill="Innovation" />
      <Management skill="Value Based Management" />
      <Management skill="Controlling" />
      <Management skill="Organization and Leadership" />
      <Management skill="Human Resource Management" />
      <Management skill="Entrepreneurship" />
      <Management skill="Operations Research" />
      <Management skill="Financial Statement Analysis and Evaluation" />
    </div>



    
    
    </motion.div>

    
  )
}

export default Skills