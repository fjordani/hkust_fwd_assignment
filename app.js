const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const { exec } = require("child_process");

// use env vars
require('dotenv').config();

//set path to public files
app.use('/static', express.static(path.join(__dirname, 'public')))
//set path to node_modules files
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/home.html'))
})

router.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/about.html'))
})

router.get('/contact',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/contact.html'))
})

router.get('/menu',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/views/home.html'))
})

// add router
app.use('/',router);

// kill any process running on port 8080 before fo app.listen
if(process.env.PORT == undefined){
    exec("lsof -n -i:8080 | grep LISTEN | awk '{ print $2 }' | uniq | xargs -r kill -9", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

app.listen(process.env.PORT || 8080, () => {   
  console.log(`Example app listening at http://localhost:${process.env.PORT || 8080}`);
});
