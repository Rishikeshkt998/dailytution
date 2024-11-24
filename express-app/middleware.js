// const express=require("express")
// const app=express()

// const myLogger=function(req,res,next){
//     console.log('LOGGED');
//     next()
// }
// const reqestTime=function(req,res,next){
//     req.reqTime=Date.now()
//     next()
// }
// app.use(myLogger)
// app.use(reqestTime)
// app.get('/',function(req,res){
//     res.send(`current time:${req.reqTime}`)
// })
// app.listen(3000,()=>{
//     console.log('app started on PORT300');
// })


//serving static files

// const express=require('express')

// const path=require('path')
// const app=express()
// const publicpath=path.resolve(__dirname,'public')
// app.use(publicpath.express.static('static'))





// app.get('/ping',(req,res)=>{
//     res.send('node express application')
// })
// app.listen(3000,()=>{console.log('server started on port 3000');})


//routing in express
// application.get('/',function(req,res){

// })


// const express=require("express")
// const app=express()

// const PORT=3000

// const data={
//     id:1,
//     name:'india'
// }

// app.get('/',(req,res)=>{
//     res.end('welcome to my homepage')

// })
// app.get('/about',(req,res)=>{
//     res.send('welcome to about page')
// })
// app.get('/wheather',(req,res)=>{
//     res.json(data)
//     res.sendFile("/static/index.html")
// })
// app.listen(PORT,()=>{console.log('server is started on PORT300');})

// const express=require('express')
// const app=express()

// const PORT=3000
// app.set('view engine','pug')
// app.get('/',function(req,res){
//     res.render('index',{title:'Express view engine',h1:'Express application',p:'Express Template Engine'})
// }).listen(PORT,()=>{
//     console.log('Server Started at http://localhost:3000')
// })



//express form

// const express=require('express')
// const path=require('path')
// const app=express()
// const PORT=process.env.PORT||3000
// app.set('views',path.join(__dirname,'views'))
// app.set('view engine','pug')
// app.use(express.urlencoded({
//     extended:true
// }))

// app.get('/',(req,res)=>{
//     res.render('index',{title:'Form Handling'})

// })
// app.post('/form_submit',(req,res)=>{
//     const username= req.body.username
//     const email= req.body.email
//     res.end(`your username is${username} and email is ${email}`)


// })
// app.listen(PORT,()=>{
//     console.log(`listening to request on http://localhost:${PORT}`);
// })


//session


// const express=require('express')
// const path=require('path')
// const app=express()
// const session=require('express-session')
// const PORT=process.env.PORT||3000
// app.use(session({
//     secret:'Your Secret Key',
//     resave:true,
//     saveUninitialized:true
// }))
// app.get('/',(req,res)=>{
//     req.session.name='John'
//     return res.send('session set')
// })
// app.get('/session',(req,res)=>{
//     var name=req.session.name
//     console.log(req.session)
//     return res.send(name)
// })
// app.get("/destroy",(req,res)=>{
//     req.session.destroy(function(error){
//         console.log('session destroyed');
//     })
//     res.end()
// })

// app.listen(PORT,()=>{
//     console.log(`listening to request on http://localhost:${PORT}`);
// })




//cookies

// const express=require('express')

// const app=express()
// const cookies=require('cookie-parser')

// const PORT=process.env.PORT||3000
// app.use(cookies())
// let users={
//     name:'john',
//     age:26
// }

// app.get('/',(req,res)=>{
//     res.send('cookie tutorial')

// })
// app.get('/setuser',(req,res)=>{
//     res.cookie('userData',users)
//     res.send('user data added to cookies')
// })
// app.get('/getuser',(req,res)=>{
//     res.send(req.cookies)
// })
// app.get('/logout',(req,res)=>{
//     res.clearCookie('userData')
//     res.send('user logout successfully')

// })

// app.listen(PORT,()=>{
//     console.log(`listening to request on http://localhost:${PORT}`);
// })



// const express=require('express')


// const app=express()

// const port=3000
// const myLogger=function(req,res,next){
//     console.log('LOGGED');
//     next()
// }
// const timer=function(req,res,next){
//     req.reqTime=Date.now()
//     next()
// }
// app.use(myLogger)
// app.use(timer)

// app.get('/',(req,res)=>{
//     res.send(`current time:${req.reqTime}`)
// })





// app.listen(port,()=>{
//     console.log(`server started at http://localhost:${port}`);
// })


// const express=require('express')
// const path=require('path')

// const app=express()


// const port=3000
// const publicpath=path.resolve(__dirname,"public")
// app.use(publicpath.static("static"))

// app.get('/',(req,res)=>{
//     res.send('static files')
// })




// app.listen(port,()=>{
//     console.log(`server starting at http://localhost:${port}`);
// })


// const express=require('express')
// const app=express()
// const port=3000


