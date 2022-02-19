/* eslint-disable no-console */
import Bowman from './modules/bowman';
import Swordsman from './modules/swordsman';
import Magician from './modules/magician';
import Daemon from './modules/daemon';
import Undead from './modules/undead';
import Zombie from './modules/zombie';

/* для проверки задачи создаём объекты */
const bowman = new Bowman('Dmitry');
const swordsman = new Swordsman('Viktor');
const magician = new Magician('Boris');
const daemon = new Daemon('Yelena');
const undead = new Undead('Pavel');
const zombie = new Zombie('Olga');

/* для проверки задачи выводим в консоль */
console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);

/* для проверки задачи вызываем метод levelUp и сам объект после */
zombie.levelUp();
console.log('zombie levelUp');
console.log(zombie);

/* для проверки задачи вызываем метод damage и сам объект после */
zombie.damage(50);
console.log('zombie damage 50');
console.log(zombie);
