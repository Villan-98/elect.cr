/*created by Pranav Gupta (pg07codes) on 06-07-2018 */
const pollBooth=require('../db/models').pollBooth

module.exports={
    createNewPoll(data){
        pollBooth.create({
            URL:data.url,
            startRoll:data.startingRoll,
            endRoll:data.endingRoll,
            validTime:data.validTime,
            totalCandidates:data.totalCandidates
        }).catch((err)=>{
            console.log(err)
        })
    },
    // getPollDetails:(e,s)=>{
    //     pollBooth.find({
    //         where:{url:e}
    //     }).then((data)=>{
    //         s.send(data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    getPollDetails:(e,cb)=>{
        pollBooth.find({
            where:{url:e}
        }).then((data)=>{
            cb(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
}