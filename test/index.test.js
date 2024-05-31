const dateTime = require("..");

test('Testar metodo que retorta data completa', () => {
  expect(dateTime.fullDate()).toBe(new Date().toLocaleDateString());
});

test('Testar metodo que retorta hora completa', () => {
  expect(dateTime.fullTime()).toBe(new Date().toLocaleTimeString());
});