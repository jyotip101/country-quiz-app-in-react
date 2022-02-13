import React from 'react'

const Question = () => {
  return (
    <div className='max-w-[380px]  bg-slate-50 m-4 mx-auto rounded-2xl p-4 '>
      <h1 className='font-medium m-2 text-[16px]  '>
        Delahi Capetal of which country?
      </h1>
      <div className='grid mt-3'>
        <button
          className='m-2 p-2  border-2 rounded-xl border-[#000]  text-[#000] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
          // onClick={}
        >
          <span className='ml-2'>
            A <span className='ml-4'>Country name </span>
          </span>
          <span className='mr-2'>box</span>
        </button>
        <button
          className='m-2 p-2  border-2 rounded-2xl border-[#000]  text-[#000] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
          // onClick={}
        >
          <span className='ml-2'>
            B <span className='ml-4'>Country name </span>
          </span>
          <span className='mr-2'>box</span>
        </button>
        <button
          className='m-2 p-2  border-2 rounded-2xl border-[#000]  text-[#000] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
          // onClick={}
        >
          <span className='ml-2'>
            C <span className='ml-4'>Country name </span>
          </span>
          <span className='mr-2'>box</span>
        </button>
        <button
          className='m-2 p-2  border-2 rounded-2xl border-[#000]  text-[#000] font-medium text-[16px]  transition delay-150 flex justify-between items-center '
          // onClick={}
        >
          <span className='ml-2'>
            D <span className='ml-4'>Country name </span>
          </span>
          <span className='mr-2'>box</span>
        </button>
      </div>
      <button
        className='m-2 ml-[72.5%]  py-3 px-6 bg-[#000] rounded-lg  text-[#fff] font-medium text-[18px]   transition delay-150 capitalize '
        // onClick={}
      >
        next
      </button>
    </div>
  )
}

export default Question
