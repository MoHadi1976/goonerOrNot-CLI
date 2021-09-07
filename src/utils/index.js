// const goodOrBad = (likeVar, movie) => {

//     if (likeVar==="good"){
//         console.log(`I think ${movie} is good`)
//     } else if (likeVar==="bad"){
//         console.log(`I think ${movie} is bad`)
//     } else {
//         console.log("Incorrect input")
//     }

// };

// module.exports = goodOrBad 
// Or without const and export.function and need to wrap the import in {}  



exports.goonerOrNot = (teamVar, player, year) => {
if (year==="2002"){
    if (teamVar==="arsenal"){
        console.log(`${player} is a Gooner and played in ${year}, so he is an invincible!!!!`)
    }else if(teamVar==="not arsenal") {
        console.log(`${player} is not a Gooner and therefore can not be an invincible`)
    }else{
        console.log("incorrect input")
    }
}else{
    if (teamVar==="arsenal"){
        console.log(`${player} is a Gooner but did not play in ${year}, so he is not an invincible.`)
    }else if(teamVar==="not arsenal") {
        console.log(`${player} is not a Gooner`)
    }else{
        console.log("incorrect input")
    }
}
}