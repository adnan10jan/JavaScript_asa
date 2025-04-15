const  marvel_hero = ["ironman", "thor", "captain"]
const dc_hero = ["suoerman", "batman", "flash"]

console.log(marvel_hero);
console.log(dc_hero);

//marvel_hero.push(dc_hero)
//console.log(marvel_hero);

//console.log(marvel_hero[3][2]);

const all_hero = marvel_hero.concat(dc_hero)
//console.log(all_hero);

const new_heroes = [...marvel_hero, ...dc_hero]
//console.log(new_heroes);


const another_array = [1,2,3, [3,4,5], 5,8, [0,4,[7,8]]]
console.log(another_array);

const real_another_array = another_array.flat(Infinity)    
console.log(real_another_array);
