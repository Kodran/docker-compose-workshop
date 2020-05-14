'use strict'

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

let mongodb = require("./db/mongo");
let {router} = require('./service/api.router');
let app = require('express')();

const init = () => {
    
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    router(app);
    dbConnection();
    
    app.listen(port, ()=>{
        console.log(`app running on port: http://localhost:${port}`);
    });
}

const dbConnection = () =>{
    
    mongodb()
    .then(() => {
        console.log("MongoDb connected");
    })
    .catch((err) =>{
        console.log(err)
    })
}

init();



