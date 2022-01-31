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

test ('analyzing array[1,2,3], average should be 2',() =>{
  expect(practice.analyzeArray([1,2,3])).toMatchObject({average:2});
});

test ('analyzing array[1,2,3,4,7,1,8,6], average should be 4',() =>{
  expect(practice.analyzeArray([1,2,3,4,7,1,8,6])).toMatchObject({average:4});
});

test ('analyzing array[23,2,3,4,7,1,8,6], minimum should be 1',() =>{
  expect(practice.analyzeArray([23,2,3,4,7,1,8,6])).toMatchObject({min:1});
});

test ('analyzing array[23,2,3,4,7,1,8,6], maximum should be 23',() =>{
  expect(practice.analyzeArray([23,2,3,4,7,1,8,6])).toMatchObject({max:23});
});

test ('analyzing array[23,2,3,4,7,1,8,6], length is 8',() =>{
  expect(practice.analyzeArray([23,2,3,4,7,1,8,6])).toMatchObject({length:8});
});

test ('analyzing array[2,9,12,0,45,1,1], average is 10, min is 0, max is 45, length is 7',() =>{
  expect(practice.analyzeArray([2,9,12,0,45,1,1])).toMatchObject({average:10,min:0,max:45,length:7});
});

test ('analyzing array[2,9,12,0,45,1,0,0,1,0], average is 7, min is 0, max is 45, length is 7',() =>{
  expect(practice.analyzeArray([2,9,12,0,45,1,0,0,1,0])).toMatchObject({average:7,min:0,max:45,length:10});
});