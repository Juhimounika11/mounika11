let mysql = require("mysql");
let express= require("express");
let cors= require("cors");
let app= express();
app.use(cors());
app.use(express.json());
app.listen(2234,()=>{
    console.log("listening to port 2234");
})
app.post("/signup",(req,res)=>{
    let sqlQuery=`insert into users(name,age,email,mobileno,password) values('${req.body.name}','${req.body.age}','${req.body.email}','${req.body.password}','${req.body.mobileno}') `
    console.log(sqlQuery);
    connection.query(sqlQuery),(err,results)=>{
if(err){
    console.log("unable to connect");
}
else{
    res.json(["user created successfully"])
}
    };
})


let connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:3306,
    database:"sms"
})
connection.connect((err)=>{
if(err){
    console.log("something went wrong");
}
else{
    console.log("responding to db");
    getDataFromServer();
}
})
getDataFromServer=()=>{
connection.query("select * from users",(err, results)=>{
    if(err){
        console.log("error is highlighting");
    }
    else(results);
})
}