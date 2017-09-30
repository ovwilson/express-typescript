"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DB {
    constructor() { mongoose.Promise = global.Promise; }
    connect() {
        mongoose.connect(process.env.LOCAL_DB, { useMongoClient: true });
        mongoose.connection.on('open', () => console.log(`MongoDb connection made to ${process.env.LOCAL_DB}`));
        mongoose.connection.on('error', () => console.error(`MongoDb connection error for ${process.env.LOCAL_DB}`));
    }
    createConnection() { return mongoose.createConnection(process.env.LOCAL_DB, { useMongoClient: true }); }
}
exports.DB = DB;
//# sourceMappingURL=db.js.map