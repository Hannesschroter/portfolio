import React from 'react'

type Props = {}

function Circles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute left-1/2 top-4 md:h-[1512px] md:h-[1512px] xl:w-[1512px] sm:h-[1100px] sm:w-[1100px] -translate-x-1/3 stroke-gray-300/70 mask-image:linear-gradient(to_bottom, red,transparent_10%) sm:-top-64 sm:-translate-x-1/2 lg:-top-24 lg:ml-12 xl:-top-96 xl:ml-0">

        <div className="absolute inset-0 h-full w-full circle_large z-0"></div>
        <div className="absolute inset-0 h-4/6 w-4/6 circle_small z-10 self-center  m-auto"></div>

      </div>
      

    </div>
    
  )
}

export default Circles