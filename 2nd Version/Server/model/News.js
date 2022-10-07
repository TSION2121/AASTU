const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    _id:{

    type: Object,
    required: true,
},
title:{

    type: String,
    required: true,
},
date:{

    type: String,
    required: true,
},
content:{

    type: String,
    required: true,
},


});

const NewsModel = mongoose.model("news", NewsSchema);
module.exports = NewsModel;