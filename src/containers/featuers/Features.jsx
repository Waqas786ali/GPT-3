import React from 'react'
import './features.css'
import { Feature } from '../../Components';


const featuresData = [
  {
    title : "Improving end distrusts instantly ",
    text :"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title : "Become the tended active",
    text :"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title : "Message or am nothing",
    text :"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title : "Really boy law county",
    text :"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]

function Features() {
  return (
    <div className='gpt3__features section__padding w-[100%] flex justify-between flex-col lg:flex-row ' id='features'>
    <div className='gpt3__features-heading flex-1 flex justify-start items-start flex-col text-left mb-8 mr-0 lg:mb-0 lg:mr-20'>
      <h1 className='gradient__text text-[28px] leading-[38px] sm:text-[34px] sm:leading-[45px] font-extrabold'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p className=' text-[var(--color-subtext)] font-medium mt-8 text-[16px] leading-[30px]'>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container flex-[1.5] flex justify-start items-center flex-col'>
    {featuresData.map((item,index) => (
      <Feature title={item.title} text={item.text} key={index} />
    )) }
    </div>
    </div>
  )
}

export default Features;