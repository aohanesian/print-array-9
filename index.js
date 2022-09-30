const sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

let winter_sports = sports.slice(0,5)
let summer_sports = sports.slice(5,11);
let fruits = [];
fruits = fruits.concat(winter_sports.splice(2,1),summer_sports.splice(2,2));

console.log(`*** Winter Sports ***`)
for (let i = 0; i < winter_sports.length; i++) {
    let currentArray = winter_sports[i];
    console.log(currentArray.join(`: `))
}
console.log(``)
console.log(`*** Summer Sports ***`)
for (let i = 0; i < summer_sports.length; i++) {
    let currentArray = summer_sports[i];
    console.log(currentArray.join(`: `))
}
console.log(``)
console.log(`*** fruits ***`)
for (let i = 0; i < fruits.length; i++) {
    let currentArray = fruits[i];
    console.log(currentArray.join(`: `))
}
