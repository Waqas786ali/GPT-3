import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../Components'

function WhatGPT3() {
  return (
    <div className='gpt3__whatpgpt3 flex flex-col p-8 bg-[var(--color-footer)] section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature flex'>
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className='gpt3_whatgpt3-heading flex flex-col lg:flex-row lg:justify-between lg:items-center my-16 ml-8'>
      <h1 className='gradient__text text-[34px] leading-[45px] font-extrabold max-w-[510px]'>The possibilities are beyond your imagination</h1>
      <p className=' mt-4 lg:mt-0 font-medium text-[16px] leading-[30px] text-[var(--color-subtext)] cursor-pointer'>Explore The Library</p>
    </div>
    <div className='gpt3__whatgpt3-container  flex flex-wrap flex-col md:flex-row mt-0 sm:mt-8 '>
      <Feature title="Chatbots " text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
    </div>
  )
}

export default WhatGPT3