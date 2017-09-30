"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require('faker');
exports.tables = [
    { name: 'Setting', attributes: () => Object.assign({}, { title: faker.company.companyName(), description: faker.lorem.paragraph() }) }
];
class NumberGenerator {
    constructor() { this.startNum = 0; }
    increment() { this.startNum++; }
    get nextNumber() { this.increment(); return this.startNum; }
}
exports.NumberGenerator = NumberGenerator;
//# sourceMappingURL=utils.js.map