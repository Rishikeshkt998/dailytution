const express=require('express')

const app=express()
const path=require('path')
const route=require('./router')




const port=3000

app.use(express.json())
app.set('view engine','ejs')


app.use(express.urlencoded({extended:false}))
app.use('/route',route)




app.get('/',(req,res)=>{
    res.render('login',{title:'login system'})
})


app.listen(port,()=>{
    console.log(`server runs at http://localhost:${port}`)
})
