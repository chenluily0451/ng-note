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

router.put("/datalist/:id",(req, res)=>{
  dataModel.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set:{
        name: req.body.name,
        date: req.body.date,
        address: req.body.address
      }
    },function (err,data) {
      if(err){
        res.send(err)
      }else{
        res.json(data)
        console.log(data + 'has been updated')
      }
    }
  )
})

router.get("/datalist/:id",(req, res) =>{
  dataModel.findById(req.params.id)
    .then(data =>{
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router
