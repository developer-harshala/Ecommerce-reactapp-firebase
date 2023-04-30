import React from 'react'
import { ImGithub } from 'react-icons/im'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { logohg, paymentLogo } from '../assets'

const Footer = () => {
  return (
    <>
      <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
          {/* LogoIcon */}
          <div className='flex flex-col gap-7'>
            <img className='w-32' src={logohg} alt='logo' />
            <p className='text-white text-sm tracking-wide'>
              © hgonlineshop.com
            </p>
            <img className='w-56' src={paymentLogo} alt='paymentLogo' />
            <div className='flex gap-5 text-lg text-gray-400'>
              <ImGithub className='hover:text-white duration-300 cursor-pointer' />
              <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
              <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
              <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
              <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            </div>
          </div>
          {/* Contact us  */}
          <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              Contact us
            </h2>
            <div className='text-base flex flex-col gap-2'>
              <p>Mumbai,Maharashtra,India</p>
              <p>Phone: 00968 24769821</p>
              <p>e-mail: hg.onlineshop@gmail.com</p>
            </div>
          </div>
          {/* profile    */}
          <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
            <div className='text-base flex flex-col gap-2'>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span className='text-lg'>
                  <BsPersonFill />
                </span>
                my account
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span className='text-lg'>
                  <BsPaypal />
                </span>
                checkout
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span className='text-lg'>
                  <FaHome />
                </span>
                order tracking
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span className='text-lg'>
                  <MdLocationOn />
                </span>
                help & support
              </p>
            </div>
          </div>
          {/* Subscribe */}
          <div className='flex flex-col justify-center'>
            <input
              className='bg-transparent border px-4 py-2 text-sm'
              type='text'
              placeholder='e-mail'
            />
            <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
