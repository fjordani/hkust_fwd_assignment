const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
// const { exec } = require('child_process');

// exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
//     if (err) {
//         console.log(err);
//     }

//     if (typeof stdout === 'string' && (stdout.trim() === 'master')) {
//       console.log(`The branch is master`);
//       // Call your function here conditionally as per branch
//     }
// });

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

// add router
app.use('/',router);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 8080}`);
});
