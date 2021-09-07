// const input = process.argv[2];
// console.log(input);


// const input = process.argv[2];
// console.log(`My favourite movie is ${input}`);

// const goodOrBad = require("./utils");

// const likeVar = process.argv[2];
// const movie = process.argv[3];

// goodOrBad(likeVar, movie)


const {goonerOrNot} = require("./utils")

const teamVar = process.argv[2]
const player = process.argv[3]
const year = process.argv[4]

goonerOrNot(teamVar, player, year)