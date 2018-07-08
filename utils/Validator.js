/* created by Villan_98 on 07/07/2018*/
const lodash=require('lodash')
module.exports={
    checkEmpty:(requery,done)=>{
        for( let index in requery)
        {
            if(requery[index]==='')
            {
                if(index==='crName')
                {
                    for(let i=0;i<requery[index].length;i++)
                    {
                        if(requery[index][i]==='')
                        {
                            return false
                        }
                    }
                }
                return false;
            }
        }
        return done(null,requery)
    },
    checkLimit:(err,requery)=>{
        if(err===null)
        {
            let data=requery.classId.split('/')
            if(requery.validTime>12||(requery.startingRoll>requery.endingRoll ))
            {
                return false
            }
            else if((requery.endingRoll-requery.startingRoll)<requery.totalCandidates)
            {
                return false
            }
            else if(requery.totalCandidates<=1||(data.length<4))
            {
                return false
            }
            else if(requery.collegeShortName!==data[0]||(!('crName' in requery)))
            {
                return false
            }
            else if(lodash.uniq(requery['crName']).length<requery.crName.length)
            {
                return false
            }
            else{
                return true
            }

        }
        else{
            return false
        }
    }


}