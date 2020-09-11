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
    let sum=parseFloat(num1)+parseFloat(num2)
    if(num1 >1000000 || num2 > 1000000 || sum > 1000000){
        return res.json({
            message: "Overflow"

        })
    }
    
    return res.json({
        status: "success/failure/error",
        message: "the sum of given two numbers",
        sum: parseFloat(num1)+parseFloat(num2)
    })
}
})
//Subtraction
app.route('/sub').post((req,res)=>{
    const {num1,num2}=req.body
    if(typeof (num1)=="string" || typeof (num2)==="string"){
        return res.json({
            message: "invalid data types"
        })
    }
    const sum=parseFloat(num1)-parseFloat(num2);
    if(num1 >1000000 || num2 > 1000000 || sum > 1000000   ){
        return res.json({
            message: "Underflow"
        })
    }
    return res.json({
        status: "success/failure/error",
        message: "the difference of given two numbers",
        sum: parseFloat(num1)- parseFloat(num2)
    })
})
//Multiply
app.route('/multiply').post((req,res)=>{
    const {num1,num2}=req.body
    if(typeof (num1)==="string" || typeof (num2)==="string"){
        return res.json({
            message: "Invalid data types"
        })
    }
    const sum=parseFloat(num1)*parseFloat(num2);
    if(num1 >1000000 || num2 > 1000000 || sum > 1000000){
        return res.json({
            message: "Overflow"

        })
    }
    return res.json({
        status: "success/failure/error",
        message: "The product of given numbers",
        sum: sum
    })
})
//Division
app.route('/division').post((req,res)=>{
	const {num1,num2}=req.body
    if(num2===0){
        return res.json({
            message: "Cannot divide by zero" 
        })
    }    
    return res.json({
        status: "success/failure/error"
        message: "the sum of given two number",
        sum: parseFloat(num1)/parseFloat(num2)
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
