const express=require('express')
const router=express.Router()
const collection=require('./mongodb')



router.get('/signup',(req,res)=>{
    if(req.session.name){
        res.redirect('/route/home')
    }else{
        res.render('signup')
    }
})

router.post('/signup',async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.redirect('/')
})
router.post('/login',async(req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            req.session.name=req.body.name
            req.session.login=true
            res.redirect('/route/home')
            console.log(req.session)
        }else{
            res.redirect('/')
            // res.render('login',({title:'login page',invalid:'invalid username...'}))
        }
    }catch{
        // res.redirect('/')
        res.render('login',({title:'login page',invalid:'invalid username...'}))


    }
})
router.get('/home',(req,res)=>{
    if(req.session.name){
        res.render('home',({user:req.session.name}))
    }
    else{
        res.redirect('/')
    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/')
        }

    })


})









module.exports=router