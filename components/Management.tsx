import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '@/sanity';


type Props = {
    directionLeft?: boolean;
    skill: string;
}

function Management({skill, directionLeft}: Props) {
  return (
    <div className="group relative flex text-base cursor-pointer border px-3 py-1 border-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-slate-900 rounded-full md:text-xl md:px-4 md:py-2">
      {skill}
    </div>
    
  );
}

export default Management