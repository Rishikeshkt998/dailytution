const express=require('express')
const app=express()
const path=require('path')
const bodyparser=require('body-parser')
const nocache = require("nocache");
const cookieparser=require('cookie-parser')
const session=require('express-session')
const{v4:uuidv4}=require('uuid')

const port=process.env.PORT||3000
const route=require('./router')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))

app.set('view engine','ejs')
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
const oneDay=1000*60*60*24
app.use(session({
    secret:uuidv4(),
    saveUninitialized:true,
    cookie:{maxAge:oneDay},
    unsave:false,
    
}))
app.use(nocache())
app.use(cookieparser())
app.use('/route',route)



app.get('/',(req,res)=>{
    if(req.session.login){
        res.redirect('/route/dashboard')
    }else{
        res.render('base',({title:'LOGIN FORM'}))

    }
    
})


app.listen(port,()=>{
    console.log(`server started at port http://localhost:${port}`);

})