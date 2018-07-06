/*created by Pranav Gupta (pg07codes) on 05-07-2018 */
const router=require('express').Router()


router.get("/createPoll",(r,s)=>{
    s.render('newPollForm')
})

router.post("/createPoll",(r,s)=>{
    s.send(r.body)
})

module.exports=exports=router