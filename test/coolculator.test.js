var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
     result = mm.multiply(2, 3)
     expect(result).to.equal(6)
   })

  // Uncomment this 👇
  it('should subtract', function() {
     result = mm.subtract(3, 2)
     expect(result).to.equal(1)
   })

   it('should divide', function(){
     result = mm.divide(10, 2)
     expect(result).to.equal(5)
   })

   it('should return the highest number', function(){
     result = mm.highest(5, 8);
     expect(result).to.equal(8);
   })

   it('should say that the numbers are equal', function(){
    result = mm.highest(5, 5);
    expect(result).to.equal('The numbers are equal');
  })

  it('should double the number', function(){
    result = mm.double(4);
    expect(result).to.equal(8);
  })

  it('should square the number', function(){
    result = mm.square(4);
    expect(result).to.equal(16);
  })

  it('should say true', function(){
    result = mm.isNegative(-18);
    expect(result).to.equal(true);
  })

  it('should return true', function(){
    result = mm.isCool(40743974238944);
    expect(result).to.equal(true);
  })

  it('should sum all of the numbers in array', function(){
    var array = [1, 2, 3, 4];
    result = mm.sum(array);
    expect(result).to.equal(10);
  })

  it('should multiply all numbers in array', function(){
    var array = [1, 2, 3, 4];
    result = mm.multiplyArray(array);
    expect(result).to.equal(24);
  })

  it('should return the average of the array', function(){
    var array = [2, 4, 6, 8];
    result = mm.mean(array);
    expect(result).to.equal(5);
  })

  it('should calculate factorial', function(){
    result = mm.factorial(7);
    expect(result).to.equal(5040);
  })

  it('should return a random integer between 0 and 7', function(){
    var a = mm.random(7);
    
    result = a >=0 && a <=7 && Number.isInteger(a); 
    expect(result).to.equal(true);
  })

})
