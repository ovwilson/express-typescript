"use strict";
exports.__esModule = true;
var chai = require("chai");
var server = require("./../src/server");
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);
describe('GET /', function () {
    it('should return 200 OK', function () {
        chai.request(server).get('/').end(function (err, response) {
            expect(response).to.have.status(200);
        });
    });
});
//# sourceMappingURL=index.test.js.map