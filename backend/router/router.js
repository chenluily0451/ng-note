/**
 * Created by chenlu on 2018/3/29.
 */
const express = require('express')

const router = express.Router()

const dataModel = require('../models/dataModels')

router.get("/datalist",(req,res)=>{
  dataModel.find({})
    .sort({update_at : -1})
    .then(datas =>{
      res.json(datas)
    })
})

router.post("/datalist",(req, res) =>{
  dataModel.create(req.body, (err, data) => {
    if(err){
      res.json(err)
    }else{
      res.json(data)
    }
    console.log(data + 'has been inserted')
  })
})

router.delete("/datalist/:id",(req, res) => {
  dataModel.findOneAndRemove({
    _id: req.params.id
  },function (err, data) {
    if(err){
      res.send(err);
    }else{
      res.json(data)
    }
  })
})

module.exports = router
