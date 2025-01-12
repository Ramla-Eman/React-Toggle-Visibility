import { useState } from 'react'
import './App.css'

function App() {
  const [visiblity, setVisiblity] = useState(true)

  return (
    <>
      <div className='flex items-center justify-center flex-col space-y-6 border-2 p-3 rounded-xl'>
        <button onClick={() => { setVisiblity(!visiblity) }} className='border-2 border-purple-500 py-1 px-6 text-[1.5rem] rounded-xl text-purple-500 hover:text-white hover:bg-purple-500 '>{visiblity? "Hide" : "Show"}</button>
        {visiblity && <p className='text-wrap lg:text-[1.8rem] text-[1.3rem] text-center text-purple-600 font-semibold'><span className='text-purple-800 text-[2rem]'>❝</span>Nothing is impossible, the word itself says 'I'm possible'!<span className='text-purple-800 text-[2rem]'>❞</span></p>}
      </div>
    </>
  )
}

export default App
