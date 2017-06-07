var expect = require('chai').expect;

// Test suite
describe('checkForShip', () => {
    var checkForShip = require('../ship_game/ship_methods').checkForShip;
    beforeEach(() => {

    });

    // Test spec 
    it('should correctly report no ship at a given players coordinate', () => {
        let player ={
            ships:[
                {
                    locations:[[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship located at a given coordinate', () => {
        let player ={
            ships:[
                {
                    locations:[[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [0, 0])).to.be.true;
    });

    it('should handle ships located at more than one coordinate', () => {
        let player ={
            ships:[
                {
                    locations:[[0,0], [0,1]]
                }
            ]
        }
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle multiple ships', () => {
        let player ={
            ships:[
                {
                    locations:[[0,0], [0,1]]
                },
                {
                    locations:[[1,0], [1,1]]
                }
            ]
        }
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;

        expect(checkForShip(player, [9, 9])).to.be.false;
    });
})