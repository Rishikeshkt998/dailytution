const express =require('express')
const dotenv=require('dotenv')
const app=express()
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||4000
const path=require('path')



const session =require('express-session')
const bodyparser=require('body-parser')
const route=require('./router')
const adminroute=require('./adminrouter')
const{v4:uuidv4}=require('uuid')
const nocache = require("nocache");

const oneDay=1000*60*60*24
app.use(nocache())


app.set('view engine','ejs')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(session({
    secret:uuidv4(),
    saveUninitialized:true,
    unsave:false,
    cookie:{maxAge:oneDay}
}))

app.use('/route',route)
app.use('/route',adminroute)


app.get('/',(req,res)=>{
    if(req.session.login){
        res.redirect('/route/home')
    }else{
        res.render('login')
    }
})





app.listen(PORT,()=>{
    console.log(`server runs at http://localhost:${port}`)
})