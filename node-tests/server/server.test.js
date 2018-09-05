const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect(res => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        })
    })

    describe('GET /players', () => {
        it('should return tennis players', (done) => {
            request(app)
                .get('/players')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: "Nadal",
                        age: 32
                    })
                })
                .end(done)
        })
    })
})