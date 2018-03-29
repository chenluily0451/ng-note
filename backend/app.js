/**
 * Created by chenlu on 2018/3/29.
 */

const express = require('express')

const mongoose = require('mongoose')


const routers = require('./router/router')

const bodyParser = require("body-parser")

const db = mongoose.connect('mongodb://localhost:27017/dataInfo');



const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3001,()=>{
  console.log('app listening on port 3001')
})



app.use('/api',routers)