// let data={
//     id:1,
//     name:"Rishi"
// }

// app.get('/',(req,res)=>{
//     res.send('this express app')
// })

// app.get('/about',(req,res)=>{
//     res.send('this is about page')
// })

// app.get('/user',(req,res)=>{
//     res.json(data)
// })




// app.listen(port,()=>{
//     console.log(`server starts at http://localhost:${port}`);

// })




// const express=require('express')

// const app=express()
// const port=3000

// app.set('view engine','pug')



// app.get('/',(req,res)=>{
//     res.render('index',({title:"hii",h1:"hello",p:"brototype"}))
// })
// .listen(port,()=>{
//     console.log(`server starts at http://localhost:${port}`);
// })




// const express=require('express')
// const path=require('path')

// const app=express()
// port=3000

// app.set('views',path.join(__dirname,'views'))
// app.set('view engine','pug')
// app.use(express.urlencoded({
//     extended:true
// }))



// app.get('/',(req,res)=>{
//     res.render('index')
// })
// app.post('/form_submit',(req,res)=>{
//     const username=req.body.username
//     const email=req.body.email
//     res.end(`the username is${username} and email is ${email}`)

// })

// app.listen(port,()=>{
//     console.log(`server starts at http://localhost:${port}`);
// })




// const express=require('express')
// const app=express()
// const session=require('express-session')

// const port=3000
// app.use(session({
//     secret:"rishi",
//     resave:true,
//     saveUninitialized:true
// }))


// app.get('/',(req,res)=>{
//     req.session.name="rishi"
//     return res.send('session created')
// })

// app.get('/get',(req,res)=>{
//     const name=req.session.name
//     return res.send(name)
// })
// app.get('/destroy',(req,res)=>{
//     req.session.destroy(function(error){
//         console.log('session destroyed');
//     })
//     res.end()
    
// })








// app.listen(port,()=>{
//     console.log(`server starts at http://localhost:${port}`);
// })


// const express=require('express')


// const app=express()
// const cookies=require('cookie-parser')

// const port=3000
// let data={
//     id:1,
//     name:'rishi'
// }
// app.use(cookies())

// app.get('/',(req,res)=>{
//     res.send('welcome to cookies')
// })
// app.get('/setcookies',(req,res)=>{
//     res.cookie('userData',data)
//     res.send('cookies created')
// })
// app.get('/getcookies',(req,res)=>{
//     res.send(req.cookies)
// })
// app.get('/deletecookie',(req,res)=>{
//     res.clearCookie('userData')
//     res.send('cookie deleted')
// })
// app.listen(port,()=>{
//     console.log(`server starts at http://localhost:${port}`);

// })



// const http=require('http')
// const hostname='127.0.0.1'

// const port=3000

// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type','text/plain')
//     res.end('welcome to http server')
// })
// server.listen(port,hostname,()=>{
//     console.log(`server running at http://${hostname}:${port}`);
// })

// const http=require('http')
// const hostname='127.0.0.1'

// const port=3000

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('welcome to http server')
//     res.end()
// }).listen(port,hostname,()=>{
//     console.log(`server running at http://${hostname}:${port}`);
// })

// const http=require('http')

// http.get('http://api.open-notify.org/astros.json',resp=>{
//     data=''
//     resp.on('data',man=>{
//         data+=man
//     })
//     resp.on('end',()=>{
//         const jsondata=JSON.parse(data)
//         console.log(jsondata)
//     })
// })


// const http=require('http')

// const data=JSON.stringify({
//     name:'john doe',
//     job:'content writter'

// })
// const options={
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:
//     {
//         'Content-Type':'application/json'
//     }
// }

// const req=http.request(options,(res)=>{
//     let body=''
//     console.log('StatusCode:',res.statusCode);
//     res.on('body',(chunk)=>{
//         body+=chunk
//     })
//     res.on('end',()=>{
//         console.log('body',JSON.parse(body))
//     })
// })
// req.write(data)
// req.end()



// const http=require('http')
// const axios=require('axios')

// const data=JSON.stringify({
//     name:'john doe',
//     job:'content writter'

// })

// axios.post('https://reqres.in/api/users',data).then(res=>{
//     console.log(`Status Code:${res.status}`)
//     console.log(`body:${JSON.stringify(res.data)}`);

// }).catch(err=>{
//     console.log(err);
// })



// const fs=require('fs')

// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
// const data=fs.readFileSync('test.txt',{encoding:'utf-8',flag:'r'})
// console.log(data)


// fs.stat('test.txt',(err,stats)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isSymbolicLink())


// })
// const fs=require('fs')
// const content=[{
//     type:'Node Application'

// }]

// fs.writeFileSync('test.json',JSON.stringify(content))


// const fs=require('fs')
// const content="node application"
// fs.writeFile('test.txt',content,{flag:'a+'},err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('successfully done')
// })

