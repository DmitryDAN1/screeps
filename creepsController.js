const harvestersController = require('creeps/harvestersController')

function creepsController() {
    harvestersController()
}

module.exports = {
    invoke: creepsController
}