
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

      /*const students = [
            {
      [0]          name: 'Yani',
                  attended: true
            },
            {
                  name: 'Sam',
      [1]         attended: false
            },
            {
                  name: 'Esteban',
      [2]         attended: true
            },
            
      ]


      students.forEach(function(person){
            if(!person.attended)
            console.log(`${person.name} didnt attend`)
      })
      //                indice, por eso usamos person que representa al indice 0 elemento 
      console.log(students[0].attended)
      */

      // have to analyze this after this class , analized it and got it for the most part.  




      //                      HTML   


      //                      css 

      //                    Objects  2:13:01 

      /* let olympicRecords = {
            athletics100Men: 'Justin Gatlin',
            athleticsLongJumpMen: 'Mike Powel',
            doubleOllie: 'Christ Chann'
      }; */

      //console.log(olympicRecords.athletics100Men) // first way to access the property of an object
      //console.log(olympicRecords['athleticsLongJumpMen']) // second way to access the property of an object

      // to add a new property to an object 

      /*olympicRecords.swimming200hamsters = 'Pepinito'
      olympicRecords['swimming200men'] = 'Michael phelps'
      olympicRecords.athletics100Men = 'David Garcia'*/

      // to find if the property exists in the object 

      //console.log('swimming200hamsters' in olympicRecords)   // will say true or false. 

      // to delete a property 
      
      //delete olympicRecords.doubleOllie

      

      // iterate over an object's properties    1. object keys  2. for... in loop  3. for each as it is an array
      // Object.keys(olympicRecords) // turns it into an array which then you can do this 
      /*Object.keys(olympicRecords).forEach((names) => {
            console.log(`these are the names of the categories: ${names}`)
      })*/
      
      /* result   these are the names: athletics100Men
                  these are the names: athleticsLongJumpMen
                  these are the names: swimming200hamsters
                  these are the names: swimming200men  
      */


      // iterate over an object's values 
      /*Object.values(olympicRecords).forEach((names)=> {
            console.log(`these are the names of the competitors: ${names} `)
      })*/
      
      // iterate over both an object's keys and values 
      // this turns the object into an array of arrays 

      //console.log(Object.entries(olympicRecords))  this will show the array of arrays

      //          0        1        2        3
      //  (4) [array(2),array(2),array(2),array(2)]

            /*    0: Array(2)
                        0: 'athletics100men'            first array which has 2 arrays
                        1: 'David Garcia'
                  1: Array(2)
                        0: 'athelticsLongJumpmen'       second array which has 2 arrays
                        1: 'Mike Powel'
                  2: Array(2)
                        0: 'swimming200hamster'         third array which has 2 arrays 
                        1: 'Pepinito'
                  3: Array(2)
                        0: 'swimming200men'             forth array which has 2 arrays 
                        1: 'Michael phelps'
            */
      

// now we can iterate over the object properties and values 

/*Object.entries(olympicRecords).forEach((element)=> {
      console.log(`${element[1]} has the record of: ${element[0]}`
} )*/

// arrays and objects mixed  


// objects within an array

/* const students = [
      {name: 'Bob', age: 17 },
      {name: 'Susy', age: 18 },
      {name: 'Ted', age: 18 },
      {name: 'Sarah', age: 20 },
      {name: 'Sarah', age: 20 },
];

console.log(students[3].name) //  -> Sarah 


we can add objects to an array with .push({object}) for example 

students.push({name: 'Bobby Valentino', age:24}); // notice here we added {} inside the parenthesis to add object to array


const bob = {name: 'Bob', age: 21}; // same thing but here you make a const first 
students.push(bob)


console.log(students)*/

// arrays within an array

/* const twoD = [
    //  0      1      2
      ['bob','susy', 'Ted'],
      ['Lilly','Sarah', 'Bill'],     // una matriz   array dentro de array 
      ['Thomas','Barry', 'Alex']
]


console.log(twoD[2][1]) */

