import img from '../Images/undraw_winners_ao2o 2.svg'
const Results = ({ score }) => {
  return (
    <div className=' p-4 bg-slate-100 rounded-md'>
      <img src={img} alt='img' className='mt-4 w-full' />
      <h1 className='m-4 p-2 text-[24px] font-normal'>
        Your Score is {score} !
      </h1>
    </div>
  )
}

export default Results
