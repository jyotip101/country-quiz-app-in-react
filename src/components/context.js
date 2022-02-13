import React, { useContext, useState } from 'react'

const QuestionContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [question, setQuestion] = useState(false)
  const [isStart, setIsStart] = useState(false)

  const startQuiz = () => {
    setIsStart(true)
  }
  const endQuiz = () => {
    setIsStart(false)
  }

  return (
    <QuestionContext.Provider value={{ question, isStart, startQuiz, endQuiz }}>
      {children}
    </QuestionContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(QuestionContext)
}
