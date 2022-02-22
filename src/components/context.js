import React, { useContext, useState } from 'react'
import { useFatch } from './FatchData'

const url = `https://restcountries.com/v3.1/name/japan`
const QuestionContext = React.createContext()

export const AppProvider = ({ children }) => {
  const { questions } = useFatch(url)
  const [isStart, setIsStart] = useState(false)
  const [isResultt, setIsResult] = useState(false)

  const quizStatus = () => {
    if (isStart) {
      return setIsStart(false)
    }
    setIsStart(true)
  }
  const seeResults = () => {
    setIsStart(false)
    setIsResult(!isResultt)
  }
  return (
    <QuestionContext.Provider
      value={{
        isStart,
        quizStatus,
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
