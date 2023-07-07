import { motion } from 'framer-motion';
import React from 'react';
import { SiTensorflow } from 'react-icons/si';

type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <SiTensorflow className="rounded-full border border-[#F7AB0A] object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full
        filter transition duration-300 ease-in-out" />
        
        <div className="absolute opacity-0 hover:opacity-80 transition duration ease-in-out
        hover:bg-[#F7AB0A] h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>                
            </div>
        </div> 

    </div>
    
  );
}

export default Skill;