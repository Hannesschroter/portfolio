import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'
import Circles from './CirclesPulse'

type Props = {
    pageInfo: PageInfo,
}

function Info({pageInfo}: Props) {
    return (

        <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">

        <Circles />

        </div>

        
    
        )
}

export default Info