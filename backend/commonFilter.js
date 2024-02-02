const express = require('express')
const base=require('./db')
// const bodyParser = require('body-parser')
const route = express.Router()


// route.post('/filterReportsWithParticulars/:head',async(req,res)=>{
//     const {acdyr_id,sem_id,major_id,sub_id,dept_id,emp_id} = req.body
//     const faculty_id = emp_id.split(",")
//     let resultRecord=[]
//     let resultArray=[]
//     if(major_id=="" && sub_id==""){
//     let sql="SELECT * FROM data_sub_report_type where head_report_id=?"
//     base.query(sql,[req.params.head],(err,rows)=>{
//         if(err){
//             return
//         }
//         // res.status(200).json({rows})
//         for(let i=0;i<rows.length;i++){
//             // 1
//             if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) order by report_id desc`
//                 base.query(sql,(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                     // res.status(200).json(resultArray)
//                 })
//             }
//             // 2
//             else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) order by report_id desc`
//                 base.query(sql,(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                     // res.status(200).json(resultArray)
//                 })
//             }
//             // 3
//             else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) order by report_id desc`
//                 base.query(sql,(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                     // res.status(200).json(resultArray)
//                 })
//             }
//             // 4
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`
//                 base.query(sql,(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                     // res.status(200).json(resultArray)
//                 })
//             }
//             // 5
//             else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 for(let j=0;j<faculty_id.length;j++){
//                     let sql=`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//                 base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                 })
//                 }
//                 // res.status(200).json(resultArray)
//             }
//             // 6
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`
//                 base.query(sql,(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                     // res.status(200).json(resultArray)
//                 })
//             }
//             // 7
//             else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 for(let j=0;j<faculty_id.length;j++){
//                     let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//                     base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                 })
//                 }
//                 // res.status(200).json(resultArray)
//             }
//             // 8
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 for(let j=0;j<faculty_id.length;j++){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//                 base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let k=0;k<temp.length;k++){
//                         resultArray.push(temp[k])
//                     }
//                 })
//                 }
//                 // res.status(200).json(resultArray)
//             }
//         }
//             res.status(200).json({resultArray})
//             return
//     })
//     }
//     if(major_id!="" && sub_id==""){
//         let sql=`SELECT * FROM data_sub_report_type where major_report_id in (${major_id})`
//         base.query(sql,(err,temp)=>{
//             if(err){
//                 return
//             }
//             for(let k=0;k<temp.length;k++){
//                 // console.log(temp[i].table_name)
//                 // 9
//                 if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id})`
//                     base.query(sql,(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 // 10
//                 else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and major_report_id in (${major_id}) order by report_id desc`
//                     base.query(sql,(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 // 11
//                 else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) order by report_id desc`
//                     base.query(sql,(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 // 12
//                 else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and major_report_id in (${major_id}) order by report_id desc`
//                     base.query(sql,(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 // 13
//                 else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                     for(let j=0;j<faculty_id.length;j++){
//                         let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//                     base.query(sql,[`%${faculty_id[j]}%`],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                     })
//                     }
//                     res.status(200).json(resultArray)
//                 }
//                 // 14
//                 else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                     for(let j=0;j<faculty_id.length;j++){
//                         let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id ${sem_id} and major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//                     base.query(sql,[`%${faculty_id[j]}%`],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let k=0;k<temp.length;k++){
//                             resultArray.push(temp[k])
//                         }
//                     })
//                     }
//                     res.status(200).json(resultArray)
//                 }
//             }
//         })
//     }
//     if(sub_id!=""){
//         // 15
//         if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         // 16
//         else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
//             let sql=`select * from ${sub_id} where dept_id in (${dept_id}) order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         // 17
//         else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         // 18
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         // 19
//         else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             for(let j=0;j<faculty_id.length;j++){
//                 let sql=`select * from ${sub_id} where dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//             base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//             })
//             }
//             res.status(200).json(resultArray)
//         }
//         // 20
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         // 21
//         else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             for(let j=0;j<faculty_id.length;j++){
//                 let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
//             base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//             })
//             }
//             res.status(200).json(resultArray)
//         }
//         // 22
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             for(let j=0;j<faculty_id.length;j++){
//                 let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in(${dept_id}) and event_coordinator like ? order by report_id desc`
//             base.query(sql,[`%${faculty_id[j]}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let k=0;k<temp.length;k++){
//                     resultArray.push(temp[k])
//                 }
//             })
//             }
//             res.status(200).json(resultArray)
//         }
//     }
// })




route.post('/filterReportsWithParticular/:head', async (req, res) => {
    try {
        const { acdyr_id, sem_id, major_id, sub_id, dept_id, emp_id } = req.body;
        const faculty_id = emp_id.split(",");
        const resultArray = [];

        const processQuery = async (sql, params) => {
            return new Promise((resolve, reject) => {
                base.query(sql, params, (err, result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        };

        const pushToResultArray = async (sql, params) => {
            const temp = await processQuery(sql, params);
            if (temp.length > 0) {
                resultArray.push(...temp);
            } else {
                console.log("No records");
            }
        };

        if (major_id == "" && sub_id == "") {
            const rows = await processQuery(`SELECT * FROM data_sub_report_type WHERE head_report_id=${req.params.head}`)
            for (let i = 0; i < rows.length; i++) {
                // 1
                if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) order by report_id desc`)
                }
                // 2
                else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) order by report_id desc`)
                }
                // 3
                else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) order by report_id desc`)
                }
                // 4
                else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`)
                }
                // 5
                else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let j=0;j<faculty_id.length;j++){
                        await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                    }
                }
                // 6
                else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`)
                }
                // 7
                else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let j=0;j<faculty_id.length;j++){
                        await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                    }
                }
                // 8
                else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let j=0;j<faculty_id.length;j++){
                        await pushToResultArray(`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                    }
                }
                
            }
        }
        else if (major_id !== "" && sub_id == "") {
            const temp = await processQuery("SELECT * FROM data_sub_report_type WHERE major_report_id IN (?)", [major_id]);

            for (let i = 0; i < temp.length; i++) {

                // 9
                if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id})`)
                }
                // 10
                else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and major_report_id in (${major_id}) order by report_id desc`)
                }
                // 11
                else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) order by report_id desc`)
                }
                // 12
                else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and major_report_id in (${major_id}) order by report_id desc`)
                }
                // 13
                else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let j=0;j<faculty_id.length;j++){
                        await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                    }
                }
                // 14
                else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let j=0;j<faculty_id.length;j++){
                        await pushToResultArray(`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id ${sem_id} and major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                    }
                }
            }
        }
        else if (sub_id !== "") {
            // 15
            if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
                await pushToResultArray(`select * from ${sub_id} order by report_id desc`)
            }
            // 16
            else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
                await pushToResultArray(`select * from ${sub_id} where dept_id in (${dept_id}) order by report_id desc`)
            }
            // 17
            else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
                await pushToResultArray(`select * from ${sub_id} where acdyr_id in (${acdyr_id}) order by report_id desc`)
            }
            // 18
            else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
                await pushToResultArray(`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`)
            }
            // 19
            else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
                for(let j=0;j<faculty_id.length;j++){
                    await pushToResultArray(`select * from ${sub_id} where dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                }
            }
            // 20
            else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
                await pushToResultArray(`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`)
            }
            // 21
            else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
                for(let j=0;j<faculty_id.length;j++){
                    await pushToResultArray(`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                }
            }
            // 22
            else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
                for(let j=0;j<faculty_id.length;j++){
                    await pushToResultArray(`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in(${dept_id}) and event_coordinator like "%${faculty_id[j]}%" order by report_id desc`)
                }
            }
        }

        res.status(200).json({ resultArray });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// route.get('/deltables',async(req,res)=>{
//     let sql=`select table_name from data_sub_report_type`
//     base.query(sql,(err,rows)=>{
//         if(err){
//             console.log(err)
//             // reject(err)
//             return
//         }
//         // res.status(200).json({rows})
//         for(let i=0;i<rows.length;i++){
//             if(rows[i].table_name=="data_management" || rows[i].table_name=="data_management_seminar"){
//                 continue
//             }
//             // let sql=`truncate table ${rows[i].table_name}`
//             let sql=`
//             DELIMITER //
//             CREATE TRIGGER update_${rows[i].table_name}
//             BEFORE INSERT ON ${rows[i].table_name}
//             FOR EACH ROW
//             BEGIN
//                 DECLARE next_rep_id varchar(100);
//                 DECLARE unique_rep_id int;
//                 SELECT CONCAT("RPT",COALESCE(MAX(rep_id), 5000) + 1) INTO next_rep_id FROM unique_ids;
//                 SELECT COALESCE(MAX(rep_id),5000) + 1 INTO unique_rep_id FROM unique_ids;
            
//                 SET NEW.report_id = next_rep_id;
                
//             insert into unique_ids values(unique_rep_id);
//             END;
//             //`
//             base.query(sql,(err,result)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 // res.status(200).json({result})
//                 console.log(`${rows[i].table_name} dropped`)
//             })
//         }
//     })
// })
route.get('/deltables', async (req, res) => {
    let sql = `SELECT table_name FROM data_sub_report_type where head_report_id=1001`;
    base.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].table_name === 'data_management' || rows[i].table_name === 'data_management_seminar') {
                continue;
            }

            let triggerSql = `
                CREATE TRIGGER update_update_data_centre_for_aaa_guest_lecture
                BEFORE INSERT ON data_centre_for_academic_and_administrative_audit_guest_lecture
                FOR EACH ROW
                BEGIN
                    DECLARE next_rep_id varchar(100);
                    DECLARE unique_rep_id int;
                    SELECT CONCAT("RPT", COALESCE(MAX(rep_id), 5000) + 1) INTO next_rep_id FROM unique_ids;
                    SELECT COALESCE(MAX(rep_id), 5000) + 1 INTO unique_rep_id FROM unique_ids;
                    SET NEW.report_id = next_rep_id;
                    INSERT INTO unique_ids VALUES (unique_rep_id);
                END;
            `;

            base.query(triggerSql, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`${rows[i].table_name} trigger created`);
            });
        }
    });
});


module.exports=route