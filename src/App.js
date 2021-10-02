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

export default StringCalculator;
