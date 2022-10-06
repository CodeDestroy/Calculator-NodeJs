const express = require("express");
const fs = require("fs");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
const PORT = 3000;
const calculator = require("./Service/service")
app.use(express.static(__dirname + "/public"));


app.post('/', urlencodedParser,  function(req, res) {
    if(!req.body) return response.sendStatus(400);
    const firstNum = Number(req.body.firstNum);
    const secNum = Number(req.body.secNum);
    const operation = req.body.operation;
    result = calculator.calculate(firstNum, secNum, operation);
    fs.readFile(__dirname + "/public/index.html", "utf8", function(error, data){
        data = data.replace("{result}", result);
        res.end(data);
    })
    
});

app.listen(PORT, () =>  console.log(`Waiting for connection on port ${PORT}`));