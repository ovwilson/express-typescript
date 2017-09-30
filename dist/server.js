"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const Index_1 = require("./routes/Index");
const Settings_1 = require("./routes/Settings");
const Counter_1 = require("./routes/Counter");
const db_1 = require("./helpers/db");
class Server {
    constructor() {
        this.PORT = process.env.PORT;
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        new db_1.DB().connect();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.listen(this.PORT, () => console.log(`Express Server Running on port ${this.PORT}`));
    }
    routes() {
        this.app.route('/').get(Index_1.indexRouter);
        this.app.route('/settings')
            .get(Settings_1.settingsRouter.get)
            .post(Settings_1.settingsRouter.create)
            .delete(Settings_1.settingsRouter.deleteAll);
        this.app.route('/settings/:id')
            .get(Settings_1.settingsRouter.getById)
            .patch(Settings_1.settingsRouter.updateById)
            .delete(Settings_1.settingsRouter.deleteById);
        this.app.route('/settings-create/:quantity')
            .post(Settings_1.settingsRouter.createSeed);
        this.app.route('/counters')
            .get(Counter_1.counterRouter.getCounters);
        this.app.route('/counter-create/:name')
            .post(Counter_1.counterRouter.createCounter);
        this.app.route('/counter/:name')
            .post(Counter_1.counterRouter.updateCounter);
    }
}
exports.default = new Server().app;
//# sourceMappingURL=server.js.map