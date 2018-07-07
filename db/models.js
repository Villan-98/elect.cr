/*created by Pranav Gupta (pg07codes) on 05-07-2018 */

const mysql=require('mysql2')
const Sequelize = require('sequelize')
const dt=Sequelize.DataTypes

//production db setup--not working currently
//const db=new Sequelize('mysql://testuser:pass@localhost:5432/electdb')

const db=new Sequelize('electdb','testuser','pass',{
    dialect:'mysql',
    timezone:'+05:30'

})

//models to be defined inside here

college=db.define('college',{
    shortName:{
        type:dt.STRING,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
    name:{
        type:dt.STRING,
        allowNull:false,
    }

})

pollBooth=db.define("pollBooth",{
    URL:{
        primaryKey:true,
        unique:true,
        type:dt.STRING,
        allowNull:false
    },
    startRoll:{
        type:dt.INTEGER,
        allowNull:false
    },
    endRoll:{
        type:dt.INTEGER,
        allowNull:false
    },
    validTime:{
        type:dt.INTEGER,
        defaultValue:3
    },
    totalCandidates:{
        type:dt.INTEGER,
        defaultValue:2
    }

})

college.hasMany(pollBooth)
pollBooth.belongsTo(college)

db.sync({
    //force:true,
    //alter:true
})
.then(()=>{
    console.log("db synced")
})

module.exports={db,pollBooth,college}