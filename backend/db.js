const mysql = require("mysql2")

const db = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"mec_report_management",
    // "connectTimeout":3000000
})

db.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Database connected")
})

module.exports = db