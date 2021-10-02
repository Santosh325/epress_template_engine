const express = require('express')
const app = express();
const port = 8000;
const path = require('path')

// const staticPath = path.join(__dirname,'/views')

// app.use(express.static(staticPath))
// 
// to set the view engine
app.set("view engine", "hbs")

// template engine route
app.get('',(req,res) => {
    res.render('index.hbs')
})

app.get('/',(req,res) => {
    res.send('hello from template eng')
})

app.listen(port,() => {
    console.log('listening on port ' + port)
})