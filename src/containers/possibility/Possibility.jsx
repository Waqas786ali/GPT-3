import React from 'react'
import './possibility.css'

import PossibilityImage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='gpt3__possibility flex flex-col lg:flex-row  section__padding' id='possibility'>
      <div className='gpt3__possibility-image flex-1 flex justify-start items-center my-4 lg:my-0 mr-0 lg:mr-8'>
        <img className='w-[100%] h-[100%]' src={PossibilityImage} alt='PossibilityImage' />
      </div>
      <div className='gpt3__posssibility-content flex-1 flex flex-col justify-end items-start mt-8 lg:mt-0'>
        <h4 className=' font-medium text-[16px] leading-[30px] text-[var(--color-text)]'>Request Early Access to Get Started</h4>
        <h1 className='my-4 font-extrabold text-[34px] leading-[45px]  gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='text-[16px] leading-[30px] text-[--color-text] mb-8'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className=' font-medium text-[16px]  leading-[30px] text-[var(--color-subtext)]'>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility