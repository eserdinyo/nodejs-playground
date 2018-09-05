const expect = require('expect');

const utils = require("./utils");

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    })

    describe('square', () => {
        it('should square a number', () => {
            const res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        })
    })

    describe('async', () => {
        // async test
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        })

        // async test
        it('should async square a number', (done) => {
            utils.asyncSquare(5, res => {
                expect(res).toBe(25).toBeA('number');
                done();
            })
        })
    })
});


it('should set first and last names', () => {
    let user = {
        age: 32,
        location: 'Spain'
    }
    let res = utils.setName(user, "Rafael Nadal");
    // expect(res).toEqual(user);
    expect(res).toInclude({
        firstName: "Rafael",
        lastName: "Nadal"
    }).toBeAn('object');
})


/* it('should expect some values', () => {
    expect(12).toNotBe(12);
    expect({ name: 'Nadal' }).toEqual({ name: 'nadal' });
    expect([2, 3, 4]).toInclude(2);
    expect([1, 2, 3, 4]).toExclude(5);
    expect({
        name: 'Nadal',
        age: 32,
        location: 'Spain'
    }).toInclude({
        age: 32
    })
}); */