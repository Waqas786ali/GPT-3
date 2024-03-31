import React from 'react'
import './blog.css'
import { Artical } from '../../Components'
import {blog01,blog02,blog03,blog04,blog05} from "./improts"

function Blog() {
  return (
    <div className='gpt3__blog section__padding flex flex-col' id='blog'>
      <div className='gpt3__blog-heading w-[100%] text-left mb-20'>
        <h1 className='gradient__text text-[34px] leading-[42px] sm:text-[46px] sm:leading-[52px] md:text-[62px] font-extrabold md:leading-[75px]'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container  flex flex-col-reverse lg:flex-row '>
        <div className='gpt3__blog-container_groupA flex-[0.75] my-8 mx-0 lg:my-0  lg:mr-8 '>
        <Artical imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB flex-[1] grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Artical imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Artical imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Artical imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Artical imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog