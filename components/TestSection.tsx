import React from 'react'
import Spotlight, { SpotlightCard } from './Spotlight'
import Image from 'next/image'
import Card01 from '@/public/card-01.png'
import Card02 from '@/public/card-02.png'
import Card03 from '@/public/card-03.png'
import { InputSpotlightBorderCSS } from './SpotCard'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'

type Props = {
  pageInfo: PageInfo,
}

function TestSection({pageInfo}: Props) {
  return (
    <div>

    
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-8 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

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
    className="-mb-20 md:mb-0 flex-shrink-0 w-4/5 h-1/4 rounded-xl  object-cover
     md:rounded-lg md:w-95 md:h-64 xl:w-[500px] xl:h-[600px]"
    />








    <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold">
         Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
         
      <p className="text-base">
        {pageInfo?.backgroundInformation}
      </p>


    </div>

    </motion.div>





    <div className="min-h-screen h-fit flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      
      <Spotlight className="grid gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:gap-6 lg:grid-cols-3 lg:grid-rows-1 items-start lg:max-w-5xl group m-5">
  <SpotlightCard>
    <div className="relative h-full bg-slate-900 p-2 rounded-[inherit] z-20 overflow-hidden">
      {/* Radial gradient */}
      {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
      {/* <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div> */}
      {/* </div> */}
      <div className="flex flex-col h-full items-center text-center">
        {/* Image */}
        <div className="relative">
          <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
          <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
        </div>
        {/* Text */}
        <div className="grow mb-5">
          <h2 className="text-xl text-slate-200 font-bold mb-1">Education</h2>
          <p className="text-base text-slate-500">M.Sc. Computer Science</p>
          <p className="text-base text-slate-500">B.Sc. Computer Science</p>
          <p className="text-base text-slate-500">B.Sc. Business Administration</p>
        </div>
      </div>
    </div>
  </SpotlightCard>

  <SpotlightCard>
    <div className="relative h-full bg-slate-900 p-2 rounded-[inherit] z-20 overflow-hidden">
      {/* Radial gradient */}
      {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
      {/* <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div> */}
      {/* </div> */}
      <div className="flex flex-col h-full items-center text-center">
        {/* Image */}
        <div className="relative">
          <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
          <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
        </div>
        {/* Text */}
        <div className="grow mb-5">
          <h2 className="text-xl text-slate-200 font-bold mb-1">Interests</h2>
          <p className="text-base text-slate-500"> Artificial Intelligence | Technology | Drone | Sailing | Travelling | Social Entrepreneurship  </p>
        </div>
      </div>
    </div>
  </SpotlightCard>
  <SpotlightCard>
    <div className="relative h-full bg-slate-900 p-2 rounded-[inherit] z-20 overflow-hidden">
      {/* Radial gradient */}
      {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true"> */}
      {/* <div className="absolute inset-0 left-0 right-0 m-auto -translate-y-full h-48 w-52 translate-z-0 bg-slate-50 rounded-full blur-[140px]"></div> */}
      {/* </div> */}
      <div className="flex flex-col h-full items-center text-center">
        {/* Image */}
        <div className="relative">
          <div className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[30%] blur-[80px] -z-10 rounded-full bg-slate-50" aria-hidden="true"></div>
          <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
        </div>
        {/* Text */}
        <div className="grow mb-5">
          <h2 className="text-xl text-slate-200 font-bold mb-1">Experience</h2>
          <p className="text-base text-slate-500"> Experience in multiple projects ranging from rapid prototyping to AI research</p>
        </div>
      </div>
    </div>
  </SpotlightCard>

  
  
</Spotlight>


{/* <InputSpotlightBorderCSS /> */}
    
    
    
    </div>
    </div>
  )
}

export default TestSection