import { motion } from 'framer-motion';
import React from 'react';
import { SiTensorflow } from 'react-icons/si';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={urlFor(skill.image).url()}
        alt=""
        className="rounded-full border border-[#626262] object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full
        filter transition duration-300 ease-in-out" />
        
        <div className="absolute opacity-0 hover:opacity-80 transition duration ease-in-out
        hover:bg-[#d1d1d0] h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-1">
            <div className="flex flex-col items-center text-center justify-center h-full z-0">
                <p className="text-2xl text-black opacity-100"> { skill?.title }  </p>
                <p className="text-1xl font-semibold text-black opacity-100">{skill?.progress}%</p>                
            </div>
        </div> 

    </div>
    
  );
}

export default Skill;