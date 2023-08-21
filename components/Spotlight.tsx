import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation} from "framer-motion";
import styled from "styled-components";



const variants = {
  visible: { opacity: 1, scaleX: 2.25, transition: { duration: 1.5 } },
  hidden: { opacity: 0.2, scaleX: 0.8, transition:{ duration: 1.5} }
};
function Spotlight() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {margin: "-200px 0px -200px 0px"});
  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden")
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className=""
    >
      <div className="flex flex-col relative min-h-full">
        <div className="grid min-h-full relative grid-cols-2 grid-rows-1 group hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 z-0 ">
        {/* <div className="h-[600px] top-0 bottom-0 relative min-h-full w-[100%] bg-[conic-gradient(from_90deg_at_80%_2%,#76abcf_0%,#000212_57%)]"> */}
        <div className="h-[600px] top-0 bottom-0 relative min-h-full w-[100%] bg-[radial-gradient(at_130%_-30%,rgba(0,0,0,0)_40%,rgba(41,41,41,0.3)_60%,rgba(41,41,41,1)_73%),conic-gradient(from_90deg_at_80%_2%,#76abcf_0%,#000212_57%)]">

        </div>
        {/* <div className="h-[600px] top-0 bottom-0 relative min-h-full bg-[conic-gradient(from_270deg_at_20%_2%,#000212_43%,#76abcf_100%)]"> */}
        <div className="h-[600px] top-0 bottom-0 relative min-h-full bg-[radial-gradient(at_-30%_-30%,rgba(0,0,0,0)_40%,rgba(41,41,41,0.3)_60%,rgba(41,41,41,1)_73%),conic-gradient(from_270deg_at_20%_2%,#000212_43%,#76abcf_100%)]">
        
        </div>            
      </div>
        
      {/* <div className="grid min-h-full relative -mt-[600px] grid-cols-2 grid-rows-1 group opacity-40 hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 z-10 ">
        <div className="h-[600px] top-0 bottom-0 absolute min-h-full w-[100%] bg-gradient-to-b from-transparent to-red-400">
        </div>
        <div className="h-[600px] top-0 bottom-0 absolute min-h-full bg-gradient-to-b from-transparent to-blue-400">
        </div>            
      </div> */}

      </div>
             {/* <div className="grid min-h-full relative grid-cols-2 grid-rows-1 group opacity-40 hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 "> */}
        {/* <div className="top-0 bottom-0 absolute w-full grid grid-cols-2 grid-rows-1">
            <div className="top-0 bottom-0 relative min-h-full w-[100%] bg-red-500"></div>
            <div className="top-0 bottom-0 relative min-h-full bg-blue-500"></div>

        </div>  */}


      

    </motion.div>
  );
}

export default Spotlight;

// const variants = {
//   hidden: {opacity:0, scaleX: 1},
//   visible: {opacity:1, scaleX:1.5}
// };

// const StyledDiv = styled(motion.div)`
// transform-origin: 0 0;
// `;

// type Props = {

// }

// function Spotlight({}: Props) {
//   // const ref = useRef(null);
//   const [ref, isInView] = useInView({  margin: "100px 0px 100px 0px"
// });
//   const mainControls = useAnimation();
 

//   useEffect(() => {
//     console.log(isInView);
//     if (isInView) {
//       mainControls.start("visible");  
//     } else {
//       mainControls.start("hidden");
//     }
//   }, [isInView, mainControls]);

//   return (
//     // <div className="relative min-h-full">
//     //   <div className="grid min-h-full relative grid-cols-2 grid-rows-1 group opacity-40 hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 ">
//     //   <div className="h-[600px] top-0 bottom-0 relative min-h-full w-[100%] bg-[conic-gradient(from_90deg_at_80%_2%,#76abcf_0%,#000212_57%)]">
//     //   </div>
//     //   <div className="h-[600px] top-0 bottom-0 relative min-h-full bg-[conic-gradient(from_270deg_at_20%_2%,#000212_43%,#76abcf_100%)]">
//     //   </div>            
//     // </div>

//     // {/* <div className="relative -mt-[500px] w-full md:mt-[25.2rem] md:mb-[12.8rem]">
//     //   {children}
//     // </div> */}

//     // </div>


//     <div ref={ref}>
//       <StyledDiv animate="show" variants={variants} initial="hide">

      

//       <motion.div 
//           variants={
//             // hidden: {opacity:0, scale: 0.5},
//             // visible: {opacity:1, scale:1}
//             variants
//           }
          
//           initial="hidden"
//           animate={mainControls}
//           transition={{ duration:2, delay:0.5 }}
//           // whileHover={{ scaleX: 1.2 }}
//           // style={{x:100}}

//           >
//           {/* <div className="h-16 w-[100%] bg-[#FF0000]"></div> */}

//           <div className="min-h-full w-[100%]">
//             {/* <div className="grid min-h-full relative grid-cols-2 grid-rows-1 group opacity-40 hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 "> */}
//             <div className="grid min-h-full relative grid-cols-2 grid-rows-1 group opacity-40 hover:opacity-80 hover:scale-x-125 ease-in-out transform transition duration-700 ">
//             <div className="h-[600px] top-0 bottom-0 relative min-h-full w-[100%] bg-[conic-gradient(from_90deg_at_80%_2%,#76abcf_0%,#000212_57%)]">
//             </div>
//             <div className="h-[600px] top-0 bottom-0 relative min-h-full bg-[conic-gradient(from_270deg_at_20%_2%,#000212_43%,#76abcf_100%)]">
//             </div>            
//           </div>

//           {/* <div className="relative -mt-[500px] w-full md:mt-[25.2rem] md:mb-[12.8rem]">
//             {children}
//           </div> */}

//           </div>


//           </motion.div>
//           </StyledDiv>
          

//           </div>

          
          
          
//         )
//       }

// export default Spotlight