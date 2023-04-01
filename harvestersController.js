const Config = require('config')

function harvestersController() {
    for (creepId in Game.creeps) {
        const creep = Game.creeps[creepId]
        if (creep.memory.role === Config.roles.HARVESTER) {
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) !== 0) {
                const source = creep.room.find(FIND_SOURCES_ACTIVE)
                const result = creep.harvest(source)
                if (result === ERR_NOT_IN_RANGE) {
                    creep.moveTo(source)
                } else {
                    creep.say(result)
                }
            } else {
                const result = creep.transfer(Config.spawns.main, RESOURCE_ENERGY)
                if (result === ERR_NOT_IN_RANGE) {
                    creep.moveTo(Config.spawns.main)
                } else if (result === ERR_FULL) {
                    creep.drop(RESOURCE_ENERGY)
                } else {
                    creep.say(result)
                }
            }
        }
    }
}

module.exports = {
    invoke: harvestersController
}