'use strict'

const mongoose = require("mongoose");
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort =  process.env.DB_PORT || 27017;

const connection = {
    host: `mongodb://${dbHost}:${dbPort}'`,    
    user: 'root',
    pass: 'P@ssword11',
    dbName: 'consumer',
}

const mongodb = () => {
    return mongoose.connect(connection.host, {
        useNewUrlParser: true,        
        user: connection.user,
        pass: connection.pass,
        dbName: connection.dbName,
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms        
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    }); 
};

module.exports = mongodb;