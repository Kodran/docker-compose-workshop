'use strict'

const consumer = require("./consumer/consumer.service");

const router = (app) => {
    
    app.get('/consumer', async (req, res) => {    
        let response = await consumer.getConsumer();
        res.send(response);
    });

    app.post('/consumer', async (req, res) => {  
        let response = await consumer.createConsumer();          
        res.send(response);
    });

}

module.exports = {router};