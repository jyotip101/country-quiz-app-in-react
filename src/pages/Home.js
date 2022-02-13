import React from 'react'
import mainlog from '../Images/undraw_adventure_4hum 1.svg'
import { useGlobalContext } from '../components/context'
// bg-#3b5144
// main- #aa808a
const Home = () => {
  const { isStart, startQuiz, endQuiz } = useGlobalContext()
  return (
    <div className='flex justify-center items-center   flex-col'>
      <div className='mt-8'>
        <img src={mainlog} alt='undraw_adventure_4hum 1.svg' />
      </div>
      <button
        className='m-8 py-2 px-4 bg-[#3b5144] rounded-sm  text-[#fff] font-medium text-[24px] hover:text-[#000] hover:bg-[#fff] transition delay-150 '
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  )
}

export default Home
