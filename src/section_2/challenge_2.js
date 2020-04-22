/*
    John´s team scored 89, 120, 103
    Mike´s team scored 116, 94, 123
*/

// 1. Average score for team
let scoredTeamJohn = [89, 120, 103];
let scoredTeamMike = [116, 94, 123];

let avgScoredTeamJohn = scoredTeamJohn.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})/scoredTeamJohn.length;

let avgScoredTeamMike = scoredTeamMike.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})/scoredTeamMike.length;

console.log(`John´s team scored average: ${avgScoredTeamJohn}`);
console.log(`Mike´s team scored average: ${avgScoredTeamMike}`);

// 2 and 3. Team winner
avgScoredTeamJohn = 115;
if (avgScoredTeamJohn > avgScoredTeamMike) {
    console.log(`The John´s team is the winner with ${avgScoredTeamJohn}`);
} else if (avgScoredTeamJohn < avgScoredTeamMike) {
    console.log(`The Mike´s team is the winner with ${avgScoredTeamMike}`);
} else {
    console.log('Both teams are tied');
}

// 4. EXTRA
let scoredTeamMary = [97, 134, 105];
let avgScoredTeamMary = scoredTeamMary.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})/scoredTeamMary.length;
console.log(`Mary´s team scored average: ${avgScoredTeamMary}`);

if ((avgScoredTeamJohn > avgScoredTeamMike) && (avgScoredTeamJohn > avgScoredTeamMary)) {
    console.log(`The John´s team is the winner with ${avgScoredTeamJohn}`);
} else if ((avgScoredTeamMike > avgScoredTeamJohn) && (avgScoredTeamMike > avgScoredTeamMary)) {
    console.log(`The Mike´s team is the winner with ${avgScoredTeamMike}`);
} else if ((avgScoredTeamMary > avgScoredTeamJohn) && (avgScoredTeamMary > avgScoredTeamMike)){
    console.log(`The Mary´s team is the winner with ${avgScoredTeamMary}`);
} else {
    console.log('There is a draw');
}
