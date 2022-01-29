let  practice = require('./practice.js');

test('Testing capitalize: testWord turns into TestWord', () => {
  expect(practice.capitalize('testWord')).toBe('TestWord')
  
});

test('Testing reverseString: reversed turns into desrever', () => {
  expect(practice.reverseString('reversed')).toEqual('desrever');
});

test('adding 1 and 2 = 3', () =>{
  expect(practice.calculator.add(1,2)).toBe(3);
});

test('subtracting 1 and 2 = -1', () =>{
  expect(practice.calculator.subtract(1,2)).toBe(-1);
});

test('multiply 1 and 2 = 2', () =>{
  expect(practice.calculator.multiply(1,2)).toBe(2);
});


test('caesarCipher: "placeholder" has been shifted to "qmbdfipmefs" by 1',() =>{
  expect(practice.caesarCipher("placeholder")).toBe("qmbdfipmefs");
});

test('caesarCipher: "renner" has been shifted to "tgppgt" by 2',() =>{
  expect(practice.caesarCipher("renner",2)).toBe("tgppgt");
});

test('caesarCipher: wrapping "zebra" has been shifted to "afcsb" by 1',() =>{
  expect(practice.caesarCipher("zebra",1)).toBe("afcsb");
});
test('caesarCipher: wrapping "zebra" has been shifted to "bgdtc" by 2',() =>{
  expect(practice.caesarCipher("zebra",2)).toBe("bgdtc");
});

test('caesarCipher: puntuaction! wrapping "zebra..." has been shifted to "bgdtc..." by 2',() =>{
  expect(practice.caesarCipher("zebra...",2)).toBe("bgdtc...");
});

test('caesarCipher: spaces! wrapping "zebra " has been shifted to "bgdtc " by 2',() =>{
  expect(practice.caesarCipher("zebra ",2)).toBe("bgdtc ");
});

test('caesarCipher: Cases! wrapping "zEbRA... " has been shifted to "bGdTC... " by 2',() =>{
  expect(practice.caesarCipher("zEbRA... ",2)).toBe("bGdTC... ");
});

