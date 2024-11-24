const express=require('express')
const router=express.Router()

const credential={
    email:'admin@gmail.com',
    password:'admin@123'
}




router.post('/login',(req,res)=>{
    if(req.body.email==credential.email&&req.body.password==credential.password){
        req.session.user=req.body.email
        
        req.session.login=true
        res.redirect('/route/dashboard')
        console.log(req.session)
    }else{
        res.render('base',({title:'login page',invalid:'invalid username...'}))
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',({user:req.session.user}))


    }else{
        res.redirect('/')

    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            // res.redirect('base',({title:'EXPRESS',logout:'logout successfully...'}))
            res.redirect('/')
        }
    })
})
module.exports=router