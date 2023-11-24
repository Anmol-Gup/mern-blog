require('dotenv').config()
require('./connection')
const express=require('express')
const app=express()
const port=process.env.PORT || 3000
const Comment=require('./model')
const cors=require('cors')

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/getcomments/:name',async(req,res)=>{
    const comment=await Comment.find(req.params)
    try{
        res.status(200).json(comment[0].comments)
    }catch(error){
        res.status(500).send(error)
    }
})

app.post('/addcomment',async(req,res)=>{
    const {name,user,message}=req.body
    const result=await Comment.updateOne({name},{
        $push:{
            comments:{user,message}
        }
    })
    console.table(req.body)
    res.json(result)
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}...`)
})