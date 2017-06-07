function gatherNameOf(arrayOfPeople) {
    return arrayOfPeople.map((person) => {
        return person.name;
    });
}

module.exports = gatherNameOf;