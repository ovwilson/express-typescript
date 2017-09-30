"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_1 = require("./../helpers/utils");
const Counter_1 = require("./Counter");
const schemaName = 'Setting';
const schema = new mongoose_1.Schema({
    id: Number,
    title: String,
    description: String,
    createdAt: { type: Date, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() }
});
schema.pre('save', function (next) {
    const doc = this;
    Counter_1.default.getNextSequence('Setting', (err, data) => {
        doc.id = data.seq;
        next();
    });
});
schema.statics.seed = function (quantity, cb) {
    const attributes = utils_1.tables.filter(table => table.name === schemaName)[0].attributes;
    const settings = [];
    for (let i = 0; i < quantity; i++) {
        const setting = Object.assign({}, attributes());
        settings.push(setting);
    }
    return this.collection.insert(settings, cb);
};
exports.default = mongoose_1.model(schemaName, schema);
//# sourceMappingURL=Setting.js.map