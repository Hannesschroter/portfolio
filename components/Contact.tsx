import { PageInfo } from '@/typings';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { PiMapPinFill } from 'react-icons/pi';
import { Features } from './features';
import  Spotlight  from './Spotlight';


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {
    pageInfo: PageInfo;
};

function Contact({pageInfo}: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:hannes@schroter.biz?subject=${formData.subject}&body=Hi, my Name is ${formData.name}. ${formData.message}`;

    };



  return (
        
        <div className="relative min-h-screen">
        {/* <div className="h-[40rem] w-[100%] bg-red-500">
            {/* <Spotlight /> */}
        {/* </div> */}
            
            
        {/* <Features color="255,255,255" colorDark="100,204,255"> */}
        <div className="relative flex flex-col">
        <div className="relative z-10 text-center">
        <h3 className=" relative mt-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">Contact</h3>
        <div className="flex flex-col space-y-10 justify-center items-center mt-10 text-gray-500 dark:text-gray-100">
            

            
            <h3 className="mt-10 uppercase tracking-[3px]" >
                Get in Touch!
            
            </h3>
            <div className="space-y-2 ">
                <div className="uppercase tracking-[3px] flex space-x-5">
                    <AiOutlinePhone className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>{pageInfo.phoneNumber}</p>
                </div>

                <div className="uppercase tracking-[3px] flex space-x-5">
                    <AiOutlineMail className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>{pageInfo.email}</p>
                </div>

                <div className="uppercase tracking-[3px] flex space-x-5">
                    <PiMapPinFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>Heidelberg</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[95%] md:w-fit">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 w-full">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />
                <button 
                type="submit" 
                className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
                text-lg">
                    Submit
                </button>

            </form>
            </div>

        </div>

        </div>

        {/* </Features> */}
        
    </div>

    
       
    
    
  );
}

export default Contact;