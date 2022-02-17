/* eslint-disable no-console */
import Bowman from './modules/bowman';
import Swordsman from './modules/swordsman';
import Magician from './modules/magician';
import Daemon from './modules/daemon';
import Undead from './modules/undead';
import Zombie from './modules/zombie';

const bowman = new Bowman('Dmitry');
const swordsman = new Swordsman('Viktor');
const magician = new Magician('Boris');
const daemon = new Daemon('Yelena');
const undead = new Undead('Pavel');
const zombie = new Zombie('Olga');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
