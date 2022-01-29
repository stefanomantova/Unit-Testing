const  sum = require('./practice.js');
const reversion = require('./practice.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


/*test('testWord turns into TestWord', () => {
  let word = 'testWord';
  expect(capitalize(word)).toBe('TestWord')
  
});*/

test('reversed turns into desrever', () => {
  expect(reversion('reverse')).toEqual('desrever');
});