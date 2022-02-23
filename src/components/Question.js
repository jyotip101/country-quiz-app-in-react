import mainlog from '../Images/undraw_adventure_4hum 1.svg'
const Question = ({
  data,
  handleAnswerOptions,
  showNextQuestion,
  curQuestion,
}) => {
  return (
    <>
      <div className='sm:w-[350px] w-[300px] h-[450px] bg-slate-50 m-2 p-8 sm:mx-auto rounded-2xl  '>
        <img
          src={mainlog}
          className='w-full max-w-[150px] absolute ml-[125px] -mt-[100px]'
          alt='undraw_adventure_4hum 1.svg'
        />
        <h1 className='font-normal m-2 text-[18px] mt-12 '>
          {data[curQuestion].question}
        </h1>
        <div className='grid mt-3'>
          {data[curQuestion].answerOptions.map((item) => {
            const { id, answer, isCorrect } = item
            return (
              <button
                key={id}
                className={`m-2 p-2  border-2 rounded-xl border-[#1c2620]  text-[#1c2620] font-medium text-[16px]  transition delay-150 flex justify-between items-center hover:bg-[#aa808a] hover:text-gray-50 hover:border-[#aa808a]`}
                onClick={() => handleAnswerOptions(isCorrect)}
              >
                <span className='ml-2'>
                  {id} <span className='ml-4'>{answer} </span>
                </span>
                <span className='mr-2'></span>
              </button>
            )
          })}
        </div>
        <button
          onClick={() => showNextQuestion()}
          className='m-2 ml-[72.5%]  py-3 px-6 bg-[#3b5144] rounded-lg  text-[#fff] font-medium text-[18px]   transition delay-150 capitalize '
        >
          next
        </button>
      </div>
    </>
  )
}

export default Question
