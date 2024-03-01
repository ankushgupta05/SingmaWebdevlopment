import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title:"hey",
      desc:"I am a good todo"
    },

    {
      title:"hey 2",
      desc:"I am a good todo 2"
    },

    {
      title:"hey 3",
      desc:"I am a good todo 3"
    }
  ])


  const Todo = ({todo})=>{
    return(<>
  <div className="m-4 border border-1 border-purple-400">

      <div className="todo" >{todo.title}</div>
      <din className="todo">{todo.desc}</din>
      
  </div>
  
  </>)}



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* // terneary operator */}

       {showbtn?<button>show btn is true</button>:<button>show btn is false</button>} 
      


      {/*   if condition is true than print otherwise no print  it is called conditional rendering*/}
      {/* {showbtn &&  <button>show btn is true</button>} */}

    
    {todos.map(todo =>{
      return <Todo key={todo.title} todo={todo}/>
    })}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
         Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

