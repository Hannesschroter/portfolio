import React from 'react'
import Card01 from '@/public/card-01.png'
import Card02 from '@/public/card-02.png'
import Card03 from '@/public/card-03.png'
import Image from 'next/image'
import Icon from './Icon'

interface IconTypeProps {
  size: number;
  color: string;
}
type IconType = (Props: IconTypeProps) => JSX.Element;

type Props = {
  headline: string,
  presentation: string,
  icon: IconType,
}
function ClassCard({headline, icon, presentation}: Props) {
  return (
    <div className="flex flex-col relative">
        <div className="flex flex-col relative rounded-3xl space-y-5 flex-shrink-0 items-center
         bg-gray-400 dark:bg-slate-500 dark:bg-opacity-30 backdrop-filter px-3 backdrop-blur-sm bg-opacity-30 pt-6 px-4 pb-5 mx-3 overflow-hidden shadow-slate-800 shadow-sm max-w-xs">
        {/* <div className="absolute left-0 right-0 mx-auto -translate-y-3/4 inset-0 h-52 w-100 z-2 rounded-full blur-[50px]"></div> */}
        {/* <Image className="inline-flex" src={Card02} width={150} height={150} alt="Card 02" /> */}
        <Icon icon={icon}/>
        <h2 className="text-base tracking-widest font-light text-gray-900 dark:text-gray-200 font-bold mb-1">{headline}</h2>
        <p className="text-sm font-light pl-4 pr-4 pb-4 md:text-center text-gray-900 dark:text-gray-200"> {presentation}</p>
        </div>
    </div>
  )
}

export default ClassCard