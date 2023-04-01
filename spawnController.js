const Config = require('config')

function spawnController() {
    var harvestersCount = 0
    for (creepId in Game.creeps) {
        const creep = Game.creeps[creepId]
        creep.memory.role === Config.roles.HARVESTER && harvestersCount++
    }

    if (harvestersCount < Config.limits.harvesters) {
        Config.spawns.main.spawnCreep(Config.creeps.HARVESTER, `Harvester#${harvestersCount}`, {
            role: Config.roles.HARVESTER
        })
    }
}

module.exports = {
    invoke: spawnController
}