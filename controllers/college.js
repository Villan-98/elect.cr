/*created by Pranav Gupta (pg07codes) on 07-07-2018 */

const college=require('../db/models').college

module.exports={
    insertCollege:(data)=>{
        college.create({
            shortName:data.shortName,
            name:data.name
        }).then(()=>{
            console.log("success in inserting college")
        }).catch((err)=>{
            console.log(err)
        })
    }
}