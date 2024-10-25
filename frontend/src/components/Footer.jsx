import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='w-40 mb-5' src={assets.logo} alt="" />
          <p className='w-full leading-6 text-gray-600 md:w-2/3'>At Prescripto, we connect you with highly qualified and experienced doctors from various specialties. Our trusted network of medical professionals includes certified practitioners, specialists, and surgeons with years of expertise in providing top-notch healthcare. Whether you need a general consultation, a specialist advice, or ongoing care, Prescripto ensures you have access to the best medical services from the comfort of your home.</p>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+99 999 999 999</li>
            <li>arthur.shak19@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
