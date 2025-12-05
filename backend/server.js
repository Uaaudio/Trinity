const express = require("express")
const app = express();
const PORT  = 3001;
const ejs = require("ejs")
const path = require("path")

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/pages'))
app.use(express.static(path.join(__dirname, '../frontend/')))


app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(PORT,()=>{
    console.log("Aplicação Rodando na porta"+PORT)
})  