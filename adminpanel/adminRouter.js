const express = require('express')
const adminRouter = express.Router()
const collection = require('./mongodb')

const credential = {
    username: 'Rishikesh',
    password: 'Rishikesh@123'
}

adminRouter.get('/admin', (req, res) => {
    if (req.session.logined) {
        res.redirect('/route/home')
    } else {
        res.render('adminlog')
    }

})

adminRouter.post('/logi', (req, res) => {
    if (credential.username == req.body.name && credential.password == req.body.password) {
        req.session.user = req.body.name
        req.session.logined = true
        res.redirect('/route/home')
    } else {
        res.redirect('/route/admin')
    }

})

adminRouter.get('/home', async (req, res) => {
    if (req.session.user) {
        const data = await collection.find();
        res.render("adminpnl", {
            title: 'Home page',
            data: data,
        })
    } else {
        res.redirect('/route/admin')
    }

})

adminRouter.get('/add', (req, res) => {
    res.render('add_users', { title: 'Add users' })
})


adminRouter.post('/add', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }
    console.log(req.body.name)
    await collection.insertMany([data])
    res.redirect('/route/home')
})

adminRouter.get('/admin_logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            res.redirect('/route/admin')
        }

    })
})

adminRouter.get('/edit/:id', async (req, res) => {
    let id = req.params.id
    collection.findById(id, (err, data) => {
        if (err) {
            res.redirect('/home')
        } else {
            if (data == null) {
                res.redirect('/home')
            } else {
                res.render('edit_users', { title: 'Edit User', data:data })
            }
        }
    })
})

adminRouter.post('/update/:id', (req, res) => {
    let id = req.params.id
    collection.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    },
        (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/route/home')
            }
        }
    )
})

adminRouter.get('/delete/:id', (req, res) => {
    let id = req.params.id
    collection.findByIdAndRemove(id, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/route/home')
        }
    })
})

adminRouter.post('/search',async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm
        var emai = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        let searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
        let searchemail = searchTerm.replace(emai)

        const customers=await collection.find({
            $or:[
                {name:{$regex:new RegExp(searchNoSpecialChar,"i")}},
                {email:{$regex:new RegExp(searchemail,"i")}},
            ]
        })
        res.render('search',{customers})

    } catch (error) {
        console.log(err)
    }
})

module.exports = adminRouter