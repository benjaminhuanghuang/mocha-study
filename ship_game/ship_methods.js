function checkForShip(player, coordinate) {
    var ship;
    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        let shipPresent = ship.locations.filter((actualCoordinate) => {
            return (actualCoordinate[0] === coordinate[0] && actualCoordinate[1] === coordinate[1])
        });
       
        if (shipPresent.length > 0) {
            return true;
        }
    }
    return false;
}

module.exports.checkForShip = checkForShip;