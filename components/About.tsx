import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'
import Spotlight, { SpotlightCard } from './Spotlight'
import Image from 'next/image'
import Card01 from '@/public/card-01.png'
import Card02 from '@/public/card-02.png'
import Card03 from '@/public/card-03.png'
import Circles from './CirclesSolid'

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <div className="relative flex flex-col">
    
    {/* <Circles/> */}
    <div className="absolute aspect-square sm:w-[800px] md:w-[1000px] lg:mt-[5%] w-[590px] lg:w-[1100px] xl:w-[1100px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 -translate-x-[180px] translate-y-[50px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>

    <div className="absolute aspect-square sm:w-[600px] md:w-[800px] lg:mt-[5%] w-[390px] lg:w-[900px] xl:w-[900px] max-w-[900px] stroke-gray-300/70">
        <div className="absolute inset-0 translate-x-[180px] translate-y-[800px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>


    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex flex-col relative min-h-screen text-center 
    md:text-left items-center overflow-hidden">
    
    <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

    <div className="flex flex-col md:text-left xl:flex-row gap-8 lg:gap-20 xl:max-w-[100rem] lg:max-w-[80rem] md:max-w-[60rem] md:mt-8 items-center justify-center ">

    
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
    className="mt-8 md:mb-0 w-[90%] h-64 rounded-md object-cover
     md:rounded-lg sm:h-64 mt-24 md:w-[80%] xl:w-[500px] xl:h-[600px]"
    />

    <div className="flex flex-col justify-center items-center">

    <div className="space-y-10 px-2 md:px-10">
      <h4 className="text-xl font-semibold pt-10">
         Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
         
      <p className="text-base">
        {pageInfo?.backgroundInformation}
      </p>
    </div>

    
      
    <Spotlight className="grid gap-8 w-[80%] md:w-[90%] sm:grid-cols-2 sm:grid-rows-2 lg:gap-6 lg:grid-cols-3 lg:grid-rows-1 mt-20 items-center justify-center lg:max-w-5xl group m-3">
    {/* <Spotlight className="flex flex-wrap mt-20 items-start gap-8 lg:max-w-5xl group m-3"> */}
    


      <SpotlightCard>
        <div className="relative bg-[#70808d6f] p-6 h-full rounded-[inherit] z-20 overflow-hidden">
          {/* Radial gradient */}
          {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
          <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div>
          {/* </div> */}
          <div className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="relative">
              <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
              <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
            </div>
            {/* Text */}
            <div className="grow mb-5">
              <h2 className="text-base text-slate-200 font-bold mb-1">Interests</h2>
              <p className="text-sm text-slate-500">M.Sc. Computer Science</p>
              <p className="text-sm text-slate-500">B.Sc. Computer Science</p>
              <p className="text-sm text-slate-500">B.Sc. Business Administration</p>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard>
        <div className="relative bg-slate-900 p-6 h-full rounded-[inherit] z-20 overflow-hidden">
          {/* Radial gradient */}
          {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
          {/* <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div> */}
          {/* </div> */}
          <div className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="relative">
              <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
              <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
            </div>
            {/* Text */}
            <div className="grow mb-5">
              <h2 className="text-base text-slate-200 font-bold mb-1">Interests</h2>
              <p className="text-sm text-slate-500"> Artificial Intelligence | Technology | Drone | Sailing | Travelling | Social Entrepreneurship  </p>
            </div>
          </div>
        </div>
      </SpotlightCard>


      <SpotlightCard>
        <div className="relative bg-slate-900 p-6 h-full rounded-[inherit] z-20 overflow-hidden">
          {/* Radial gradient */}
          {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
          {/* <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div> */}
          {/* </div> */}
          <div className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="relative">
              <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
              <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
            </div>
            {/* Text */}
            <div className="grow mb-5">
              <h2 className="text-base text-slate-200 font-bold mb-1">Experience</h2>
              <p className="text-sm text-slate-500"> Experience in multiple projects ranging from rapid prototyping to AI research  </p>
            </div>
          </div>
        </div>
      </SpotlightCard>

      
    </Spotlight>

    
    
    
    </div>


    </div>
    </motion.div>



    




    
    </div>

    )
}