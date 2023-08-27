import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
import { fetchSocials } from '@/utils/fetchSocials';
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineIdcard, AiOutlineCode, AiOutlineBulb, AiOutlineUser} from 'react-icons/ai'
import useColorMode from '@/hooks/useColorMode';



type Props = {
}

export default function Navbar({ }: Props) {


  const [colorMode, setColorMode] = useColorMode();

  return (
    <nav className="fixed flex flex-col bottom-5 w-full items-center justify-center z-30">
      <motion.div
      // initial={{ 
      //   y: 300,
      //   opacity: 0,

      //  }}
      // animate={{
      //   y: 0,
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 1.5,
      // }}

      className="w-[99%] p-2 text-xl bg-gray-600 px-2 bg-opacity-20 backdrop-blur-sm backdrop-filter rounded-full flex flex-row gap-1 text-gray-800 dark:text-gray-500 items-center justify-center">
         
         {/* <Link  href="#info"><AiOutlineHome/></Link>
         
         <Link href="#about"><AiOutlineUser/></Link>
         <Link href="#workexperience"><AiOutlineCode/></Link>
         <Link href="#skills"><AiOutlineBulb/></Link>
         <Link href="#contact"><AiOutlineIdcard/></Link>
         <button id="theme-toggle" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} type="button"
            className={`${colorMode==="dark" ? 'text-gray-500' : 'text-gray-500'} text-sm p-2`}>
            <svg id="theme-toggle-dark-icon"
                className={`${colorMode==='dark' ? 'hidden' : ''} w-5 h-5`} fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon"
                className={`${colorMode==='dark' ? '' : 'hidden'} w-5 h-5`} fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button> */}
            <Link  href="#info">
            <button className="navbarButton">Home</button>
            </Link>
            <Link  href="#about">
            <button className="navbarButton">About</button>
            </Link>
            <Link href="#workexperience">
            <button className="navbarButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="navbarButton">Skills</button>
            </Link>
            <Link href="#contact">
            <button className="navbarButton">Contact</button>
            </Link>


      </motion.div>
      
    </nav>
  )
}