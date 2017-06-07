var expect = require('chai').expect;
var gatherNamesOf = require('../utilities.js');

describe('gatherNamesOf', () => {
    var people, names;

    beforeEach(function () {
        people =[{name:"Andy"},{name:"Bill"},{name:"Cin"}];
        names = gatherNamesOf(people);
    });

    it('should return a array', () => {
        expect(names).to.be.an('array');
    });
    
    it('should give output the same length as the input', () => {
        expect(names.length).to.equal(people.length);
    });

    it('should give the name of the object passed in', () => {
        expect(names[0]).to.equal(people[0].name);
    });
});