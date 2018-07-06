/*created by Pranav Gupta (pg07codes) on 05-07-2018 */

const mysql=require('mysql2')
const Sequelize = require('sequelize')

//production db setup--not working currently
//const db=new Sequelize('mysql://testuser:pass@localhost:5432/testdb')

const db=new Sequelize('testdb','testuser','pass',{
   dialect:'mysql'
})

//models to be defined inside here


db.sync({
    //force:true,
    //alter:true
})
.then(()=>{
    console.log("db synced")
})

module.exports={db}