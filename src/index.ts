import express from "express"

const app = express()
app.use(express.json())

const PORT = 4000

app.get("/", ((_req,res)=>{
    console.log("ok");
    res.status(200).send("aaa")    
}))

app.listen(PORT,()=>{
    console.log(`all ok in ${PORT}`);    
})