// const fs=require('fs')
// fs.unlink('test.txt',err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('deleted successfully');
// })


// const http=require('http')
// function index(request,response){
//     response.writeHead(200)
//     response.end('node routing')
// }
// function about(request,response){
//     response.writeHead(200)
//     response.end('about routing')
// }


// http.createServer(function(req,res){
//     if(req.url=='/'){
//         return index(req,res)

//     }
//     if(req.url=='/about'){
//         return about(req,res)
//     }
// }).listen(8000)

// const http=require('http')
// const routes={
//     '/':function index(request,response){
//         response.writeHead(200)
//         response.end('node routing')
//     },
//     '/about':function about(request,response){
//         response.writeHead(200)
//         response.end('about routing')
//     }
    
// }



// http.createServer(function(req,res){
//     if(req.url in routes){
//         return routes[req.url](req,res)
//     }
        
// }).listen(8000)


// const path=require('path')
// // const file=path.basename('test.json')
// // const file=path.dirname('expressdailytution/express-app/test.json')
// // const file=path.isAbsolute('C:\expressdailytution\express-app\')
// // const file=path.parse('expressdailytution/express-app/test.json')
// const file=path.resolve('/expressdailytution/express-app','test.json')
// console.log(file);


// const events=require('events')

// let ev=new events.EventEmitter()

// // ev.on('event',function(data){
// //     console.log('event:',data)

// // })
// // ev.emit('emit','event emited')
// var c1=(code,msg)=>console.log(`got${code}and ${msg}`)
// ev.once('eventOnce',c1)
// ev.off('eventOnce',c1)
// ev.emit('eventOnce',200,'ok')

// const http=require('http')
// const fs=require('fs')

// const server=http.createServer((req,res)=>{
//     fs.readFile('test.json',(err,data)=>{
//         res.end(data)
//     })
// })
// server.listen(3000,()=>{'application started on port 3000'})


// const http=require('http')
// const fs=require('fs')

// const server=http.createServer((req,res)=>{
//     let stream=fs.createReadStream('test.json')
//     stream.pipe(res)
// })
// server.listen(3000,()=>{'application started on port 3000'})



// const buf=Buffer.from('Hey')
// const buf=Buffer.alloc(4)
// buf.write('Hey')


// console.log(buf.toString())
// console.log(buf[0])
// console.log(buf[1])
// console.log(buf[2])
// buf[1]=111
// console.log(buf.toString())



// throw new Error('error message')


// try{
//     console.log('start try block')
//     throw new Error('error')
//     console.log('start try block')
// }catch(err){
//     console.log('Error message',err)
// }

// doSomething()
// .then(()=>{
//     return doSomething1().catch(err=>{
//         throw err
//     })
// })
// .then(()=>{
//     return doSomething2().catch(err=>{
//         throw err
//     })
// })
// .catch(err=>console.error(err))

// async function somefunction(){
//     try{
//         await someotherfunction()
//     }catch(err){
//         console.error(err.message);
//     }
// }


// const express=require('express')
// const app=express()

// const myLogger=function(req,res,next){
//     console.log('Logged');
//     next()
// }
// const requesttime=function(req,res,next){
//     req.reqTime=Date.now()
//     next()
// }

// app.use(myLogger)
// app.use(requesttime)
// app.get('/',function(req,res){
//     res.send(`current time:${req.reqTime}`)
// })

// app.listen(3000,()=>{
//     console.log(`port started on http://localhost:3000`)
// })



// const express=require('express')
// const app=express()
// const session=require('express-session')

// const port=process.env.PORT||3000

// app.use(session({
//     secret:'fduygjhkj',
//     unsave:true,
//     saveUninitialized:true
// }))
// app.get('/',(req,res)=>{
//     req.session.name='john'
//     res.send('session created')

// })
// app.get('/get',(req,res)=>{
//     const data=req.session.name
//     res.send(data)


// })
// app.get('/distroy',(req,res)=>{
//     req.session.destroy(function(err){
//         console.log('session destroyed')
//     })
//     res.end('session destroyed')
// })

// app.listen(port,()=>{
//     console.log(`listening to requests on http://localhost:${port}`)

// })

const express=require('express')
const app=express()
const cookies=require('cookie-parser')
const port=3000
app.use(cookies())

let users={
    name:'john',
    age:28
}
app.get('/',(req,res)=>{
    res.send('cookies tutorial')
})
app.get('/setuser',(req,res)=>{
    res.cookie("userData",users)
    res.send('userdata added to cookies')
})
app.get('/getuser',(req,res)=>{
    res.send(req.cookies)
})
app.get('/destroy',(req,res)=>{
    res.clearCookie('userData')
    res.send('user logout successfully')
})

app.listen(port,()=>{
    console.log(`listening to requests on http://localhost:${port}`)
})