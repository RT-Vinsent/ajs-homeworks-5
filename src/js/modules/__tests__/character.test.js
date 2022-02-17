import Character from '../character';

test('Character name number', () => {
  const name = 1000;

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя должно быть строкой');
});

test('Character name 1 letters', () => {
  const name = 'P';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя должно состоять от 2 до 10 символов');
});

test('Character name 11 letters', () => {
  const name = 'Femistokley';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя должно состоять от 2 до 10 символов');
});

test('Character name 11 letters', () => {
  const values = {
    name: 'ALex',
    health: 100,
    level: 1,
  };

  const result = new Character('ALex');

  expect(result).toEqual(values);
});
