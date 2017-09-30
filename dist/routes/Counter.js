"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Counter_1 = require("./../models/Counter");
class CounterRouter {
    constructor() { }
    getCounters(request, response) {
        Counter_1.default.find((err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    createCounter(request, response) {
        Counter_1.default.create({ _id: request.params.name, seq: 0 }, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
    updateCounter(request, response) {
        Counter_1.default.getNextSequence(request.params.name, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }
}
exports.counterRouter = new CounterRouter();
//# sourceMappingURL=Counter.js.map