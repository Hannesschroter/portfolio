import React from 'react'

type Props = {}

function Circles({}: Props) {
  return (
    <>
      <div className="absolute aspect-square md:mt-0 lg:mt-[5%] w-[590px] lg:w-[70%] xl:w-[65%px] max-w-[1300px] stroke-gray-300/70">
        <div className="absolute inset-0 -translate-x-[180px] translate-y-[50px] lg:-translate-y-0 h-full w-full circle_large_solid z-0"></div>
      </div>
      

    </>
    
  )
}

export default Circles