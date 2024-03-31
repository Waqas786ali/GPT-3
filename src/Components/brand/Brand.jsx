import React from 'react'
import './brand.css'
import {
  google,
  slack,
  dropbox,
  atlassian,
  shopify
}
  from './import'

function Brand() {
  return (
    <div className='gpt3__brand section__padding flex justify-center items-center flex-wrap'>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
        <img src={google} alt='google' />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
        <img src={slack} alt='slack' />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
        <img src={dropbox} alt='dropbox' />
      </div>

      <div className='flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center'>
        <img src={shopify} alt='shopify' />
      </div>

    </div>
  )
}

export default Brand