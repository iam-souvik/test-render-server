
const userRoute = require("../src/models/users/users.route")

const express=require("express")
const connect = require("./config/config")


const cors= require("cors")
const PORT=8000


const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)


app.get("/",(req,res)=>
{
    try
    {
        res.send("Working fine ")
    }
    catch(e)
    {
        res.send(e)
    }
   
})

app.listen(PORT,async()=>
{ 
    try
    {
        await connect()
        console.log("connection success") 
       
    }
    catch(e)
    {
 
        console.log("no connection",e)    
    }
  
})
