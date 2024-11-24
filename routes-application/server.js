const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
const route=require("./router")
const port=3000

app.use('/api',route)

app.get('/',(req,res)=>{
    res.end("Routing App")
})

app.listen(port,()=>{
    console.log(`express server currently running on http://localhost:${port}`);
})