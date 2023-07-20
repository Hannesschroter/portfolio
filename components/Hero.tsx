import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';



type Props = {
    pageInfo: PageInfo,
}

export default function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: [`Hi, My Name is ${pageInfo.name}.`, "I love Artificial Intelligence", "I love Machine Learning"],
        loop: true,
        delaySpeed: 2000,

    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center bg-transparent justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative rounded-full h-40 w-40 object-cover" 
        src={urlFor(pageInfo.heroImage).url()}
        alt="" /> 
        <div className="z-20">
        <h2 className="relative text-sm uppercase text-gray-500 mt-5 pb-2 tracking-[15px]"> {pageInfo?.role}</h2>
        <h1 className="relative text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className=" relative pt-5">
            <Link  href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#work">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
            
            
            
            
        </div>



        </div>       
    </div>
  )
}