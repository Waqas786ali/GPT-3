import React from 'react'
import './feature.css'

function Feature({ title, text }) {
  return (
    <div className='gpt3__features-container__feature  w-[100%] flex justify-between items-start flex-row my-1 mx-0 sm:m-4 '>
      <div className='flex-[1] max-w-[180px] mr-8 gpt3__features-container__feature-title'>
        <div className='line mb-1 w-[38px]  h-[3px] bg-[var(--gradient-bar)]  ' />
        <h1 className='text-[14px] leading-[22px] sm:text-[18px] sm:leading-[24px] text-[#fff] font-extrabold  '>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text flex-[2] justify-end  flex '>
        <p className=' max-w-[390px]   font-medium text-[12px] leading-[20px] sm:text-[14px] sm:leading-[24px] text-[var(--color-text)]'>{text}</p>
      </div>
    </div>
  )
}

export default Feature