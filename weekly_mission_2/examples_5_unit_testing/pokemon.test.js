import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

test('2) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachussssssss')
    expect(myPokemon.name).toBe('Pikachussssssss'); // Corrige esta prueba
  });
