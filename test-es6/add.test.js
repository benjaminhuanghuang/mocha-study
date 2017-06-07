import add from '../add.js';
import chai from 'chai';

let expect = chai.expect;

describe('Test for add()', function () {
    it('1 + 1 should equals 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
});