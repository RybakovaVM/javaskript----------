// ООП Объектно-орентированое программирование
// Массивы Array

// let arr = []
// let arr2 = new Array

// let students = ['Kamul', 'Bogdan', 'Adelina', 'Elena', 'Maxim']

// students[1] = 'Rustam'
// students[5] = 'Regina'
// students[10] = 'Ildar'
// students[8] = 'Bulat'

// console.log(students);
// console.log(students[1]);
// console.log(students[5]);
// console.log(students.length);

// let arr = [
//     1,
//     true,
//     'АБЦД',
//     null, 
//     false,
//     Symbol, 
//     BigInt, 
//     undefined, 
//     {city: 'Ufa'},
//     function(){alert('Hello')},
//     [1, 2, 3]
// ]
// console.log(arr);
// console.log(arr[9]());

// let students = [
//     'Kamul', 
//     'Bogdan', 
//     'Adelina', 
//     'Elena', 
//     'Maxim'
// ]

// students.pop()  //Удаление последнего элемента
// students.pop()

// students.push('Maxim')  //Добавление элемента в конец массива
// students.unshift('Lera')  //Добавление элемента в начало массива
// console.log(students);

// students.shift()  //Удаление первого элемента
// console.log(students);


// Копирование массива

// let students = [
//     'Kamul', 
//     'Bogdan', 
//     'Adelina', 
//     'Elena', 
//     'Maxim'
// ]
// let users = students
// users.shift()
// console.log(users);
// console.log(students);

// let students = [
//     'Kamul', 
//     'Bogdan', 
//     'Adelina', 
//     'Elena', 
//     'Maxim'
// ]
// let users = [...students] //спред оператор
// users.shift()
// console.log(users == students);
// console.log(students);