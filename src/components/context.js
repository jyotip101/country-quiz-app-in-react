import React, { useContext, useState } from 'react'

const QuestionContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [question, setQuestion] = useState(false)
  const [isStart, setIsStart] = useState(false)
  const [isResultt, setIsResult] = useState(false)

  const startQuiz = () => {
    setIsStart(true)
  }
  const endQuiz = () => {
    setIsStart(false)
  }
  const seeResults = () => {
    endQuiz()
    setIsResult(!isResultt)
  }
  return (
    <QuestionContext.Provider
      value={{
        question,
        isStart,
        startQuiz,
        endQuiz,
        isResultt,
        setIsResult,
        seeResults,
      }}
    >
      {children}
    </QuestionContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(QuestionContext)
}
