/*created by Pranav Gupta (pg07codes) on 06-07-2018 */
const pollBooth=require('../db/models').pollBooth
const candidate=require('../db/models').candidate
const db=require('../db/models').db
module.exports={

    createNewPoll(data){
        db.transaction((t)=>{
            return pollBooth.create({
                URL:data.url,
                startRoll:data.startingRoll,
                endRoll:data.endingRoll,
                validTime:data.validTime,
                totalCandidates:data.totalCandidates,
                collegeShortName:data.collegeShortName
            },{transaction:t}).then((poll)=>{
                for(let i=0;i<data['crName'].length;i++)
                {
                    return candidate.create({
                            pollBoothURL:poll.URL,
                            name:data['crName'][i]
                        },{transaction:t}
                    )
                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },
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