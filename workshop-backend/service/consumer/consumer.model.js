'use strict'

// consumer.model.js
const mongoose = require("mongoose");

const consumerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    credit:{
        type: Number
    }
});

const Consumer = mongoose.model("Consumer", consumerSchema);
module.exports = Consumer;