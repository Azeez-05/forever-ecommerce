import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row shadow-sm'>
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-violet-400/25">  
        {/* <h1 className='text-9xl text-amber-300'>2qwer</h1> */}
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm '>DISCOVER</p>
                </div>
                <h1 className='text-violet-700 text-3xl sm:py-1 lg:text-5xl leading-relaxed prata-regular'>The Best</h1>
                <div className='flex items-center gap-2'>
                    <Link to="/collection" className='font-medium text-sm'>{"SHOP NOW >>"}</Link>
                    {/* <a className='font-medium text-sm'>SHOP NOW</a> */}
                    {/* <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> */}
                </div>
            </div>
        </div>
        {/* Hero Right Side */}
            <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero