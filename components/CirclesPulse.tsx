import React from 'react'

type Props = {}

function Circles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute left-1/2 top-2 h-[1512px] w-[1512px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom, red_80%,transparent_10%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">

        <div className="absolute inset-0 h-full w-full circle_large z-0"></div>
        <div className="absolute inset-0 h-4/6 w-4/6 circle_small z-10 self-center  m-auto"></div>

      </div>
      

    </div>
    
  )
}

export default Circles