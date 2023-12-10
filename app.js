const express = require('express')
const router = require('./src/routes/api')
const app = new express()
const cors = require('cors')
const hpp = require('hpp')
const helmet = require('helmet')
const mongo_sanitize = require('express-mongo-sanitize')
const rate_limit = require('express-rate-limit')
const xss_clean = require('xss-clean')
const mongoose = require('mongoose')
const path = require('path')

//security middlewares impliment

const limiter = rate_limit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100,
	standardHeaders: 'draft-7', // draft-6: 
	legacyHeaders: false, // Disable the 
})

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(mongo_sanitize())
app.use(limiter)
app.use(xss_clean())

//database cannection
const uri = 'mongodb://127.0.0.1:27017'
const option  = {
    user:'',
    pass:''
}

mongoose.connect(uri,option).then(()=>{
      console.log('DB cannection success')
}).catch((error)=>{
  console.log(error)
})

app.use(express.static('client/dist'))

app.get('*',(req,res)=>{
       res.sendFile(path.join(__dirname,'client','dist','index.html'))
})


//route
app.use('/api/v1',router)









module.exports = app