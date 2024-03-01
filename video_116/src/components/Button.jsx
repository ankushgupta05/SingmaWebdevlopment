import React from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const value = useContext(counterContext)

  return (
    <>
      <div>
        <Button  onClick={() => setCount((count) => count + 1)} >  <Component1 />and I am a button </Button>
      </div> 
    </>
  )
}

export default Button
