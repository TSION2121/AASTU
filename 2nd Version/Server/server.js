
const PORT = 1122
// const axios = require('axios').default
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const NewsModel = require('./model/News');
// require('dotenv').config()
const cors = require('cors');
//for creating a new News
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://mongo:mongo-tsion-password-my-app@app-zone.gtjlq.mongodb.net/aastuwebsite?retryWrites=true&w=majority");

app.get("/getNews", (req,res) => {
    
NewsModel.find({},(err,result)=>{
    if(err){
        res.json(err);
    }else{
        res.json(result)                               
    }
});
});

app.post("/createNews", async (req,res) => {
    const news =req.body;
    const newNews = new NewsModel(news);
    await newNews.save();
                                      
    res.json(news);
});
app.listen(PORT, () => {
    console.log("Server run successfully");
})