const app = require("express")()  ;

const port = 8080 ; 

app.listen( port, ()=>{
    console.log(`Server running on Port ${port}`)
})


app.get("/test" , (req ,res)=>{
    res.status(200)
    res.json({msg : "Hello From Server Karim"})
})
