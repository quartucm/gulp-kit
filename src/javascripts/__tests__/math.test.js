import Calculator from '../modules/math'

describe('math.js', () => {
  it('should add the numbers', () => {
    Calculator.add(10,20).should.equal(30)
  })
  it('should subtract the numbers', () => {
    Calculator.subtract(20,10).should.equal(10)
  })  
  it('should multiply the numbers', () => {
    Calculator.multiply(20,10).should.equal(200)
  })
  it('should divide the numbers', () => {
    Calculator.divide(20,10).should.equal(2)
  })
})