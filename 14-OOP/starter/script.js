'use strict';

// Constructor function
// should start with capital letter
// function declartion and expresion only
// no arrow function bc this keyword
// produce a object

// function expresion
const Person = function(firstName , birthYear){
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function(){
    //     console.log(2022 - this.birthYear);
    // }
}
// we call constructor function ike this
const emad = new Person("Emad",1998)
console.log(emad);

// behined 
// 1. New {} is created
// 2. function is called , this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person ("Matilda" , 2017)
const jack = new Person ("Jack" , 1975)
console.log(matilda , jack);

/*
Person {firstName: 'Emad', birthYear: 1998}
script.js:26 Person {firstName: 'Matilda', birthYear: 2017}birthYear: 2017firstName: "Matilda"[[Prototype]]: Object Person {firstName: 'Jack', birthYear: 1975}
*/

// object created from a class is called instance
// object created from a class is called instance
console.log(jack instanceof Person); // true
const jay = "jay"
console.log(jay instanceof Person); // false

// -------------------------------------------------
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function()
{
    console.log(2022 - this.birthYear);
}
emad.calcAge();
jack.calcAge()
matilda.calcAge()

console.log(emad.__proto__ === Person.prototype); // true

// set a properties to prototype
Person.prototype.species = "Homo Sapiens";
console.log(emad.species , matilda);

console.log(emad.hasOwnProperty('firstName'));

console.log(emad.__proto__.__proto__);

const arr = [3,6,4,5,6,9,3]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);



Array.prototype.unique = function (){
    new Set(this)
}