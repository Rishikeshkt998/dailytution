const express=require('express')

const app=express()

app.get('/ping',(req,res)=>{
    res.send('node express application')
})
app.listen(3000,()=>{console.log('server started on port 3000');})