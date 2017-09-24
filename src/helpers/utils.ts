const faker = require('faker');

export class Utils {
    constructor() { }
}

export class NumberGenerator {
    startNum: number;
    constructor() { this.startNum = 0; }
    increment() { this.startNum++; }
    get nextNumber() { this.increment(); return this.startNum; }
}