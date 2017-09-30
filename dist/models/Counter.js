"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaName = 'Counter';
const schema = new mongoose_1.Schema({
    _id: String,
    seq: { type: Number, default: 0 }
});
schema.statics.getNextSequence = function (name, cb) {
    const conditions = { _id: name }, update = { $inc: { seq: 1 } }, options = { new: true };
    return this.findOneAndUpdate(conditions, update, options, cb);
};
exports.default = mongoose_1.model(schemaName, schema);
//# sourceMappingURL=Counter.js.map