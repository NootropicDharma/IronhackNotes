
//        DAY 1   basico = variables

//let nombre, edad;

//nombre = 1

//edad = 3 

//console.log(nombre,edad)

//const a = 1 , b = 2 , c = 3 //this is a way to declare const as well as let 

//let is a variable, const is a constant 

/*
a = "1"

a = a + 1

a = a + 1

a = a + 1

a = a + 1

a = a + 1 
*/

//above i need to find out why , when you add a number to a string it turns it into a string

//create const variables always first 

//integers are whole numbers 1 , 2 , 3 , 4 
//floating-point numbers    decimals 

//NaN not a number is a typeof number 

// expression , operacion entre dos tipos de datos que resulta en un resultado del mismo tipo 

// console.log(2 ** 5 );  2 * 2 * 2 * 2 * 2 => 32  

// modulo gives us the reminder operator 

// number++ solo para suber de 1 en 1 
// number--   o  para bajar de 1 en 1 
// number += 1, 2, 3, 4, etc  this will allow us to go up at with bigger numbers instead of just 1 
// number -= 1, 2, 3, 4, etc   same but reverse 

//const a = " Teacher \"Joss\" "  // escapar pon palitos tirados antes de las comillas 
//                    ^     ^

// you can put a function inside this ` ${here a function can go} `  need backticks of course 

// 'Teacher /n/n/n/n 6' for space but when you use backticks you dont need to add that 

/*you simply do  const TheTeacher = `Teacher 



      //without having to use /n/n 


6`
*/


// properties  to access a substance of the element    .length





// methods can modify the element, and it needs parenthesis ()

// metodo chartAt()

// variable.indexOf(substr) to know if a piece of text exist in the string and in what position can be found

// const nombre = 'David'        

//console.log(nombre.charAt(2))

// .indexOf()
// .lastindexOf()

// const message = "Don't be sad, be happy! be";

// console.log(message.indexOf('be', 14)) => 24 

// console.log(message.indexOf('be')) => 14   i dont get these two 

//.repeat()  

//console.log("$".repeat(5))  "$$$$$"  //interesting one lol

// .slice(0, 2) 0 is the starting point and 2 the end point 
// .slice(-6 )  dont need a zero here since its negative, but can use a second index starting with -1 
// .localeCompare()  to order strings alphabetically 

//const a = 'a'
//const b = 'b'

//console.log(a.localCompare(b))  by alphabetica order 

// -1  string1 > string2
//  1  string1 < string2 
//  0  string1 === string2 


// * startsWith() method  if it does it will say "true" if it doesnt "false"



//const podcast = "podcast"

//console.log(podcast.startsWith("pod"))

// * endsWith() method same but ends with it 

// another method   

// * includes()  to see if the word is included 

//console.log(podcast.includes('pod'))

//   || OR 

// true || true   =  true 
// true || false  =  true 
// false|| true   =  true 
// false|| false  =  false 

//   && AND

// true && true (&& true)  =  true 
// true && false =  false 
// false && true =  false 
// flase && false = false

// !  NOT 

// ! false  = true 
// ! true   = false


//truthy                   falsy 
//  true(the keyword)      false (the keyword)
//  '0' (as string)        0 (as number)
//  'false' (as string)    '' (empty string)
//  {}                     null 
//  []                     undefined
//  35 (as number)         NaN 
//  new Date()


//    let city = 'miami';

//     console.log(city[0])   =  'm' 

// immutable (not that important)  strings are immutable 

// valores que no se pueden modificar , accediendo al indice 

// tendrias que re assignar la variable para cambiarla 

// todos los primitivos son immutables. 

// Objects are mutable 

//      VIDEO 2  =   if  conditionals 


// if(true) {

// } else - false  {

// }


// if(n == 1 ) console.log('1')  <--notice no brackets, its fine with multiple ifs 
// if(n == 2)  console.log('2')
// if(n > 3) console.log('2')


