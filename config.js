const spawns = {
    main: Game.spawns.MainSpawn
}

const limits = {
    harvesters: 1
}

const roles = {
    HARVESTER: 'harvester'
}

const creeps = {
    HARVESTER: [CARRY, WORK, MOVE, MOVE]
}

module.exports = {
    spawns: spawns,
    limits: limits,
    roles: roles,
    creeps: creeps
}