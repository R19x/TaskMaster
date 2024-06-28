import React from 'react'
import { BiTask } from "react-icons/bi";

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-slate-900 p-5 items-center font-mono text-white'>
                <div className='flex items-center cursor-pointer'><BiTask size={50} color='red' /><div className='m-2 text-3xl font-bold'>TaskMaster</div></div>
            </nav>
        </div>
    )
}

export default Navbar
