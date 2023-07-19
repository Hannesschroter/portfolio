import React from 'react'
import Spotlight, { SpotlightCard } from './Spotlight'
import Image from 'next/image'
import Card01 from '@/public/card-01.png'
import Card02 from '@/public/card-02.png'
import Card03 from '@/public/card-03.png'
import { InputSpotlightBorderCSS } from './SpotCard'

type Props = {}

function TestSection({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      
      <Spotlight className="grid gap-3 grid-cols-2 grid-rows-2 lg:gap-6 lg:grid-cols-3 lg:grid-rows-1 items-start lg:max-w-5xl group m-5">
  <SpotlightCard>
    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
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
    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
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
    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
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
          <p className="text-base text-slate-500"></p>
          <p className="text-base text-slate-500">Credit-Suisse</p>
          <p className="text-base text-slate-500">Enactus</p>
        </div>
      </div>
    </div>
  </SpotlightCard>

  
  
</Spotlight>


{/* <InputSpotlightBorderCSS /> */}
    
    
    
    </div>
  )
}

export default TestSection