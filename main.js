const SpawnController = require('spawnController')
const CreepsController = require('creepsController')

module.exports.loop = function () {
    SpawnController.invoke()
    CreepsController.invoke()
}