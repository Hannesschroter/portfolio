import React from 'react'
import Card01 from '@/public/card-01.png'
import Card02 from '@/public/card-02.png'
import Card03 from '@/public/card-03.png'
import Image from 'next/image'


type Props = {}

function ClassCard({}: Props) {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col relative rounded-3xl space-y-5 flex-shrink-0 items-center max-w-xs max-h-90
         bg-slate-500 backdrop-filter px-3 backdrop-blur-sm bg-opacity-10 pt-6 px-4 pb-5 mx-3 overflow-hidden shadow-slate-700 shadow-md">
        {/* <div className="absolute left-0 right-0 mx-auto -translate-y-3/4 inset-0 h-52 w-100 z-2 rounded-full blur-[50px]"></div> */}
        <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" />
        <h2 className="text-base tracking-widest font-light text-slate-200 font-bold mb-1">Experience</h2>
        <p className="text-sm font-light pl-4 pr-4 pb-4"> This is a short paragraph about me and the content of my projects, We will see how it turns out and if the design is a valid alternatve. We will check how this text wraps or if it enlarges his parent container</p>
        </div>
    </div>
  )
}

export default ClassCard