import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 items-center h-[5rem] bg-cyan-600'>
            <div className="grid place-items-center text-3xl font-bold">
                LOGO
            </div>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/service">
                    <li>Service</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
            <div className="flex gap-2">
                <button className='p-2 px-4 rounded-md bg-red-500'>Login</button>
                <button className='p-2 px-4 rounded-md bg-blue-500'>Signup</button>
            </div>
        </nav>
    )
}

export default Navbar