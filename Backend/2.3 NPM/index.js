import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';
import {randomSuperbWord} from 'superb';
var superb = randomSuperbWord();
var superhero = randomSuperhero();
var sillyName = generateName();
console.log(`My name is: ${sillyName} and i am ${superhero}'s ${superb} nemesis`);
