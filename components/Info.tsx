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

        <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

        <Circles />
        {/* <div className="text-1xl absolute items-center">
            HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </div> */}
        

        </div>

        
    
        )
}

export default Info