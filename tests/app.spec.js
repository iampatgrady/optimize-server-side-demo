const request = require('supertest');
const app = require('../app');

describe('Test /', () => {

  test('It should respond 200 status to GET request for /', async done => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    done();
  });


  test('It should respond 404 status to POST request for / with data', async done => {
    const response = await request(app)
      .post('/')
      .set('origin', 'https://www.adswerve.com')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify([{name: 'testing', value: '12'}]));

    expect(response.statusCode).toBe(404);
    done();
  });


});
