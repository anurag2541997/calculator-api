const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.route('/').get((req,res)=>{
    return res.json("Hello World!")
})

//Addition

app.route('/add').post((req,res)=>{
    const {num1,num2}=req.body;
    if(typeof(num1)=="string" || typeof (num2)=="string")
    {
        return res.json({
            message : "invalid data types"
        })
    }
    if(num1>1000000 || num2> 1000000)
    {
        return res.json({
            message :"Overflow"
        })
    }
    return res.json({
        status :"success/failure/error",
        message : "the sum of given two number",
        sum : num1+num2
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;