/* const classes = [
      [
            { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
            { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
            { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
            { firstName: 'Lulu', lastName: 'Considine', age: 20 },
            { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
      ],
      [
            { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
            { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
            { firstName: 'Emie', lastName: 'Franecki', age: 29 },
            { firstName: 'Okey', lastName: 'Runte', age: 18 },
            { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
      ],
      [
            { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
            { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
            { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
            { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
            { firstName: 'Stanley', lastName: 'Hand', age: 22 }
      ],
      [
            { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
            { firstName: 'Mervin', lastName: 'Blick', age: 28 },
            { firstName: 'Damien', lastName: 'Rohan', age: 28 },
            { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
            { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
      ],
      [
            { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
            { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
            { firstName: 'Braeden', lastName: 'Walker', age: 26 },
            { firstName: 'Derick', lastName: 'Weber', age: 22 },
            { firstName: 'Robert', lastName: 'Beatty', age: 30 }
      ]
];

console.log(classes[3][2].lastName) 




const classes2 = [
      [
            [ 'Tomas', 'Bechtelar',  22 ],
            [  'Nico', 'Schamberger',  26 ],
            [  'Ashleigh', 'Kutch',  29 ],
            [  'Lulu', 'Considine',  20 ],
            [  'Garland', 'Waelchi',  21 ]
      ],
      [
            [  'Charlie', 'Rolfson',  23 ],
            [  'Austin', 'Schowalter',  26 ],
            [  'Emie', 'Franecki',  29 ],
            [  'Okey', 'Runte',  18 ],
            [  'Jameson', 'Jakubowski',  22 ]
      ],
      [
            [  'Antwan', 'Marquardt',  22 ],
            [  'Eugenia', 'Nienow',  23 ],
            [  'Keely', 'Hagenes',  29 ],
            [  'Jazmin', 'Aufderhar',  29 ],
            [  'Stanley', 'Hand',  22 ]
      ],
      [
            [  'Vincent', 'Langworth',  20 ],
            [  'Mervin', 'Blick',  28 ],
            [  'Damien', 'Rohan',  28 ],
            [  'Fabian', 'Kautzer',  22 ],
            [  'Lilliana', 'Lesch',  26 ]
      ],
      [
            [  'Antonette', 'Stokes',  25 ],
            [  'Alexandrine', 'DuBuque',  22 ],
            [  'Braeden', 'Walker',  26 ],
            [  'Derick', 'Weber',  22 ],
            [  'Robert', 'Beatty',  30 ]
      ]
];

console.log(classes2[3][0][1])

const classRoom = {
      teacher:  {
            firstName: 'Greg',
            lastName: 'Dach',
            age: 38,
            address: {
            street: "3085 Kelton Knolls",
            city: "Aldaside",
            state: "Maryland"
            }
      }
};

console.log(classRoom.teacher.address.state)

const classRoom2 = {
      teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
      students: [
            { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
            { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
            { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
            { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
            { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
      ]
};

console.log(classRoom2.students[3].firstName)


const schoolSystem = {
      schools: [
        {
          name: "Fake School 1",
          classRooms: [
            {
              teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
              students: [
                  { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                  { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                  { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                  { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                  { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
                ]
            },
            {
              teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
              students: [
                { firstName: 'Manley', lastName: 'Doyle', age: 18 },
                { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
                { firstName: 'Sid', lastName: 'Rohan', age: 30 },
                { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
                { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
              ]
            }
          ]
         },
         {
          name: "Fake School 2",
          classRooms: [
            {
              teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
              students: [
                { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
                { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
                { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
                { firstName: 'Rickie', lastName: 'White', age: 22 },
                { firstName: 'Rose', lastName: 'Collins', age: 30 }
              ]
            },
            {
              teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
              students: [
                { firstName: 'Melany', lastName: 'Welch', age: 25 },
                { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
                { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
                { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
                { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
               ]
             }
           ]
           },
           {
          name: "Fake School 3",
          classRooms: [
            {
              teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
              students: [
                { firstName: 'Christop', lastName: 'Hahn', age: 26 },
                { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
                { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
                { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
                { firstName: 'Maudie', lastName: 'Haley', age: 30 }
              ]
            },
            {
              teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
              students: [
                { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
                { firstName: 'Lois', lastName: 'Kulas', age: 28 },
                { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
                { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
                { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
              ]
            }
          ]
        }
      ]
    };



console.log(schoolSystem.schools[0].classRooms[1].students[4].lastName)

console.log(schoolSystem)  // to check on the console one by one to see which is which 
*/


//                        Day 4 

//
let arri = ['The','house','is','nice']

let val = "" 

function sum(arr){
      for (let i=0; i < arr.length; i++){
            const element = arr[i];
            val+= element
      }
      return val // return can return for another function or it can be given to a variable
}


const result = sum(arri.join(' '))

console.log(result)

//functions are first class citizens
a() // hoisted , se elevan 

function a () {
      console.log('a') // if this gets invoked before the actual function, on top, it works. (hoisting)
}

const b = function (){  //function anonima por que no tiene nombre, pero puede ser invocada con la variable b
      console.log('b')  // if this gets invoked before the actual function, on top, it does not work. (hoisting)
}


b()

//el echo que pueda guardar mi function a una variable significa que la puedo pasar como argumento a otra funcion
// As we already mentioned, fucntions are first class objects and ,as such, can be stored in variables. one more characteristic that goes hand in hand with being a first class object functions can be passed as parameters (arguments) to other functions. 
//in that case, we are talking about callbacks 

// Callback functions are used to make sure a particular code doesn't execute until another code has already finished execution 

/*const arr = [1,2,4,5]
//          callback parameter , parameter 
arr.forEach(function(number    ,  index    ){

})*/
//            first argument-the function 
/*setTimeout(function (         ){
      console.log('Hola a todos')
}, 5000 )
// second argument the time */ 

/*function eatDinner() {
      setTimeout(function () {
      console.log('Hola!');
      
      }, 7000);
      eatDessert()
      
}

function eatDessert() {
      console.log('Eating the dessert!');
}

eatDinner(eatDessert);*/

/*function obtenerSabor(){
      return prompt('De que su helado joven/guerita')
}

function pedirAmable(cb){
      let flavor = cb()
      console.log(`Tenga su helado de ${flavor} hombre/guerita`)
}

function pedirGrosero(cb){
      let flavor = cd()
      console.log(`Tenga su helado de ${flavor} grosero`)
}

pedirAmable(obtenerSabor) // with a callback you will send the function as an argument 
*/

// arrow functions   

const greetingAf = function (name) {  // this is a normal function 
      return `Hello, ${name}!`
};

const greetingAfi = name => {        // this is an arrow function with 1 parameter, when there is only 1 
      return `Hello, ${name}!`       // we can ommit the parenthesis 
};
const greetingAfi2 = name => `Hello, ${name}!`; // when its a single line, we can then ommit brackets {} and return


console.log(greetingAf('rosita'));
console.log(greetingAfi('Pepinito'));
console.log(greetingAfi2('pancho'));


const user = {
      name: 'ana',
      age: 29,
      getOlder: function () {
            console.log(this);
            console.log(this.name)
      }

};

const user2 = {
      name: 'Alfonso',
      age: 29, 
      getOlder: function () {
            console.log(this); // this gets back the entire object with everysingle characteristic 
            console.log(this.name); // this just gets back the name 
      }
};

user.getOlder();
user2.getOlder();


