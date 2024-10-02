import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState()
    const [token, setToken] = useState(true)

    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between text-sm mb-5 py-4 border-b border-b-gray-400'>
            <NavLink to='/'>
                <p className='text-xl font-bold cursor-pointer'>Appointment</p>
            </NavLink>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>
                        Home
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>
                        Doctors
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>
                        About
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>
                        Contact
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            {
                token ? (
                    <div className='flex items-center gap-2 group cursor-pointer relative'>
                        <img src={assets.profile_pic} alt="" className='w-8 rounded-full ' />
                        <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block'>Create Account</button>
            }
        </div>
    )
}

export default NavBar
