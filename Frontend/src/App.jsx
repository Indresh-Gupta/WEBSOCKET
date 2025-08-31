import './App.css'
import {useEffect } from "react";
import {io} from "socket.io-client";

function App() {
  const socket=io("http://localhost:8080");

  useEffect(()=>{
    socket.on("connect", ()=>{
      console.log("connection is created", socket.id);
    })
  },[])
  return (
    <>
    <h1>hello world</h1>  
    </>
  )
}

export default App
