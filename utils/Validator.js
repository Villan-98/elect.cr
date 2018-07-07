/* created by Villan_98 on 07/07/2018*/
module.exports={
    checkEmpty:(requery,done)=>{
        for( let index in requery)
        {
            if(requery[index]==='')
            {
                return false;
            }
        }
        return done(null,requery)
    },
    checkLimit:(err,requery)=>{
        if(err===null)
        {
            if(requery.validTime>12||(requery.startingRoll>requery.endingRoll ))
            {
                return false
            }
            else if((requery.endingRoll-requery.startingRoll)<requery.totalCandidates)
            {
                return false
            }
            else if(requery.totalCandidates<=1)
            {
                return false
            }
            else{
                return true
            }

        }
    }


}