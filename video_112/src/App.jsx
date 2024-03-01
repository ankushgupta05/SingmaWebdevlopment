import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name,setName] = useState("Ankush")
  
  // argument is Given
  // const [form, setForm] = useState({email:"",phone:""})
  
  // argument is Not Given
  const [form, setForm] = useState({})
  

  const handleClik = () =>{
    alert("I am cliked")
  }

  const handleMouseOver = ()=>{
    alert("Hey I am a Mouse over")
  }
  const handleChange = (e)=>{
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClik} >Click me</button>
      </div>

{/* 
      <div className="red" onMouseOver={handleMouseOver}>
        I am a red div 
      </div>
*/}

    {/* when argument send than write code this type */}
    {/* <input type="text" name='email' value={form?.email} onChange={handleChange}/> */}
    {/* <input type="text" name='phone' value={form?.phone} onChange={handleChange}/> */}

    {/* when argument not send than write code this type */}
    <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange}/>
    <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App
