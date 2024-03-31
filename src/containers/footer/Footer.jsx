import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg"

function Footer() {
  return (
    <div className='gpt3__footer section__padding text-white flex flex-col justify-center items-center bg-[var(--color-footer)]'>
      <div className='gpt3__footer-heading w-[100%] text-center mb-12'>
        <h1 className='gradient__text font-extrabold text-[34px] leading-[42px] sm:text-[44px] sm:leading-[50px] md:text-[62px] md:leading-[75px] text-center'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn flex justify-center items-center p-4 border text-center mb-28 sm:mb-40 cursor-pointer'>
        <p className='text-[14px] leading-[20px] sm:text-[18px] sm:leading-[21px] box-border'>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links flex justify-between items-start flex-wrap flex-row w-[100%] text-left'>
        <div className='gpt3__footer-links_logo flex flex-col '>
          <img className='w-[118px] h-[30px] mb-4' src={logo} alt='logo' />
          <p className=' text-[12px] leading-[14px]'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div w-[250px] my-4 mx-0 sm:m-4 flex flex-col justify-start'>
          <h4 className='text-[14px] mb-4 font-bold leading-[16px]'>links</h4>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Overons</a></p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Social Media</a></p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Counters</a></p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Contact</a></p>
        </div>
        <div className='gpt3__footer-links_div w-[250px] my-4 mx-0 sm:m-4 flex flex-col justify-start'>
          <h4 className='text-[14px] mb-4 font-bold leading-[16px]'>Company</h4>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Terms & Conditions</a></p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Privacy Policy</a></p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'><a href='#'>Contact</a></p>
        </div>
        <div className='gpt3__footer-links_div w-[250px] my-4 mx-0 sm:m-4 flex flex-col justify-start'>
          <h4 className='text-[14px] mb-4 font-bold leading-[16px]'>Get in touch</h4>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'>085-132567</p>
          <p className='text-[12px] leading-[14px] my-2 cursor-pointer'>Shehrazali360@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright mt-8 text-center w-[100%]'>
        <p className='text-[12px] leading-[14px] '>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer