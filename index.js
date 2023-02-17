const express = require("express");
var bodyParser = require('body-parser')
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.post("/login", (req, res) => {
    if(req.body.username === 'test' && req.body.password === '123456'){
        res.send('Successful!!!');
      }else{
        res.send('Faild!!!');
      }
      
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});