import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

// import { UseSelector, useDispatch } from 'react-redux'
// import { decrement, increment, multiply } from './redux/counter/counterSlice'


function App() {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
    <Navbar/>
    <div>
      <button>-</button>
      current count is {count}
      <button onClick={()=> dispatch(increment())}>+</button>
    </div>
    </>
  )
}

export default App
