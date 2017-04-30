import './modules'
//import our jQuery Clone from jquery module
import jQueryClone from './modules/jquery'
//Import ALL math problems here
import * as Calculator from './modules/math'

//1. Add Class without using jQuery
const div = document.getElementById('addClassDiv');
const showItem = new jQueryClone(div);
showItem.addClass('show');

//2. jQuery Each Function
const myArray = new jQueryClone([1,2,3,4,5,6]);
//Change this to alert for fun.
myArray.each(function( i, l ){
  console.log( "Index #" + i + ": " + l );
});

//3. jQuery Set an Attribute
const myAttr = new jQueryClone(document.getElementById('addAnAttr'));
myAttr.attr('id', 'justAdded');


//MATH Problem, Importing all Math functions as Calculator parent above. Check the tests in javascripts/__tests__
console.log(Calculator.add(10,20));
console.log(Calculator.subtract(20, 10));
console.log(Calculator.multiply(10,20));
console.log(Calculator.divide(10,20));