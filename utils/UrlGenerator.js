/*created by Pranav Gupta (pg07codes) on 06-07-2018 */

let base64 =require('base-64')

module.exports={
    generate:(id)=>{
        let encodedClassId=base64.encode(id.classId)
        id.url=encodedClassId
        let data=id.classId.split('/')
        let [college,batchCode,branchCode,groupCode]=[data[0],data[1],data[2],data[3]]
        console.log(college+batchCode+branchCode+groupCode)
        return({
            college:college,
            batchCode:batchCode,
            branchCode:branchCode,
            groupCode:groupCode,
            url:encodedClassId
        })
    },
    decodeUrl:(url)=>{
        return base64.decode(url)
    },
}