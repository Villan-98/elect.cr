//requiring files here

const express = require("express")
const path = require("path")
const hbs=require('express-hbs')
const api=require("./routes/api_v1")

const app = express()

//serving files and parsing request body

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//test view engine set-up
app.engine('hbs', hbs.express4())
app.set("view engine",'hbs')
app.set("views",'./test-frontend')

//home route

app.get("/", (r, s) => {
    s.render('home.hbs')
})

//server starts listening

PORT=process.env.PORT || 8888
app.listen(8888, () =>
    console.log("up at http://localhost:"+PORT)
)