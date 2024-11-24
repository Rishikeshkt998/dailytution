// const express=require('express')
// const route=express.Router()
// const accounts=require('./database')

// //get request

// route.get('/accounts',(req,res)=>{
//     res.json({userData:accounts})
// })
// module.export=route


const express=require('express')

const router=express.Router()
var accounts=require('./database')


router.get('/accounts',(req,res)=>{
    res.json({userData:accounts})

})


router.post('/accounts',(req,res)=>{
    let accountData=req.body
    accounts.push(accountData)
    res.json(accounts)

})

router.get('/accounts/:id',(req,res)=>{
    let accountid=Number(req.params.id)
    let getAccount=accounts.find((account)=>account.id===accountid)

    if(!getAccount){
        res.status(500).send('find the data')
    }else{
        res.json({userData:[getAccount]})
    }

})

router.put('/accounts/:id',(req,res)=>{
    let accountid=Number(req.params.id)
    let body=res.body
    let account=accounts.find((account)=>account.id===accountid)
    let index=accounts.indexOf(account)
    if(!account){
        res.status(500).send('account not created')
    }else{
        const updatedaccount={...account,...body}
        accounts[index]=updatedaccount
        res.send(updatedaccount)
    }
})

router.delete('/accounts/:id',(req,res)=>{
    let accountid=Number(req.params.id)
    let getvalue=accounts.filter((account)=>account.id!=accountid)

    if(!getvalue){
        res.status(500).send('account not found')
    }else{
        accounts=getvalue
        res.send(accounts)
    }
})
module.exports=router