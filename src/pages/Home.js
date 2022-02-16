import React from 'react'
import { useGlobalContext } from '../components/context'
// bg-#3b5144
// main- #aa808a
const Home = () => {
  const { isStart, startQuiz, endQuiz } = useGlobalContext()
  return (
    <div className='flex justify-center items-center   flex-col'>
      <button
        className='m-8 py-2 px-4 bg-[#1c2620] rounded-sm  text-[#fff] font-medium text-[24px] hover:text-[#000] hover:bg-[#fff] transition delay-150 '
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  )
}

export default Home
