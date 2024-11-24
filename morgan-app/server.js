// const express=require("express")
// const morgan=require('morgan')
// const{v4:uuidv4}=require('uuid')
// const fs=require('fs')
// const path=require('path')


// const app=express()
// const port=process.env.PORT||3000

// morgan.token('id',function getid(req){
//     return req.id
// })
// morgan.token('param',function(req,res,param){
//     return "userToken"

// })
// app.use(assignid)
// let accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})


// app.use(morgan(':id :param :method :status :url "HTTP/:http-version"'))
// app.use(morgan(':id :param :method :status :url "HTTP/:http-version"',{stream:accessLogStream}))
// app.get('/',(req,res)=>{
//     res.end('morgan logger app')

// })
// function assignid(req,res,next){
//     req.id=uuidv4()
//     next()
// }
// app.listen(port,()=>{
//     console.log(`server is running on http://localhost:${port}`);
// })

const express=require('express')
const morgan=require('morgan')
const{v4:uuidv4}=require('uuid')
const fs=require('fs')
const path=require('path')
const app=express()


const port=3000

morgan.token('id',function getid(req){
    return req.id

})
morgan.token('param',function(req,res,param){
    return "userData"
})


app.use(accessid)
let accessLogStream=fs.createWriteStream(path.join(__dirname,'access'),{flag:'a'})

app.use(morgan(':id :param :method :status :url "HTTP/:http-version"'))
app.use(morgan(':id :param :method :status :url "HTTP/:http-version"',{stream:accessLogStream}))
app.get('/',(req,res)=>{
        res.end('morgan logger app')
    
    })

function accessid(req,res,next){
    req.id=uuidv4()
    next()
}



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})