//    switch   

//const name = "string"

/*switch(name) {
      case conditional :
            do something; 
      break;
      case conditional :
      case conditional2:   // can have more than 1 conditional 
      case conditional3:
            do something; 
      break;
      case conditional :
            do something;
      break;
      case conditional :
            do something; 
      break;
      default:
            do something;
      
}*/ 


// while (condition) {
      // code to be executed while the condition is true 
// }

/*let i = 0

while(i =< 100 ) {
      console.log(i);
      i++; equals to i = i + 1 
} */


// for is better than while 

// for (initialization; condition ; finalExpression){
      // code to execute 
//}



// creates a loop iterating over iterable such as strings, arrays, etc. 


/*const someIterable = 'amsterdam';
for (const value of someIterable) {
      console.log(value);
} */

//                    Day 2 

//            Functions and Return 

// if a function doesnt have a return inside it will return undefined. 

/*function sum2(n1, n2){
      return n1 * n2;
}

const sum = sum2(6,6); => 36
const sum = 1 + sum2(6,6); => 37

console.log(sum)*/


// console.log( `Hola soy pancho y tengo ${sum2(2,4)} años programando`) => 8 
// you can use functions inside a string and invoke them there. 
// return stops the function 

      /*function sum2(n1, n2) {
            if(typeof n1 === 'string' || typeof n2 === 'string'){
                  return "invalid this is a string and cannot be added"
            }else{
                  return n1 + n2 
            }

      }

      console.log(sum2("case","casa"))*/

      /* const selectFlavor = 'napolitano'

      function getIceCream(flavor){
            switch (flavor) {
                  case 'fresa':
                        return 'Helado de fresa'
                  case 'chocolate':
                        return 'Helado de chocolate'  here you don't need break because you have return, and as we knew before return stops the function. 
                  case 'napolitano':
                        return 'Helado de napolitano'
                  default:
                        return 'Helado de nada'

            }
      }

      console.log(getIceCream(selectFlavor)); */


      // refactoring is just make code simpler and more usable.
      
      //                 Arrays

      //we can add multiple elements to a variable 

      //it can be declared with const or let 

      // to access Arrays you use [] index example:  
      
      //const arrayNames = ['Pedro', 'pablo', 'joan', 'mike']

      

      //arrayNames.push('Rachel','geo') // ads an element at the end of array 
      //arrayNames.unshift('Pepe','pablo') // ads it at the beginning 
      //arrayNames.pop() // this takes away the last element 
      //arrayNames.shift() // this takes away the first element 
      //arrayNames.splice(1,2) // this takes away element 1 and 2 
      

      // how to iterate over the array 
      // for loop is one way for example 
      /* for(let i = 0; i < arrayNames.length; i++){
            console.log(`Hi ${arrayNames[i]}`)
      } */

      //         forEach method 

      // ir de uno en uno y ejecutar una accion 

      //arrayNames.forEach(function(elementoiterado){ //function is a parameter and it has no name so its anonynous 
      //      console.log(`hi ${elementoiterado}`)
      //}) 
      //                      "element"            0,1,2        etc index 
      // arr.forEach(function(  el           ,        index){

      //}

      // .split() method this is simple you can turn strings into words and words into letters. 

      /*let phrase = "This is long enough for a string to count words"

      let words = phrase.split(' ')

      console.log(words)*/

      // forEach for objects 

      const students = [
            {
                  name: 'Yani',
                  attended: true
            },
            {
                  name: 'Sam',
                  attended: false
            },
            {
                  name: 'Esteban',
                  attended: true
            },
            
      ]


      students.forEach(function(person){
            if(!person.attended)
            console.log(`${person.name} didnt attend`)
      })
      //                indice, por eso usamos person que representa al indice 0 elemento 
      console.log(students[0].attended)

      // have to analyze this after this class 

      // new changes just now 




      

      











