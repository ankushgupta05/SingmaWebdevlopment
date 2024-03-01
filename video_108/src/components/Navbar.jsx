import React1, {useEffect} from 'react'

const Navbar = ({color}) => {
  // useEffect(() => {
  //   alert("color was changed")
  
  // }, [color])



  
  // case 1: Run on every render
  useEffect(()=>{
    alert("Hey I Will run on every render")
  })

  // case 2: Run only on first render
  useEffect(()=>{
    alert("Hey Welcome to my page. This is the first render")
  },[])

  // case 3: Run only When certain values change
  useEffect(()=>{
    alert("Hey I am running because color was changed")
  },[color])




  
  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
