import React from 'react'

import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="src/components/Images/WhatsApp_Image_2023-03-06_at_23.25.02-removebg-preview (4).png" width={330}  height={250} style={{border:"2px solid black",overflow:"hidden"}} />
        <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Card
