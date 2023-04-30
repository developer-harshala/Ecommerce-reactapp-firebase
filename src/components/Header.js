import React from 'react'
import { logohg, cartImg } from '../assets/index'

const Header = () => {
  return (
    <>
      <div className='w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <div>
            <img
              src={logohg}
              alt='logo'
              style={{ height: '78px', width: '150px' }}
            />
          </div>
          <div className='flex item-center gap-8'>
            <ul className='flex item-center gap-8'>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Home
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Pages
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Shop
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Element
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Blog
              </li>
            </ul>
            <div className='relative'>
              <img className='w-6' src={cartImg} alt='cartImg' />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
                0
              </span>
            </div>
            <img
              className='w-8 h-8 rounded-full'
              src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='userLogo'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header