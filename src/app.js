const { goonerOrNot } = require ("./utils")

const teamVar = process.argv[2]
const player = process.argv[3]
const year = process.argv[4]

goonerOrNot(teamVar, player, year)