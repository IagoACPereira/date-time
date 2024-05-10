const dateTime = require("..");

const date = new Date();

test('Testar metodo que retorta data completa', () => {
  const fullDate = date.toISOString().split('T')[0];

  expect(dateTime.fullDate()).toBe(fullDate);
});

test('Testar metodo que retorta hora completa', () => {
  const fullTime = date.toISOString().split('T')[1].split('.')[0];

  expect(dateTime.fullTime()).toBe(fullTime);
});