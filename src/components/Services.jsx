import React from "react";
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';  

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className='flex flex-row justify-start mt-[10px] mb-[10px]  items-center white-glassmorphism hover:scale-110 transition-all duration-300 ease-in-out p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h3 className='mt-2 text-white text-lg'>{title}</h3>
            <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
        <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex  flex-col justify-start items-start'>
                    <h1 className='text-white text-4xl sm:text-5xl py-2 text-gradient'>
                        Services that we
                        <br />
                        continue to optmize
                    </h1>
                    <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base text-gradient">
                        The best choice for buying and selling your crypto assets, with the
                        various super friendly services we offer
                    </p>
                </div>
            
            <div className='flex-1 flex-col w-full justify-start items-center'>
                <ServiceCard 
                    color='bg-[#2952E3]'
                    title='Security is Guaranteed'
                    icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle='Experience true decentralization with our peer-to-peer Ethereum sending platform'
                />
                <ServiceCard 
                    color='bg-[#8945f8]'
                    title= 'Send Ethereum with just a few clicks'
                    icon={<BiSearchAlt fontSize={21} className='text-white' />}
                    subtitle='Say goodbye to high fees and slow transaction times - our solution is fast and affordable'
                />
                <ServiceCard 
                    color='bg-[#F84550]'
                    title='Fastest Transactions on the Blockchain'
                    icon={<RiHeart2Fill fontSize={21} className='text-white' />}
                    subtitle='Optimize technology on your favor'
                />
            </div>
        </div>
    </div>
    );
};

export default Services;