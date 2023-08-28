import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'
import Circles from './Circles'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

type Props = {
    pageInfo: PageInfo,
}

function Info({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: [`Hi, My Name is ${pageInfo.name}.`, "I love entrepreneurial Data Science."],
        loop: true,
        delaySpeed: 2000,

    });
    return (

        <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

        <Circles />
        {/* <img className="relative rounded-full mt-[15%] sm:mt-[20%] md:mt-[12%] lg:mt-[0%]  h-40 w-40 object-cover"  */}
        <img className="relative sm:mt-[20%] md:mt-[10%] lg:mt-[0%] h-32 w-32 sm:h-36 sm:w-36 md:h-48 md:w-48 rounded-full object-cover object-top"
        src={urlFor(pageInfo.heroImage).url()}
        alt="" /> 
        <div className="z-10 flex flex-col gap-4">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] mt-10"> {pageInfo?.role}</h2>
        <h1 className="text-2xl min-h-[64px] md:min-h-[82px] px-1 font-semibold text-slate-700 dark:text-slate-200 scroll-px-10 mt-1">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>


        <div className="mt-4">
        <a href='/public/CV_2023.pdf' download className="border border-[#F7AB0A] text-sm text-gray-600 rounded-full px-3 py-2 mt-20 bg-slate-100 backdrop-blur-sm backdrop-filter bg-opacity-20 hover:bg-[#F7AB0A] dark:bg-gray-600 dark:text-gray-50 dark:bg-opacity-20 dark:hover:bg-[#F7AB0A] hover:text-gray-50">Download CV</a>
        </div>
        

        {/* <div className="pt-8">
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
            
            
            
            
        </div> */}



        </div>       
        

        </div>

        
    
        )
}

export default Info