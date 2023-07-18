import React from 'react'

type Props = {}

function Circles({}: Props) {
  return (
    <div className="relative flex justify-center items-center mt-20">
      {/* <div className="absolute mask left-1/2 self-center m-auto -top-56 h-[900px] w-[900px] md:h-[1200px] xs:w-[1200px] xs:h-[1200px] md:w-[1200px] xl:h-[1512px] xl:w-[1512px] sm:h-[1070px] sm:w-[1070px] -translate-x-1/3 stroke-gray-300/70 sm:-top-64 sm:-translate-x-1/2 lg:-top-24 lg:ml-12 xl:-top-96 xl:ml-0"> */}
      <div className="absolute mask self-center m-auto -top-52  h-[700px] w-[700px] md:h-[1200px] md:w-[1200px] xl:h-[1512px] xl:w-[1512px] sm:h-[1070px] sm:w-[1070px] stroke-gray-300/70 sm:-top-64 md:-top-72 lg:-top-24 lg:ml-12 xl:-top-96 xl:ml-0">

        <div className="absolute inset-0 h-full w-full circle_large z-0"></div>
        <div className="absolute inset-0 h-4/6 w-4/6 circle_small z-10 self-center m-auto"></div>

      </div>
      

    </div>
    
  )
}

export default Circles