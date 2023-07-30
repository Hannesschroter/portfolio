import React from 'react'


interface IconTypeProps {
    size: number;
    color: string;
  }
  
  type IconType = (props: IconTypeProps) => JSX.Element;


type Props = {
    icon: IconType
}

function Icon({icon}: Props) {
  return (
    <div className="flex relative items-center justify-center ">
        <div className="bg-gray-800 bg-opacity-20 shadow-sm shadow-slate-900  rounded-[50%] shadow-sm aspect-square flex">
            <div className="bg-gray-800 bg-opacity-40 shadow-sm shadow-slate-900 rounded-[50%] m-3 aspect-square flex">
                <div className="bg-slate-800 shadow-sm shadow-slate-900 bg-opacity-60 rounded-[50%] m-3 aspect-square flex">
                    <div className="m-4 aspect-square animate-pulse">
                        {React.createElement(icon, { size: 40, color: '#F3F4F6' })}
                    </div>

                </div>
            </div>

        </div>

    </div>
    
  )
}

export default Icon