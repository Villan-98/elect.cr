/*created by Pranav Gupta (pg07codes) on 05-07-2018 */
const router=require('express').Router()
const utils=require('../utils/UrlGenerator')
const ctrl=require('../controllers/createPoll')
const pollBooth=require('../db/models').pollBooth


router.get("/createPoll",(r,s)=>{
    s.render('newPollForm')
})

router.post("/createPoll",(r,s)=>{
    utils.generate(r.body)
    ctrl.createNewPoll(r.body)
    s.send("doneSubmission")
})

router.get("/:url",(r,s)=>{
    let classId=utils.decodeUrl(r.params.url)
    ctrl.getPollDetails(r.params.url,function(data){
        s.send(data)
    })
})

module.exports=exports=router