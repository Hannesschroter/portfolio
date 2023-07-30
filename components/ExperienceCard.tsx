import React from 'react';
import { motion } from "framer-motion";
import { Project } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    project: Project;
}

export default function ExperienceCard({project}: Props) {
  return (
    <article className="flex flex-col max-h-[650px] md:max-h-none rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] sm:w-[500px] md:w-[600px] xl:w-[700px]
    snap-center bg-[#292929] pt-5 pb-5 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 shadow-md overflow-scroll">
    <motion.img
    initial={{ 
        y:-100,
        opacity: 0}}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity:1, y:0}}
    viewport={{once:true}}

    className="w-[100%] h-1/4 sm:h-40 rounded-lg xl:w-3/4 mt-3 xl:h-[200px] object-cover object-center" 
    src={urlFor(project?.image).url()} 
    alt=""/>

    <div className="px-5 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-light"> {project.title}</h4>
        <p className="font-semibold text-lg sm:text-2xl mt-1"> Technology</p>
        <div className="flex space-x-2 my-2 text-base overflow-hidden">
            {project.technologies.map(technology =>(
                <img 
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                    alt=""
                />
            ))}
            
        </div>
        <p>{project.summary}

        </p>


    </div>


    </article>
    );
}