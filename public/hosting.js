
const express = require('express')
const app = express()
const data = require('./db.json')

app.use(express.static('public'));

app.get('/',(req,res)=>{
        res.json(data);
})

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});