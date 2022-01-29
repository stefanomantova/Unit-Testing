

  function capitalize(inputWord){
    
    return (inputWord.charAt(0).toUpperCase())+inputWord.slice(1);
  }


function reverseString(toReverseWord){
  let reversed = "";
  for(let i = (toReverseWord.length)-1 ; i >= 0; i--){
     reversed += toReverseWord.charAt(i);
  }
  return reversed;
}

const calculator =  {
  add : function (a,b){
  return a + b;
},
subtract : function (a,b){
return a-b;
},
multiply : function(a,b){
return 1*2;
}

}

function caesarCipher(StringInput,shiftCases){
  if (shiftCases == undefined)
  shiftCases = 1;
 let ciphred = '';
const alphabet = buildAlphabet();
for(let i in StringInput){
  if(!(alphabet.includes(StringInput.charAt(i)))){
    ciphred += StringInput.charAt(i);
  }else{ 
     let indexOfChar = (alphabet.indexOf(StringInput.charAt(i)));
    
  if(indexOfChar >= 25)
  indexOfChar -=26;
  if(StringInput.charAt(i) == (StringInput.charAt(i).toUpperCase())){
    ciphred += ((alphabet[indexOfChar+shiftCases]).toUpperCase());
    }else{

ciphred += alphabet[indexOfChar+shiftCases];
    }
}
}
return ciphred;

 }

 function buildAlphabet(){
  let alphaArray = []; alphaArray.length = 26;
  for(let i = 0,  j = 65; i< alphaArray.length; i++,j++){
    alphaArray[i] = String.fromCharCode(j).toLowerCase();
  }
  return alphaArray;
 }

 function wrappingCharacteres(toBeWrapped,shiftCases){
  if((toBeWrapped+shiftCases)>25){
    return (toBeWrapped -= 26);
  }
 }
 

module.exports  = {reverseString , capitalize, calculator,caesarCipher};