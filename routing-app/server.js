// const express=require('express')

// const app=express()
// const route=require("./router")

// const port=3000
// app.use("/api",route)

// //home route
// app.get('/',(req,res)=>{
//     res.end('Routing App')

// })


// app.listen(port,()=>{
//     console.log(`Express server currently running on http://localhost:${port}`);
// })


const express=require('express')


const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
const route=require('./router')

const port=3000
app.use('/api',route)

app.get('/',(req,res)=>{

    res.send('routing app')

})




app.listen(port,()=>{
    console.log(`Express server currently running on http://localhost:${port}`);
})