const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// use env vars
require('dotenv').config();

//set path to public files
app.use('/static', express.static(path.join(__dirname, 'public')))
//set path to node_modules files
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/home.html'))
})

router.get('/aboutus',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/aboutus.html'))
})

// add router
app.use('/',router);

app.listen(process.env.PORT || 8001, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 8001}`);
});
