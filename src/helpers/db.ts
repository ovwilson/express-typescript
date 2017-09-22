import * as mongoose from 'mongoose';
// mongoose.Promise = global.Promise;

export class DB {
    constructor() { }
    connect() { mongoose.connect(process.env.LOCAL_DB, { useMongoClient: true }); }
    createConnection() { return mongoose.createConnection(process.env.LOCAL_DB, { useMongoClient: true }); }
}