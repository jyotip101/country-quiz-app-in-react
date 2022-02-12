import React from 'react'
import mainlog from '../Images/undraw_adventure_4hum 1.svg'
// bg-#3b5144
// main- #aa808a
const Home = () => {
  return (
    <div className='flex justify-center items-center pt-16  flex-col'>
      <h1 className='text-white font-medium text-[30px] '>
        Country
        <span className='italic ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#3b5144] relative inline-block rounded-sm'>
          <span className='relative text-white'>Quiz</span>
        </span>
      </h1>

      <div className='mt-8'>
        <img src={mainlog} alt='undraw_adventure_4hum 1.svg' />
      </div>
      <button className='m-8 py-2 px-4 bg-[#3b5144] rounded-sm  text-[#fff] font-medium text-[24px] hover:text-[#000] hover:bg-[#fff] transition delay-150 '>
        Start Quiz
      </button>
    </div>
  )
}

export default Home
