const mongoose=require("mongoose")

const connect=async()=>
{
   return mongoose.connect("mongodb+srv://souvikpatra:souvik@cluster0.ouww0pa.mongodb.net/mock12", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
}

module.exports=connect 