const mongoose = require('mongoose')
// const express = require('express')

//connection to mongoDB database
mongoose.connect('mongodb://localhost:27017/mark')
.then(()=>console.log('connection successful'))
.catch(err => console.log(err));


//Define a shema for the database
const playlistSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
});


//Create Collection
const Playlist = mongoose.model("Playlist", playlistSchema);


const createDocument = async()=>{
    try{
        const reactPlaylist = new Playlist({
            name : "Omkar",
            ctype: "Backend",
            videos: 80,
            author: "Omkar",
            active: true,
        });

        const javascripttPlaylist = new Playlist({
            name : "Omkar",
            ctype: "Backend",
            videos: 150,
            author: "Omkar",
            active: true,
        });

        const express = new Playlist({
            name : "Omkar",
            ctype: "API",
            videos: 20,
            author: "Omkar",
            active: true,
        });
        
        const result = await Playlist.insertMany([
            reactPlaylist, javascripttPlaylist, express
        ]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

//createDocument();


//Read Document

const getDocument = async ()=>{
    try{
        const result = await Playlist.find({ctype: "API"}, {name:1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

getDocument();