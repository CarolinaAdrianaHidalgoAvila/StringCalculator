/*
function StringCalculator(numberString) {
  var numbers = numberString.replace(/(\r\n|\n|\r|-|;)/gm,",");
  if (numberString === ""){
    return 0
  }else if(numberString.length === 1) { 
    return (parseInt(numberString));
  }else {
    var res = numbers.split(',');
    var total = 0;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;   
  }
}
*/
function StringCalculator(numberString){
  if (numberString === ""){
    return 0
  }else if(numberString.length === 1) { 
    return (parseInt(numberString));
  }else {
  const delimiter = getDelimiter(numberString)
  const formattedInput = formatInput(numberString)
  return calculateSum(getNumbers(formattedInput, delimiter))    
  }
}
function formatInput(input){
  const delimiterRegExp = /^(\/\/.*\n)/
  const matches = delimiterRegExp.exec(input)
  if(matches && matches.length > 0){
    return input.replace(delimiterRegExp,'')
  }
  return input
}

function getDelimiter(input) {
  const delimiters = []
  const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g
  let matches = multipleDelimiterRegexp.exec(input)
  while(matches !== null){
    delimiters.push(matches[1])
    matches = multipleDelimiterRegexp.exec(input)
  }
  if(delimiters.length > 0){
    return new RegExp('['+delimiters.join('')+']')
  }
  matches = /^\/\/(.*)\n/.exec(input)
  return /[\n,]/
  
}

function getNumbers(string, delimiter){
  return string.split(delimiter)
    .filter(n => n !== '')
    .map(n => parseInt(n))
}

function calculateSum(numbers){
  const finalSum = numbers.reduce((sum, n) =>{
    if(n > 1000){
      return 0
    }
    return sum + n
  },0)
  return finalSum
}

export default StringCalculator;
