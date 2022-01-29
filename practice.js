function sum(a, b) {
    return a + b;
  }

 /* function capitalize(inputWord){
    let test = 'Word';
    return test.valueOf;
     //return (inputWord.charAt(0));
  }*/

function reversion(toReverseWord){
  let reversed = "";
  for(let i = (toReverseWord.length)-1 ; i >= 0; i--){
     reversed += toReverseWord.charAt(i);
  }
  return reversed;
}

  module.exports = sum,  reversion;