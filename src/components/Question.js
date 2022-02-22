import React from 'react'

import { useFatch } from '../components/FatchData'
const Question = () => {
  return (
    <div className='grid mt-3'>
      <button
        className='m-2 p-2  border-2 rounded-xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
        // onClick={() => console.log(Question)}
      >
        <span className='ml-2'>
          A <span className='ml-4'>Vietnam </span>
        </span>
        <span className='mr-2'></span>
      </button>
      <button
        className='m-2 p-2  border-2 rounded-2xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
        // onClick={}
      >
        <span className='ml-2'>
          B <span className='ml-4'>Malaysia </span>
        </span>
        <span className='mr-2'> </span>
      </button>
      <button
        className='m-2 p-2  border-2 rounded-2xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
        // onClick={}
      >
        <span className='ml-2'>
          C <span className='ml-4'>Sweden </span>
        </span>
        <span className='mr-2'> </span>
      </button>
      <button
        className='m-2 p-2  border-2 rounded-2xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
        // onClick={}
      >
        <span className='ml-2'>
          D <span className='ml-4'>Austria </span>
        </span>
        <span className='mr-2'> </span>
      </button>
    </div>
  )
}

export default Question
