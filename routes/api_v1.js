/*created by Pranav Gupta (pg07codes) on 05-07-2018 */
const router=require('express').Router()
const utils=require('../utils/UrlGenerator')
const validator=require('../utils/Validator')
router.get("/createPoll",(r,s)=>{
    s.render('newPollForm')
})

router.post("/createPoll",(r,s)=>{
    if(validator.checkEmpty(r.body,validator.checkLimit))
    {
        utils.generate(r.body.classid)
        s.send("submitted")
    }
})

module.exports=exports=router