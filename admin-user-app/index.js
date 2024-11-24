const express=require('express')
const app=express()

const nocache = require("nocache");
const route=require('router')
const path=require('path')
const ejs=require('ejs')
const session=require('express-session')
const{v4:uuidv4}=require('uuid')


app.use(express.json())
app.use('/template',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

const templatePath=path.join(__dirname,'../templates')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:uuidv4(),
    saveUninitialized:true,
    unsave:false,
    
}))

app.use(nocache())
app.use('/route',route)

app.get('/',(req,res)=>{
    if(req.session.login){
        res.redirect('/route/home')
    }else{
        res.render('login')

    }
})
app.get('/adminlogin',(req,res)=>{
    if(req.session.logined){
        res.redirect('/route/admin-dashboard')
    }else{
        res.render('adminlogin')

    }
    
    
})



app.listen(3000,()=>{
    console.log('port connected')
})