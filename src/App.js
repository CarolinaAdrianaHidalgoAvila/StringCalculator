function StringCalculator(numberString) {
  if (numberString === ""){
    return 0
  }else if(numberString.length === 1) { 
    return (parseInt(numberString));
  }else {
    var res = numberString.split(',');
    var total = 0;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;   
  }
}

export default StringCalculator;
