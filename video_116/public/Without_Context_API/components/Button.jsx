import React from 'react'
import Component1 from './Component1'

const Button = ({count}) => {
  return (
    <>
      <div>
        <Button>  <Component1 count={count} />and I am a button </Button>
      </div> 
    </>
  )
}

export default Button
