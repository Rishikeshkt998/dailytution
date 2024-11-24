const express=require('express')

const router=express.Router()
const collection=require('./mongodb')




router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.post('/signup',async (req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password

}
await collection.insertMany([data])

res.render('home')
    
 

})
module.exports=router
