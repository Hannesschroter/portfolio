import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '@/sanity';


type Props = {
    directionLeft?: boolean;
    language: string;
    progress: number;
    url: string;
}

function Language({language, progress, url, directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <img 
        // initial={{
        //   x: directionLeft ? -200 : 200,
        //   opacity: 0,
        // }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0}}
        src={url}
        alt=""
        className="rounded-full shadow-gray-900 shadow-sm object-cover h-[75px] w-[75px] md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full
        filter transition duration-300 ease-in-out" />
        
        <div className="absolute hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 opacity-0 hover:opacity-100 transition duration ease-in-out
        hover:bg-[#0e0e0d] h-[75px] w-[75px] shadow-gray-900 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-1">
            <div className="flex flex-col items-center text-center justify-center h-full z-0">
                <p className="text-sm text-slate-100 opacity-100"> { language }  </p>
                <p className="text-base tracking-wide text-slate-100 opacity-100">{progress}%</p>                
            </div>
        </div> 

    </div>
    
  );
}

export default Language;