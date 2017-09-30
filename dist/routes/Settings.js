"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Setting_1 = require("./../models/Setting");
class SettingsRouter {
    constructor() { }
    get(request, response, next) {
        Setting_1.default.find((err, data) => err ? response.send(err) : response.json(data));
    }
    getById(request, response, next) {
        Setting_1.default.find({ id: request.params.id }, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    create(request, response) {
        Setting_1.default.create(request.body, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    createSeed(request, response) {
        Setting_1.default.seed(request.params.quantity, (err, data) => err ? response.status(500).send(err) : response.send(`<pre>${JSON.stringify(data, undefined, 2)}</pre>`));
    }
    updateById(request, response) {
        const query = { id: request.params.id }, update = { title: request.body.title, description: request.body.description };
        Setting_1.default.findOneAndUpdate(query, update, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    deleteById(request, response) {
        Setting_1.default.findOneAndRemove({ id: request.params.id }, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    deleteAll(request, response) {
        Setting_1.default.remove({}, (err) => err ? response.status(500).send(err) : response.json({ status: 'All Records Removed.' }));
    }
}
exports.settingsRouter = new SettingsRouter();
//# sourceMappingURL=Settings.js.map