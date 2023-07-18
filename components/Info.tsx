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
        words: [`Hi, My Name is ${pageInfo.name}.`, "I love Artificial Intelligence", "I love Machine Learning"],
        loop: true,
        delaySpeed: 2000,

    });
    return (

        <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

        <Circles />
        <img className="relative rounded-full h-40 w-40 object-cover" 
        src={urlFor(pageInfo.heroImage).url()}
        alt="" /> 
        <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-10"> {pageInfo?.role}</h2>
        <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-10 mt-5">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className="pt-14">
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

export default Info