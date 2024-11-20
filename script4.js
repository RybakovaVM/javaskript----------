/////////////////--------------  function diclaration функции ---------------------/////////////

// function sunNum(a, b){    //a b параметры функции
//     console.log(a + b);
    
// }
// sunNum(4, 5)    // 4 5 аргументы функции
// function sunNum2(a, b=1){    
//     console.log(a + b);
    
// }
// sunNum2(4)   

//1 task
// function sayError(){
//     alert('Some error occurred!')
// }
// sayError()

//2 task
// function showError(x){
//     alert(`Error ${x} occurred!`)    //``  ""  ''
// }
// showError('Out of memory')

//3 task
// function show5Blocks(n){
//     for(i=1;i<=n;i++){
//         document.write("<h2> Header "+ i + "</h2>");
//     }
// }
// show5Blocks(10);



// function fakeBin(x){
//     let array = x.split('');   //разбевает строку на массив
//     console.log(array);
//     for( i=0; i<array.length; i++){
//         if(array[i]<5){
//             array[i]= '0'
//         }else{
//             array[i]= '1'
//         }
//     }
//     return array.join('')    //разбевает массив на строку 
// }
// console.log(fakeBin('162835'))


/////////////// Локальные переменные /////////


// let message = 'hello'
// function name1(params) {
    
//     console.log(message);
// }
// name1()
// console.log(message);



/////////////// Глобальные переменные(внешние)  ///////////

// let message = 'hello'
// function name1(params) {
//     let message = 'hi'
//     console.log(message); 
// }
// console.log(message);
// name1()


/////////////// Параметры, аргументы ////////////

// function budget(доход, рассход){    // a b параметры функции (переменные)
//     console.log(доход - рассход);
    
// }
// budget(250000, 150000)    // 4 5 аргументы функции

////////////////////// Возврат значения  return  /////////////

// function sunNum(a, b){ 
//     a + b
// }
// console.log(sunNum(4, 5))   // undefined


// function sunNum(a, b){ 
//     return a + b
// }
// console.log(sunNum(4, 5))   // undefined


////////////////--------------  Function EXPRESSION функции --------------------/////////////

// func1()
// let func = function(){        //Function EXPRESSION
//     console.log(123);
// }
// func()

// func1()
// function func1(){
//     console.log(456);
// }

///////////------------ Стрелочные функции ---------------//////////

// let sum = (a, b) => {
//     return a + b
// }
// console.log(sum(2, 3));
 

// let sum2 = (a, b) =>  a + b

// console.log(sum2(2, 3));


// let sum3 = a =>  alert(123)

// console.log(sum3());
 
