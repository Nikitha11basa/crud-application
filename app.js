const express=require('express')
const mongoose = require('mongoose')
const app=express()
const url='mongodb://localhost/bookdb'
mongoose.connect(url)
const con=mongoose.connection
con.on('open', ()=> {
    console.log("database connected")
})


app.listen(8888,() => 
{ console.log("server started")
})
