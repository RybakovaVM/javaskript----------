// Копирование объектов

// let a = 1
// let b = a
// b = 5
// console.log(b);
// console.log(a);

// let user = {
//     name: 'Ura'
// }
// let userCopy = user  //копируется ссылка на объект
// userCopy.name='Ola'  //изменено по ссылке из переменной userCopy


// console.log(userCopy);
// console.log(user);

// сравнение по ссылке 

// let a ={}
// let b = new Object  //2 независимых объекта
// console.log(a==b);   // false
// console.log(a===b);  // false


// let c ={}
// let d = c
// console.log(c==d);   //true
// console.log(c===d);  //true

// let user = {
//     name: 'Ura',
//     age: 25,
//     massa: 56
// }

// let userCopy = {}
     // userCopy.name = user.name
     // userCopy.age = user.age
     // userCopy.massa = user.massa

// for(let key in user){
//     userCopy[key] = user[key]
// }

// userCopy.name = 'Ola'
// console.log(userCopy);
// console.log(user);

// Object.assign

// let user1 = {
//     name: 'Ura',
//     age: 25,
// }

// let user2 = {
//     name: 'Ola',
//     city: 'Ufa',
// }
// let user3 = Object.assign(user1, user2)
// console.log(user3);
