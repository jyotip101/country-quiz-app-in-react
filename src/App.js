import { useGlobalContext } from './components/context'
import Home from './pages/Home'
import Question from './pages/Question'

function App() {
  const { isStart, startQuiz, endQuiz } = useGlobalContext()
  return (
    <div className='bg-[#aa808a] w-full h-[100vh]'>
      <h1 className='text-white pt-16 pr-[200px] text-center font-medium text-[30px] '>
        Country
        <span className='italic ml-2 text-[#1c2620]'>Quiz</span>
      </h1>

      {!isStart && <Home />}
      {isStart && <Question />}
    </div>
  )
}

export default App
