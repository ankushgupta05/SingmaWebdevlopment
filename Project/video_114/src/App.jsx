/* NOTE :
    'https://www.npmjs.com/package/uuid' This is link where unique Id is  Genrates

    npm install uuid
     uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
*/


/* note: React icons  
'https://react-icons.github.io/react-icons/' link refference from google and search it


npm install react-icons --save

// Use this icons in this program
import { FaEdit } from "react-icons/fa";
<FaEdit />
*/


// import for unique Id
import { v4 as uuidv4 } from 'uuid';
// import react icons link 
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";



import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import './App.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)
  

  const saveToLS = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
    
  }
  



  useEffect(() => {
   let todoString = localStorage.getItem("todos")
   if(todoString){
     let todos = JSON.parse(localStorage.getItem("todos"))
     setTodos(todos)
  }
  
  }, [])
  


  const handleEdit = (e, id)=>{
    let t = todos.filter(i=> i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos)
    saveToLS();
     

  }
  const handleDelete = (e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos) 
    saveToLS();
  }


  const handleAdd = ()=>{
    // setTodos([...todos,{todo,isCompleted:false}])
    setTodos([...todos,{ id: uuidv4() ,todo,isCompleted:false}])
    setTodo("")
    console.log(todos)
    saveToLS();
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  
  const handleCheckbox = (e)=>{
    // console.log(e,e.target)
  let id = e.target.name;
  // console.log(`The id is ${id}`)
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  // console.log(index)
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos) 
  // console.log(newTodos)
  saveToLS();

}


  return (
    <>
     <Navbar/>
     {/* NOTE : 'mx-auto' transfer paregraph in center */}
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
         <h1 className='font-bold text-center text-3xl'>ITask - Manage your todos at one place</h1>
            <div  className="addTodo my-5 flex flex-col gap-5">
                    <h2 className='text-2xl font-bold '>Add a Todo</h2>
                    <div className="flex">
                        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-2' />
                        <button  onClick={handleAdd} disabled={todo.length <= 3 } className='bg-violet-800  mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white  disabled:bg-violet-700'>Save</button>
                    </div>
            </div>

          <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='mx-2' htmlFor="show">Show Finished</label> 
          {/* <div className='h-1 bg-black'></div> */}
          {/* <div className='h-[1px] bg-black opacity-15 w-1/2 mx-auto '></div> */}
          {/* <div className='h-[1px] bg-black opacity-15 w-3/4 mx-auto my-1'></div> */}
          <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
          {/* <hr /> */}
            <h2 className='text-2xl font-bold '>Your Todos</h2>

            <div className="todos">
              {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
              {todos.map(item=>{

              
                //  return (showFinished || !item.isCompleted) && <div  key={item.id} className="todo flex md:w-1/2 justify-between my-3 ">
                //  return (showFinished || !item.isCompleted) && <div  key={item.id} className="todo flex md:w-1/2 justify-between my-3 ">
                 return (showFinished || !item.isCompleted) && <div  key={item.id} className="todo flex  justify-between my-3 ">
                  <div className='flex gap-5'>
                  <input name={item.id}  onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted} id="" />
                    <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                  </div>
                    <div className="buttons flex h-full">
                      <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                      {/* <button  onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button> */}
                      <button  onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
                    </div>
                  </div>

              })}

            </div>
      </div>
    </>
  )
}

export default App
