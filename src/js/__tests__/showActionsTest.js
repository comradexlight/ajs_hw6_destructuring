import showActions from '../showActions';

test.each([
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
      },
    ],
  }, [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]],
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        //
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
      },
    ],
  }, [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]],
])('testeing showActions function with %o character and expected actions', (character, expected) => {
  const result = showActions(character);
  expect(result).toEqual(expected);
});
