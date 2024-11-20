// function stringy(size){
//     let str = ''
//     for(let i = 0 ; i < size ; i++){
//     //     if(i % 2){
//     //     str = str + '0'
//     // }else{
//     //     str = str + '1'
//     // }
//     i % 2 ? str = str + '0' : str = str + '1'
//     console.log(!!(i%2));
//     console.log(str);
    
//     }
//     return str
// }
// console.log('RESALT:' + stringy(12));







/////////////////////  ООП(Объектно-орентированое программирование)  /////////////////////////

//Object

// let obj1 = {}   //синтаксис "литерал объекта"
// let obj2 = new Object   //синтаксис "конструктор объекта"

// let user = {
//     name: 'Lera',
//     'age': 15,
//     "data registration": '19.11.2024',
//     teacher: false,
//     pensioner: null,
//     address: {
//         city: 'Ufa',
//         street: "Oktyabrya",
//     },
//     sayHi: () => console.log('Hello!!!'),
// }
// console.log(user.sayHi);


// console.log(user.teacher = true);   //изменение значения свойства
// user.address.city = 'Moscow'        //изменение значения свойства
// console.log(user.address.city);


// user.newSurname = 'Rubakova'   // Добавление свойства
// console.log(user);

// user.address.newHome = 42
// console.log(user);

// delete user.pensioner      //Удаление свойства
// console.log(user.pensioner);

// let canvas = {
//     x: 0,
//     y: 0,
//     endX: 10,
//     endY: 15,
// }

// for(let tempProperty in canvas){
//     alert(tempProperty)
//     alert(canvas[tempProperty])
// }