import React from 'react'
import { BiTask } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-slate-900 p-5 items-center font-mono text-white'>
                <div className='flex items-center cursor-pointer'><BiTask size={50} color='red' /><div className='m-2 text-3xl font-bold'>TaskMaster</div></div>
                <ul className='flex gap-5 items-center cursor-pointer'>
                    <Link to="/TaskMaster"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
