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
import ClassCard from './ClassCard'


type Props = {
  pageInfo: PageInfo,
}

function Presentation({pageInfo}: Props) {
  return (
    <div className="flex flex-col relative min-h-screen text-center justify-evenly items-center">

      <div className="absolute aspect-square sm:w-[800px] md:w-[1000px] lg:mt-[5%] w-[590px] lg:w-[1100px] xl:w-[1100px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 -translate-x-[180px] translate-y-[50px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>

    
    <div className="flex flex-col relative justify-center items-center gap-10 ">
      <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">About Me</h3>

      <div className="flex flex-col relative overflow-hidden rounded-3xl space-y-5 items-center
      bg-slate-500 backdrop-filter p-8 backdrop-blur-sm bg-opacity-10 shadow-slate-700 shadow-md ">

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      
      className="flex flex-col relative xl:flex-row gap-20 xl:gap-10 text-center 
      md:text-left items-center justify-center lg:max-w-[95%] xl:max-w-[80%]">


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
      className="md:mb-0 w-[90%] h-80 rounded-md object-cover
      md:rounded-lg sm:h-64 mt-8 md:w-[80%] xl:w-[500px] xl:h-[600px]"
      />

      <div className="flex flex-col gap-8 relative items-center">
        <p className="text-base px-8">
          {pageInfo?.backgroundInformation}
        </p>
      

        {/* <div className=" relative flex flex-wrap items-center justify-center gap-8"> */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:gap-6 lg:grid-cols-3 lg:grid-rows-1 items-center justify-center lg:max-w-5xl group">
          
                <ClassCard />
                <ClassCard />
                <ClassCard />
        </div>

      </div>

      


      </motion.div>


      </div>

      
    
    
   
    
    </div>

    </div>
  )
}

export default Presentation