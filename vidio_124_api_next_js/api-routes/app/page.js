
"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async()=>{ 
    let data ={
      name:"Harry",
      role:"Coder",

    }

    // this code is taken by post api fetch topic and search it on google

    let a = await fetch("/api/add", {method:"POST", headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick}>clicked me</button>
      
    </div>
  );
}
