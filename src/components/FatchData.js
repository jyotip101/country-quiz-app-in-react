import { useState, useEffect } from 'react'

export const useFatch = (url) => {
  const [questions, setQuestions] = useState([])

  const getData = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setQuestions(user)
  }
  useEffect(() => {
    getData()
  }, [url])

  return { questions }
}
