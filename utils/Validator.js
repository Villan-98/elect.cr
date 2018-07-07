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
            if(requery.validtime>12||(requery.startingroll>=requery.endingroll ))
            {
                return false
            }
            else if((requery.endingroll-requery.startingroll)<requery.totalcr)
            {
                return false
            }
            else if(requery.totalcr==='1')
            {
                return false
            }
            else{
                return true
            }

        }
    }


}