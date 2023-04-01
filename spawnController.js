// Spawns
let mainSpawn = Game.spawns.MainSpawn

// Limits
let harvestersLimit = 1

// Roles
let HARVESTER = 'harvester'

export function spawnController() {
    var harvestersCount = 0
    for (var creepId in Game.creeps) {
        let creep = Game.creeps[creepId]
        creep.memory.role === HARVESTER && harvestersCount++
    }

    if (harvestersCount < harvestersLimit) {
        mainSpawn.spawnCreep([CARRY, WORK, MOVE, MOVE], `Harveseter#${harvestersCount}`, {
            role: HARVESTER
        })
    }
}