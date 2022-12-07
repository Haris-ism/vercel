const app=require('express')()

app.get("/",(req,res)=>{
    res.json({
        message:"hi"
    })
})

app.listen('6969',()=>{
    console.log("server start")
})