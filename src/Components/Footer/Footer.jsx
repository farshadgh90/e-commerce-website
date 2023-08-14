import React from 'react'
import logo from '../../assets/images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear()

  return (
    <div>
        <div className='flex justify-items-center'>
            <br className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none' />
        </div>
        <div className='flex flex-col items-center sm:flex sm:flex-row sm:items-center sm:justify-around'>
            <div>
                <img className='h-20' src={logo} alt="logo" />
            </div>
            <div className='text-center'>
                <p className='text-black text-sm font-inter no-underline normal-case'>
                    Copyright © {year} page by Farshad Ghorbani
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer