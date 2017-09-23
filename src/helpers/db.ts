import mongoose = require('mongoose');

export class DB {
    constructor() { mongoose.Promise = global.Promise; }
    connect() { mongoose.connect(process.env.LOCAL_DB, { useMongoClient: true }); }
    createConnection() { return mongoose.createConnection(process.env.LOCAL_DB, { useMongoClient: true }); }
}