import React from 'react'
import mainlog from '../Images/undraw_adventure_4hum 1.svg'

const Question = () => {
  return (
    <div className='max-w-[380px]  bg-slate-50 m-2 sm:mx-auto rounded-2xl p-4 '>
      <div className='absolute translate-x-[125%] translate-y-[-75%] '>
        <img src={mainlog} alt='undraw_adventure_4hum 1.svg' />
      </div>
      <h1 className='font-medium m-2 text-[18px] mt-14 '>
        Kuala Lumpur is the capital of
      </h1>
      <div className='grid mt-3'>
        <button
          className='m-2 p-2  border-2 rounded-xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
          // onClick={}
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
      <button
        className='m-2 ml-[72.5%]  py-3 px-6 bg-[#3b5144] rounded-lg  text-[#fff] font-medium text-[18px]   transition delay-150 capitalize '
        // onClick={}
      >
        next
      </button>
    </div>
  )
}

export default Question
