import { PageInfo } from '@/typings';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { PiMapPinFill } from 'react-icons/pi';


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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center" >
                I have got just what you need.{" "}
                <span className="decoration-[#F7AB0A]/50 underline"> Let&apos;s talk</span>
            </h4>
            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <AiOutlinePhone className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">{pageInfo.phoneNumber}</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <AiOutlineMail className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">{pageInfo.email}</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <PiMapPinFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">Heidelberg</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')}placeholder="Email" className="contactInput" type="email" />
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
  );
}

export default Contact;