"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
const mongoose = require("mongoose");
const connectMongo = require("connect-mongo");
const db_1 = require("./helpers/db");
exports.configure = (app) => {
    const MongoStore = connectMongo(session);
    new db_1.DB().connect();
    app.use(session({
        secret: 'foo',
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 60
        })
    }));
    app.get('/', (request, response) => {
        response.json({ title: 'Express Server Home Page ...', session: request.session });
        console.log(request.session);
    });
    app.get('/error', (request, response) => {
        response.json({ title: 'Express Server UnAuthorized ...', session: request.session });
        console.log(request.session);
    });
    app.get('/auth', (request, response) => {
        response.json({ title: 'Express Server Administrator ...', session: request.session });
        console.log(request.session);
    });
};
//# sourceMappingURL=configure.js.map