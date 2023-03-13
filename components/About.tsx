import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

    <motion.img
    initial={{
      x: -200,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{ opacity:1, x:0}}
    viewport={{once:true}}
    src="/sail.png" 
    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full  object-cover
     md:rounded-lg md:w-95 md:h-64 xl:w-[500px] xl:h-[600px]"
    />

    <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold">
         Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
         
      <p className="text-base">

        I am happy you found the way to my personal website! 
        <br />

        For years, I have been interested in the development of artificial intelligence. I started to study business administration at the LMU Munich to gain a feeling for the value-creating potential that modern technologies can deliver.  
        Diving deeper into that topic I felt the desire to not only being able to understand but also to apply those modern technologies. 
        To get an in-depth understanding of the opportunities and boundaries they incorporate I studied Informatics with a focus on Artificial Intelligence, Machine Learning and Natural Language Processing.
        Personally, I think that AI can deliver great value. Especially in the areas of Natural Language Processing and Augmented Reality. Nevertheless it is crucial to connect with customers & users to meet their demands. By making black models explainable (explainableAI) we will be able to exploit the full potential of these technologies and deliver great value to our society! </p>


    </div>

    </motion.div>

    )
}