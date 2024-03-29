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
        <img 
        // initial={{
        //   x: directionLeft ? -50 : 50,
        //   opacity: 1,
        // }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0}}
        src={urlFor(skill.image).url()}
        alt=""
        className="rounded-full shadow-gray-900 shadow-sm object-cover h-[75px] w-[75px] md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full
        filter transition" />
        
        <div className="absolute hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 opacity-0 hover:opacity-100 transition duration ease-in-out
        hover:bg-[#0e0e0d] h-[75px] w-[75px] md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full">
            <div className="flex flex-col items-center text-center justify-center h-full">
                <p className="text-base text-slate-100 opacity-100"> { skill?.title }  </p>
                <p className="text-base tracking-wide text-slate-100 opacity-100">{skill?.progress}%</p>                
            </div>
        </div> 

    </div>
    
  );
}

export default Skill;