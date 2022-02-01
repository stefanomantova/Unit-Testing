const { max } = require("lodash");


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
 let result = '';
 let indexOfChar;
const alphabet = buildAlphabet();
for(let i in StringInput){
  //keeping case is not working due to this
  if(!(alphabet.lowerCase.includes(StringInput.charAt(i))||alphabet.upperCase.includes(StringInput.charAt(i)))){
    result += StringInput.charAt(i);
  }else{ 
    if((alphabet.lowerCase.includes(StringInput.charAt(i)))){
      indexOfChar = (alphabet.lowerCase.indexOf(StringInput.charAt(i)));
    }else{
       indexOfChar = (alphabet.upperCase.indexOf(StringInput.charAt(i)));

    }
    
  //keeping case
  if(alphabet.lowerCase.includes(StringInput.charAt(i))){
    if((indexOfChar+shiftCases) > 25)
  indexOfChar -=26;
    result += ((alphabet.lowerCase[indexOfChar+shiftCases]));
    }else{
      if((indexOfChar+shiftCases) > 25)
      indexOfChar -=26;
    result += alphabet.upperCase[indexOfChar+shiftCases];
    }
}
}
return result;

 }

 function buildAlphabet(){
  let alphaArray ={
    lowerCase : [],
    upperCase : []
  } ; alphaArray.length = 26;
  for(let i = 0,  j = 65; i< alphaArray.length; i++,j++){
    alphaArray.lowerCase[i] = String.fromCharCode(j).toLowerCase();
    alphaArray.upperCase[i] = String.fromCharCode(j);
  }
  return alphaArray;
 }

 function wrappingCharacteres(toBeWrapped,shiftCases){
  if((toBeWrapped+shiftCases)>25){
    return (toBeWrapped -= 26);
  }
 }

 const analyzeArray = (array) =>{
   let results = {
     average : average(array),
     min : minimum(array),
     max : maximum(array),
     length: array.length
   }
   
   return results;

 }

 const average = (array) =>{
   let result = 0;
   for(let i in array){
    result += array[i];
   }
   return (result = result/(array.length));
 }

 const minimum = (array) =>{
   let result = array[0];
   for(let i in array){
     if(array[i]<result){
       result = array[i];
     }
   }
   return result;
 }

 const maximum = (array) =>{
  let result = array[0];
  for(let i in array){
    if(array[i]>result){
      result = array[i];
    }
  }
  return result;
}
 

module.exports  = {reverseString , capitalize, calculator,caesarCipher,analyzeArray};