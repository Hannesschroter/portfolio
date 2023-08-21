import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import ClassCard from './ClassCard'
import {VscOrganization} from 'react-icons/vsc' 
import {RiSailboatLine} from 'react-icons/ri'
import {VscVmConnect} from 'react-icons/vsc'


type Props = {
  pageInfo: PageInfo,
}

function About({pageInfo}: Props) {
  return (
    <div className="flex flex-col relative min-h-screen text-center justify-evenly ">

      <div className="absolute aspect-square w-[800px] sm:w-[800px] md:w-[1000px] lg:mt-[5%] w-[590px] lg:w-[1100px] xl:w-[1100px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 -translate-x-[440px] sm:-translate-y-[500px] -translate-y-[900px] md:-translate-y-[300px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>

    <div className="absolute aspect-square w-[200px] sm:w-[600px] md:w-[500px] lg:mt-[5%] w-[590px] lg:w-[1100px] xl:w-[1100px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 translate-x-[100px] sm:translate-x-[300px] sm:translate-y-[400px] md:translate-x-[600px] translate-y-[100px] md:translate-y-[550px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>

    <div className="absolute aspect-square sm:opacity-100 w-[300px] sm:w-[600px] md:w-[1000px] lg:mt-[5%] w-[590px] lg:w-[1100px] xl:w-[1100px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 sm:opacity-100 -translate-x-[500px] sm:translate-x-[2000px] sm:translate-y-[400px] translate-y-[900px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>



    
    <div className="flex flex-col relative justify-center items-center gap-10 ">
      <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">About Me</h3>

      <div className="flex flex-col relative space-y-5 items-center
      p-8 mt-48 bg-gray-900 bg-opacity-30 shadow-slate-900 shadow-sm ">

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      
      className="-mt-48 flex flex-col relative xl:mt-0 xl:flex-row gap-20 xl:gap-10 text-center 
      md:text-left items-center justify-center lg:max-w-[95%] xl:max-w-[80%] ">


      <motion.img
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity:1, x:0}}
      viewport={{once:true}}
      src={urlFor(pageInfo.profilePic).url()} 
      className="md:mb-0 max-h-72 sm:max-h-96 xl:max-h-none rounded-md object-cover object-top
      md:rounded-lg mt-8 xl:w-[500px] xl:h-[600px]"
      />

      <div className="flex flex-col gap-8 relative items-center">
        <div className="items-start">
          <h4 className="mt-10 text-xl tracking-[3px] text-left text-[#F7AB0A] text-2xl px-8">This is my Background</h4>
            <p className="text-base px-8 pt-6 text-left">
              {pageInfo?.backgroundInformation}
            </p>
        </div>
      

        {/* <div className=" relative flex flex-wrap items-center justify-center gap-8"> */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:gap-6 lg:grid-cols-3 lg:grid-rows-1 items-center justify-center lg:max-w-5xl min-h-full max-h-full">
          
                <ClassCard icon={VscOrganization} headline={"Management"} presentation={"B.Sc. Business Administration | Value Based Management | Evaluation | Strategic Organization Design"} />
                <ClassCard icon={VscVmConnect} headline={"Technology"} presentation={"M.Sc. Computer Science | B.Sc. Computer Science | Artificial Intelligence | Natural Language Processing | Data Science | Explainable AI"}/>
                <ClassCard icon={RiSailboatLine} headline={"Interests"} presentation={"Sailing - Skipper at Sailwithus | (Social) Entrepreneurship - Enactus | Traveling | Food | Cooking | Drone"}/>
        </div>

      </div>

      


      </motion.div>


      </div>

      
    
    
   
    
    </div>

    </div>
  )
}

export default About