import React from 'react'
import './header.css'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
  return (
    <section className='gpt3__header flex flex-col lg:flex-row section__padding' id='home'>
      <div className='gpt__header-content flex  flex-[1] justify-center items-start flex-col mr-[3rem] lg:mr-20'>
        <h1 className='gradient__text leading-[60px] text-[48px] sm:text-[62px] sm:leading-[75px] font-extrabold '>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p className='font-normal text-[16px] leading-[24px] sm:text-[20px] sm:leading-[27px] text-[var(--color-text)] mt-6 '>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input w-[100%] my-8 ml-4 flex '>
          <input className='flex-[2] w-[100%] min-h-[50px] text-[16px] leading-[24px] sm:text-[20px] sm:leading-[27px] bg-[var(--color-footer)] px-4 outline-none text-white rounded-[5px 0px 0px 5px] ' type='email' placeholder='Enter your email' />
          <button className='flex-[0.7] w-[100%] min-h-[50px] font-[500] text-[16px] leading-[24px] sm:leading-[27px]  sm:text-[20px] text-[#FFF] bg-[var(--)] cursor-pointer outline-none px-4 border-none bg-[#FF4820]' type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people flex-col sm:flex-row flex w-[100%] justify-start items-center mt-8  '>
          <img className='w-[181.79px] h-[38px] ' src={people} alt='people' />
          <p className='text-white font-medium leading-[38px] m-0 sm:ml-4 text-center text-[12px]'>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-img flex-1  flex justify-center items-center'>
        <img className='w-[100%] h-[100%]' src={ai} alt='ai' />
      </div>
    </section>
  )
}

export default Header