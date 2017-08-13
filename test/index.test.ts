import * as chai from 'chai';
import * as server from './../src/server';

const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return 200 OK', () => {
    chai.request(server).get('/').end((err, response) => {
      expect(response).to.have.status(200);
    });
  });
});