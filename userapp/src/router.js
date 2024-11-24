const express=require('express')

const router=express.Router()
const collection=require('./mongodb')
const { Collection } = require('mongoose')







router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.post('/signup',async (req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password

    }
    await collection.insertMany([data])
    
    res.render('login')


})

router.post('/login',async (req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password=req.body.password){
            req.session.name=req.body.name
            req.session.login=true
            res.redirect('/route/home')
        }else{
            res.send('wrong password')
        }

    }
    catch{
        res.render('login',({title:'login page',invalid:'invalid username...'}))

    }
   
    


})
router.get('/home',(req,res)=>{
    if(req.session.name){
        res.render('home',({user:req.session.name}))


    }else{
        res.redirect('/')

    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            
            res.redirect('/')
        }
    })
})




const credential={
    email:'admin@gmail.com',
    password:'admin@123'
}




router.post('/adminlogin',(req,res)=>{
    if(req.body.email==credential.email&&req.body.password==credential.password){
        
        req.session.users=req.body.email
        
        req.session.logined=true
        res.redirect('/route/admin-dashboard')
        console.log(req.session)
     
    }else{
        res.render('adminlogin')
    }
})
router.get('/admin-dashboard',(req,res)=>{
    if(req.session.users){
        collection.find().exec((err,data)=>{
            if(err){
                res.send(err)
            }else {
                res.render('admin-dashboard',{
                    title:'homepage',
                    data:data
                })
    
            }
        })

    }
    else{
        res.redirect('/adminlogin')
        
    }
        

})
router.get('/adminlogout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }else{
            
            res.redirect('/adminlogin')
        }
    })
})
router.get('/adduser',(req,res)=>{
    res.render('adduser')
})
router.post('/adduser',async (req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password

    }
    await collection.insertMany([data])
    
    res.render('admin-dashboard')


})
//edit an user route
router.get('/edit/:id',(req,res)=>{
    let id=req.params.id
    collection.findById(id,(err,data)=>{
        if(err){
            res.redirect('/route/admin-dashboard')
        }else{
            if(data==null){
                res.redirect('/route/admin-dashboard')
            }else{
                res.render('edit_users',({
                    title:'edit title',
                    data:data
                }))
            }
        }
    })

})
//update user rote
router.post('/update/:id',(req,res)=>{
    let id=req.params.id
    collection.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    },(err,result)=>{
        if(err){
            res.send(err)
        }else{
            // req.session.message={
            //     type:'success',
            //     message:'user updated successfully'
            // }
            res.redirect('/route/admin-dashboard')
        }
    })

})
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    collection.findByIdAndRemove(id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect('/route/admin-dashboard')

        }
        
    })
})


router.post('/search',async (req,res)=>{
    
    try{
        let search=req.body.search
        const searchnospecialchar=search.replace(/[^a-zA-Z0-9]/g,"")
        const customers=await  collection.find({
            $or:[
                {name:{$regex: new RegExp(searchnospecialchar,"i")}},
            ]
        })
        res.render('search',{
            customers,
        })

    }catch(error){
        console.log(err)

    }

})

module.exports=router
