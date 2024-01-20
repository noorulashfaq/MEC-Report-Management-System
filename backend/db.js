const mysql = require("mysql2")

const db = mysql.createConnection({
<<<<<<< HEAD
    // "host":"10.167.1.2",
    // "port":3306,
    // "user":"testuser",
    // "password":"testuser",
    // "database":"mec_report_management",
    // "connectTimeout":3000000
    "host":"localhost",
    "port":3306,
    "user":"root",
    "password":"",
    "database":"mec_report_management",
    "connectTimeout":3000000
=======
    "host":"10.167.1.2",
    "port":3306,
    "user":"testuser",
    "password":"testuser",
    "database":"mec_report_management",
    // "connectTimeout":3000000
>>>>>>> b3ebc5431490c62f55c9de01d3b023a3672d5db6
})

db.connect((err)=>{
    if(err){
<<<<<<< HEAD
        console.log(err);
=======
        console.log(err)
        return
>>>>>>> b3ebc5431490c62f55c9de01d3b023a3672d5db6
    }
    else{
    console.log("Database connected")
    }
})

module.exports = db