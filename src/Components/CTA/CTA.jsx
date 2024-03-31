import React from 'react'
import './cta.css'

function 
Cta() {
  return (
    <div className='gpt3__cta my-16 mx-8 flex justify-between items-center flex-col sm:flex-row p-8 sm:m-16 rounded bg-[var(--gradient-bar)]'>
      <div className='gpt3__cta-content'>
      <p className=' font-medium text-[12px] leading-[30px] text-[#0E0E0E]'>Request Early Access to Get Started</p>
      <h3 className=' font-extrabold text-[18px] leading-[32px] sm:text-[24px] sm:leading-[45px] text-[#000000]'>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-button flex justify-center items-center mt-8 sm:mt-0 ml-0 sm:ml-8'>
        <button className='text-white py-2 px-4 border-none cursor-pointer outline-none min-w-[150px] bg-[#000000] rounded-[40px] font-bold text-[14px] leading-[28px] sm:text-[18px] sm:leading-[30px] '>Get Started</button>
      </div>
    </div>
  )
}

export default Cta