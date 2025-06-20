import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-12'/>
            <p className='w-full md:w-2/3 text-gray-600'></p>
        </div>

        <div>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to = "/delivery">Deliver</Link></li>
                <li><Link to="/about">Privacy Policy</Link></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul>
                <li>+1-234-567-890</li>
                <li>contact@gmail.com</li>
               
            </ul>
        </div>



     
    </div>

       <div className='text-center'>
            <hr />
            <p className='py-5 text-sm text-center'>&copy; 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer