import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import {createServer} from "http";

const port=8080;

const app=express();
const server=createServer(app);
const io=new Server(server,{
        cors:{
           origin:"http://localhost:5173",
           methods:["Get", "Post"],
           credentials:true
        }   
});

app.use(
    cors({
     origin:"http://localhost:5173",
     methods:["Get", "Post"],
     credentials:true
}));

app.get("/", (req,res)=>{
    res.send("this is root path");
})

io.on("connect", (socket)=>{
    console.log("connection is created");
    console.log(socket.id);
    
})

server.listen(port, (req, res)=>{
    console.log("server is listening in this port ", port);
});