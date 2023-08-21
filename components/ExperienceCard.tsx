import React from 'react';
import { motion } from "framer-motion";
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import { Features } from './features';
import Spotlight from './Spotlight';


type Props = {
    project: Project;
}

export default function ExperienceCard({project}: Props) {
  return (
    // <Features color="255,255,255" colorDark="100,204,255">

    // <article className="flex flex-col relative max-h-[650px] md:max-h-none rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] sm:w-[500px] md:w-[600px] xl:w-[700px]
    // snap-center bg-[#292929] pb-5 lg:hover:opacity-100 lg:opacity-40 
    // cursor-pointer md:transition-opacity md:duration-100 shadow-md overflow-scroll lg:scrollbar-hide">
    // <Spotlight>
    <article className="flex flex-col relative max-h-[550px] sm:max-h-650 md:max-h-[750px] lg:max-h-none rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] sm:w-[500px] md:w-[600px] xl:w-[700px]
    snap-center bg-[#292929] md:duration-100 shadow-md overflow-scroll scrollbar-hide">
   
    {/* <Features color="255,255,255" colorDark="100,204,255"></Features> */}
    {/* <div className=""> */}
    <div className="absolute w-[100%] top-0 bottom-0 overflow-x-clip z-0">
        {/* <div className="top-0 bottom-0 absolute w-full grid grid-cols-2 grid-rows-1">
            <div className="top-0 bottom-0 relative min-h-full w-[100%] bg-[conic-gradient(from_90deg_at_80%_2%,#76abcf_0%,#000212_57%)]"></div>
            <div className="top-0 bottom-0 relative min-h-full bg-[conic-gradient(from_270deg_at_20%_2%,#000212_43%,#76abcf_100%)]"></div>

        </div> */}
        <Spotlight/>
    </div>



    {/* </div> */}
    

        
    <img

    className="w-[100%] h-1/4 sm:h-40 pointer-events-none rounded-lg xl:w-3/4 mt-3 xl:h-[200px] object-cover object-center z-10" 
    src={urlFor(project?.image).url()} 
    alt=""/>

    <div className="px-5 md:px-10 z-10 pointer-events-none">
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
        <p className="pb-5">{project.summary}

        </p>


    </div>

    {/* </Spotlight> */}
    </article>
    

    

    
    
    );
}