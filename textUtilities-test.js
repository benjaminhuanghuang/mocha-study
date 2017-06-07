/*
    Usage:  node textUtilities
 */
// var chai = require('chai');
// var expect = chai.expect;

var expect = require('chai').expect;

// titleCase() should return a string
expect(titleCase('the great mouse detective')).to.be.a('string');


expect(titleCase('a')).to.equal('A');

expect(titleCase('the')).to.equal('The');

// titleCase() should return a different string
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');


function titleCase(title)
{
    var words = title.split(' ');

    var titleCasedWords = words.map((w)=>{
        return w[0].toUpperCase() + w.substring(1); 
    });
    return titleCasedWords.join(' ');
}