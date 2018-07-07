/*created by Pranav Gupta (pg07codes) on 07-07-2018 */

const router=require('express').Router()
const ctrl=require('../controllers/college')

// this is admin route and will be secured later to not be used by public
router.get("/",(r,s)=>{
    s.render("admin")
})

router.post("/",(r,s)=>{
    ctrl.insertCollege(r.body)
    s.render("home")
})

module.exports=router
