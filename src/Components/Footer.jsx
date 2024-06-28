import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-slate-900 p-5 text-white flex text-center gap-2'>
      <FaRegCopyright size={10} /><div>2024, Rahul Gupta</div>
    </div>
  )
}

export default Footer
