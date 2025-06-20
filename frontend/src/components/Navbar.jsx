import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const [visible, setVisible] = React.useState(false);
  return (
    <div className='flex justify-between items-center font-medium py-4'>
        <Link to='/'>  <img src={assets.logo} alt="" className='w-36' /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink className ='flex flex-col items-center gap-1' to="/">
                <p >Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-violet-700 hidden'/>
            </NavLink>
             <NavLink className ='flex flex-col items-center gap-1' to="/collection">
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-violet-700 hidden'/>
            </NavLink>
             <NavLink className ='flex flex-col items-center gap-1' to="/about">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-violet-700 hidden'/>
            </NavLink>
             <NavLink className ='flex flex-col items-center gap-1' to="/contact">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-violet-700 hidden'/>
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <img src={assets.search_icon} alt="" className='w-5 h-5 cursor-pointer'/>

            <div className="group relative">
                <img src={assets.profile_icon} alt="" className='w-5 h-5 cursor-pointer'/>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="bg-white shadow-lg rounded-lg w-40">
                        <ul className='flex flex-col gap-2 p-4'>
                            <NavLink to="/login" className='text-sm text-gray-700 hover:text-violet-700'>Login</NavLink>
                            <NavLink to="/cart" className='text-sm text-gray-700 hover:text-violet-700'>Cart</NavLink>
                            <NavLink to="/orders" className='text-sm text-gray-700 hover:text-violet-700'>Orders</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} alt="" className='w-5 h-5 cursor-pointer'/>
                    <span className='absolute -bottom-2 -right-2 bg-violet-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>{}</span>
            </Link>
            <img src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden 'onClick={()=>setVisible(true)}/>
        </div>

        {/* Sidebar Menu for smaller display */}
        <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'} z-50`}>
            <div className="flex justify-end p-4">
                <img src={assets.dropdown_icon} alt="" className='w-2 cursor-pointer' onClick={()=>setVisible(false)}/>
            </div>
            <ul className='flex flex-col gap-5 text-lg text-gray-700'>
                <NavLink to="/" onClick={()=>setVisible(false)}  className='hover:text-violet-700 '>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/collection" onClick={()=>setVisible(false)} className='hover:text-violet-700 '>
                    <p>Collection</p>
                </NavLink>
                <NavLink to="/about" onClick={()=>setVisible(false) } className='hover:text-violet-700 '>
                    <p>About</p>
                </NavLink>
                <NavLink to="/contact" onClick={()=>setVisible(false)} className='hover:text-violet-700 '>
                    <p>Contact</p>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar