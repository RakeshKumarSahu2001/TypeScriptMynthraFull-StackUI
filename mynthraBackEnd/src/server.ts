import express from "express";
import bodyParser from "body-parser"
import { getItems,writeItems } from "./items";
import cors from "cors"

const app=express()
app.use(bodyParser.json())
app.use(cors({credentials:true}))

app.get("/",(req:express.Request,res:express.Response)=>{
    res.send("Hello from the server")
})

app.get("/items",async(req:express.Request,res:express.Response)=>{
    const items=await getItems()
    // console.log(items)
    res.status(200).json({items:items,msg:"successfull"})
})

app.post("/items",async(req:express.Request,res:express.Response)=>{
    const updatedData=await writeItems(req.body)
    return res.json({items:updatedData,"msg":"successfull"})
    })

app.listen(3000,()=>{
    console.log("Listening port 3000")
})