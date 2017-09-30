"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.schemaName = 'User';
const schema = new mongoose_1.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
    createdAt: Date,
    updatedAt: Date
});
exports.default = mongoose_1.model(exports.schemaName, schema);
//# sourceMappingURL=User.js.map