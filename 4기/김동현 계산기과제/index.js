function calculate() {
  var input = document.getElementById('calculator').value;
  var symbol;
  var num1, num2;
  var result;
  if(input.indexOf('+') !== -1) {
    symbol = input.indexOf('+');
    num1 = parseInt(input.slice(0,symbol));
    num2 = parseInt(input.slice(symbol+1,input.length));
    result = num1 + num2;
  }
  else {
    symbol = input.indexOf('-');
    num1 = parseInt(input.slice(0,symbol));
    num2 = parseInt(input.slice(symbol+1,input.length));
    result = num1 - num2;
  }

  document.getElementById('process').innerText = input;
  document.getElementById('result').innerText = result;
}