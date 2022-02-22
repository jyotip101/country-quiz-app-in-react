import { useGlobalContext } from './components/context'
import mainlog from './Images/undraw_adventure_4hum 1.svg'
import Home from './pages/Home'
import QuestionsBox from './pages/QuestionsBox'
import Results from './pages/Results'

function App() {
  const { isStart, quizStatus, isResultt, setIsResult } = useGlobalContext()
  return (
    <div className='bg-[#aa808a] w-full h-[100vh]'>
      <h1
        className={`text-white transition pt-16 pr-auto text-center font-medium text-[30px] ${
          isStart && ' pr-[200px]'
        }`}
      >
        Country
        <span className='italic ml-2 text-[#1c2620]'>Quiz</span>
      </h1>
      <div
        className={
          isStart
            ? 'absolute transition translate-x-[125%] translate-y-[-75%] '
            : 'mt-8 flex transition justify-center '
        }
      >
        <img src={mainlog} alt='undraw_adventure_4hum 1.svg' />
      </div>
      {!isStart && <Home />}
      {isStart && !isResultt ? <QuestionsBox /> : ''}
      {isResultt && <Results />}
    </div>
  )
}

export default App
