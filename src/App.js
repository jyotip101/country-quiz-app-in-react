import { useGlobalContext } from './components/context'
import Home from './pages/Home'
import Question from './pages/Question'

function App() {
  const { isStart, startQuiz, endQuiz } = useGlobalContext()
  return (
    <div className='bg-[#aa808a] w-full h-[100vh]'>
      <h1 className='text-white pt-16 text-center font-medium text-[30px] '>
        Country
        <span className='italic ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#3b5144] relative inline-block rounded-sm'>
          <span className='relative text-white'>Quiz</span>
        </span>
      </h1>

      {!isStart && <Home />}
      {isStart && <Question />}
    </div>
  )
}

export default App
