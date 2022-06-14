const express = require('express');
const mongoose = require('mongoose');
const mensRankings =  require('../models/mens');

const app = express();

const router = new express.Router();



router.post("/mens", async (req, res) => {
    try{
        const mens = new mensRankings(req.body);
        await mens.save();
        res.send(mens);
    }catch(e){
        res.status(400).send(e);
    }
});


//get data
router.get("/mens", async(req, res) => {
    try{
        const mens = await mensRankings.find({}).sort({ranking: 1});
        res.send(mens);
    }catch(e){
        res.status(400).send(e);
    }
});

//Update data
router.patch("/mens/:id", async(req, res) => {
    try{
        const mens = await mensRankings.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(mens);
    }catch(e){
        res.status(400).send(e);
    }
});

//Update data
router.delete("/mens/:id", async(req, res) => {
    try{
        const mens = await mensRankings.findByIdAndDelete({_id: req.params.id});
        res.send(mens);
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;