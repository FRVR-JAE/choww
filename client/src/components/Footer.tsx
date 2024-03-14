import React from 'react'

const Footer = () => {
  return (
    <div className='bg-red-700 py-10'>
        <div className="flex flex-col container mx-auto md:flex-row justify-between ">
            <span className='text-3xl text-white font-bold tracking-tight '>
                Chow.com
            </span>

            <span className='text-white font-bold tracking-tight flex gap-4'>
                <span>Privacy Policy</span>
                <span>Terms of service</span>
            </span>
        </div>
    </div>
  )
}

export default Footer