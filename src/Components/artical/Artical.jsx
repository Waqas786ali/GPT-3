import React from 'react'
import "./artical.css";

function Artical({imgUrl,date,title}) {
  return (
    <div className='gpt3__blog-container_artical w-[100%] h-[100%] flex flex-col bg-[var(--color-footer)] '>
      <div className='gpt3__blog-container_artical-image w-[100%] h-[100%]  bg-[var(--color-footer)]'>
        <img className='w-[100%] h-[100%]' src={imgUrl} alt='blog' />
      </div>
      <div className='gpt3__blog-container_artical-content flex flex-col justify-between py-4 px-6 h-[100%]'>
        <div>
          <p className='text-[11.649px] leading-[35px] text-white font-bold'>{date}</p>
          <h3 className=' mb-20 cursor-pointer font-extrabold text-[18px] leading-[25px] sm:text-[25.11px] sm:leading-[30px] text-white'>{title}</h3>
        </div>
        <p className=' cursor-pointer text-[11.649px] leading-[35px] text-white font-bold'>Read Full Artical</p>
      </div>
    </div>
  )
}

export default Artical