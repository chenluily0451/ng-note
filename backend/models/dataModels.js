/**
 * Created by chenlu on 2018/3/29.
 */
const mongoose = require('mongoose')

const dataInfoSchema = mongoose.Schema({
  name: String,
  date: String,
  address: String
},{collection:'datalist'})

const dataModel = module.exports = mongoose.model('dataInfo', dataInfoSchema)

