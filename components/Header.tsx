import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
import { fetchSocials } from '@/utils/fetchSocials';
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'
import useColorMode from '@/hooks/useColorMode';


type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  // const [socialRes, setSocialRes] = useState<Social[]>([])
  
  
  // useEffect(() => {
  //   (async () => {
  //     const tmp = await fetchSocials();
  //     setSocialRes(tmp);
  //     console.log(tmp)
  //   })();
  //   // Update the document title using the browser API
  // }, []);

  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="top-0 p-2 flex bg-opacity-0 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{ 
          x: -500,
          opacity: 0,
          scale: 0.5
         }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}

        className="flex flex-row items-center">
            {/* Social Icons */}
            
            {socials?.map((social) =>(
              <SocialIcon
              key={social._id}
              url={social.url} 
              fgColor="gray"
              bgColor="transparent" 
              />
            ))}

            
        </motion.div>

      {/* <Link href="#contact"> */}
        <motion.div 
        initial={{ 
          x: 500,
          opacity: 0,
          scale: 0.5
 
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer">

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
          </button>



          {/* <FiSun className="sun cursor-pointer"/>
          <BsMoon className="moon cursor-pointer"/> */}
          <SocialIcon 
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
          />
        <a href="#contact" className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </a>
            
        </motion.div>
      {/* </Link> */}
    </header>
  )
}