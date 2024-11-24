const express=require('express')
const adminrouter=express.Router()
const collection=require('./mongodb')



const credential={
    name:'rishi',
    password:'rishi@123'
}
adminrouter.get('/admin',(req,res)=>{
    if(req.session.logined){
        res.redirect('/route/dashboard')
    }else{
        res.render('adminlogin')
    }
})



adminrouter.post('/adminlogin',(req,res)=>{
    if(credential.name===req.body.name&&credential.password===req.body.password){
        
        req.session.admin=req.body.name
        
        req.session.logined=true
        res.redirect('/route/dashboard')
        console.log(req.session)
     
    }else{
        res.redirect('/route/admin')
    }
})

adminrouter.get('/dashboard',async(req,res)=>{
    if(req.session.admin){
        const data=await collection.find()
        res.render('admin-dashboard',{
                        title:'homepage',
                        data:data
                    })

        
        // collection.find().exec((err,data)=>{
        //     if(err){
        //         res.send(err)
        //     }else {
        //         res.render('admin-dashboard',{
        //             title:'homepage',
        //             data:data
        //         })
    
        //     }
        // })

    }
    else{
        res.redirect('/route/admin')
        
    }
        

})
adminrouter.get('/adminlogout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            req.send(err)
            console.log(err);
        }
        else{
            res.redirect('/route/admin')
        }
    })
})
adminrouter.get('/adduser',(req,res)=>{
    res.render('adduser',{ title: 'Add users' })
})
adminrouter.post('/adduser',async(req,res)=>{

    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.redirect('/route/dashboard')

})
adminrouter.get('/edit/:id',(req,res)=>{
    let id=req.params.id
    collection.findById(id,(err,data)=>{
        if(err){
            res.redirect('route/dashboard')
        }
        else{
            if(data==null){
                res.redirect('route/dashboard')
            }else{
                res.render('edit_users',({
                    title:'edit title',
                    data:data
                }))
            }
        }
    })
})

adminrouter.post('/update/:id',(req,res)=>{
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
            res.redirect('/route/dashboard')
        }
    })
})

adminrouter.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    collection.findByIdAndRemove(id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect('/route/dashboard')
        }
    })
})

adminrouter.post('/search',async(req,res)=>{
    try{
        let search=req.body.search
        const searchnospecialchar=search.replace(/[^a-zA-Z0-9]/g,"")
        const customers=await collection.find({
            $or:[{name:{$regex:new RegExp(searchnospecialchar,'i')}}],

        })
        res.render('search',{
            customers,
        })
    }catch(error){
        console.log(err);
    }
})
module.exports=adminrouter