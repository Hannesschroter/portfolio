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

function TestSection({pageInfo}: Props) {
  return (
    <div className="flex flex-col relative min-h-screen text-center justify-evenly items-center">
      <div className="absolute aspect-square sm:w-[600px] md:w-[800px] lg:mt-[5%] w-[390px] lg:w-[900px] xl:w-[900px] max-w-[900px] stroke-gray-300/70">
        <div className="absolute inset-0 translate-x-[180px] translate-y-[800px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
    </div>
    <div className=" relative flex flex-wrap items-center justify-center gap-8">
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </div>

    </div>
  )
}

export default TestSection