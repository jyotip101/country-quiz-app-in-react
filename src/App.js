import { useState } from 'react'
import Question from './components/Question'
import Results from './components/Results'
import data from './components/data'

function App() {
  const [curQuestion, setCurQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptions = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
  }
  const showNextQuestion = () => {
    const nextQuestion = curQuestion + 1
    if (nextQuestion < data.length) {
      setCurQuestion(nextQuestion)
    } else {
      setShowScore(true)
      console.log(score)
    }
  }
  return (
    <div className='bg-[#aa808a] pt-[100px] w-[100vw] h-[100vh] pb-[100px] flex flex-col justify-center items-center'>
      <h1 className='text-white transition pt-16 pr-auto text-center -ml-[158px] font-medium text-[30px] '>
        Country
        <span className='italic ml-2 text-[#1c2620]'>Quiz</span>
      </h1>

      {showScore ? (
        <Results />
      ) : (
        <Question
          data={data}
          curQuestion={curQuestion}
          handleAnswerOptions={handleAnswerOptions}
          showNextQuestion={showNextQuestion}
        />
      )}
    </div>
  )
}

export default App
