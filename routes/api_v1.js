/*created by Pranav Gupta (pg07codes) on 05-07-2018 */
const router=require('express').Router()
const utils=require('../utils/UrlGenerator')
const ctrl=require('../controllers/createPoll')
const validator=require('../utils/Validator')

router.get("/createPoll",(r,s)=>{
    s.render('newPollForm')
})

router.post("/createPoll",(r,s)=>{
    if(validator.checkEmpty(r.body,validator.checkLimit))
    {
        utils.generate(r.body)
        ctrl.createNewPoll(r.body)
        s.send("doneSubmission")
    }
    else
    {
        s.render('newPollForm')
    }

})

router.get("/:url",(r,s)=>{
    let classId=utils.decodeUrl(r.params.url)
    ctrl.getPollDetails(r.params.url,function(data){
        // s.send(data)
        s.render("votingPage",{data:data})
    })
})

module.exports=exports=router