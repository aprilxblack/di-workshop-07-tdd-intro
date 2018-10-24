class Coolculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b){
    return a * b;
  }

  subtract(a, b){
    return a - b;
  }

  divide(a, b){
    if (b == 0){
      return 'You cannot divide by zero';
    }
    else {
      return a / b;
    }
    
  }

  highest(a, b){
    if (a > b){
      return a;
    }
    else if (b > a){
      return b;
    }
    else {
      return 'The numbers are equal';
    }
  }

  double(a){
    return a * 2;
  }

  square(a){
    return a * a;
  }

  isNegative(a){
    if(a < 0){
      return true;
    }
    else{
      return false;
    }
  }

  isCool(a){
    var number = a.toString();
    if (number[0] == number[number.length - 1]){
      return true;
    }
    else{
      return false;
    }
  }

  sum(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }

  multiplyArray(array){
    var result = 1;
    for (var i = 0; i < array.length; i++){
      result *= array[i];
    }
    return result;
  }

  mean(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum / array.length;
  }

  factorial(a){
    var factorial = 1;

    for(var i = a; i > 1; i--){
      factorial *= i;
    }

    return factorial;
  }

  random(a){
    return Math.round(Math.random() * a);
  }
}

module.exports = Coolculator
