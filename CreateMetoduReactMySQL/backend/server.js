const express=require("express")
const cors=require("cors")
const mysql=require("mysql2");
const app=express()
app.use(express.json())
app.use(cors())

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"***************",
    password:"***************"
})
app.post("/create",(req,res)=>{
    const values=[
        req.body.username,
        req.body.lastname,
        req.body.phone,
        req.body.email
    ]
    connection.query("INSERT INTO usertbl (`username`,`lastname`,`phone`,`email`) VALUES(?)",[values],(err,results)=>{
        if(err) return res.json(err)
        return res.json(results
    )
    })
})
app.get("/",(req,res)=>{
    connection.query("select*from usertbl",(err,results)=>{
        if(err) return res.json(err)
        return res.json(results)
    })
})
app.listen((3000),()=>{
    console.log("3000")
})