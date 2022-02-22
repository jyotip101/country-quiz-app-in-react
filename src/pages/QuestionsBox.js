import React from 'react'
// import Question from '../components/Question'

import { useGlobalContext } from '../components/context'

const QuestionsBox = () => {
  const { quizStatus, isResultt, seeResults } = useGlobalContext()
  return (
    <div className='max-w-[380px]  bg-slate-50 m-2 sm:mx-auto rounded-2xl p-4 '>
      <h1 className='font-medium m-2 text-[18px] mt-12 '>
        Kuala Lumpur is the capital of
      </h1>
      {/* <Question /> */}
      <button
        className='m-2 ml-[72.5%]  py-3 px-6 bg-[#3b5144] rounded-lg  text-[#fff] font-medium text-[18px]   transition delay-150 capitalize '
        onClick={seeResults}
      >
        next
      </button>
    </div>
  )
}

export default QuestionsBox
