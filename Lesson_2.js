// Логическое И (&&) и логическое ИЛИ (||):

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)

// let item_1 = 5
// let item_2 = 10

// if (item_1 > 3 || item_2 < 15){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// let item_1 = 5
// let item_2 = 100
// let item_3 = 50

// let item_3 = (item_2 > 50) ? console.log("Idi est`") : console.log("Hodi golodniy")


// if (item_1 > 3 || item_2 < 15){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 && item_2 < 15){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 || item_2 < 15 || item_3 == 50){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 || item_2 < 15 && item_3 == 50){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 && item_2 < 15 && item_3 == 50){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 && item_2 < 15 && item_3 != 50){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 && item_2 == 100 && item_3 != 50){
//     console.log( "Idi est`")
// } else {
//     console.log("Hodi golodniy")
// }

// let item_1 = 0
// let item_2 = 20
// let item_3 = 50

// Циклы:

// while(true) {
//     console.log( item_1 + " = Idi est`")
//     item_1++
// }

// while(item_2 > 19) {
//     console.log( item_1,  " = Idi est`")
//     item_1++
// }

// while(item_1 < 20) {
//     console.log( item_1 + " = Idi est`")
//     item_1++
// }

// while(item_1 < 20 || item_2 < 30) {
//     console.log( item_1, " = Idi est`")
//     console.log( item_2, " = -------")
//     item_1++
//     item_2++
// }

// while(item_1 < 20 && item_2 < 30) {
//     console.log( item_1, " = Idi est`")
//     console.log( item_2, " = -------")
//     item_1++
//     item_2++
// }

// let temperature = 0
// let item_2 = 20
// let item_3 = 50

// while(temperature < 40) {

//     if (temperature < 10){
//         console.log("temperature = ", temperature, "Holodno")
// } else if (temperature >=10 && temperature <30){
//     console.log("temperature = ", temperature, "Horosho!!!")
// } else {
//     console.log("temperature = ", temperature, "Kapets!!!")
// }

// temperature++
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i, " = FOR")
// }


// for (let temperature = 0; temperature < 10; temperature++) {
//     if (temperature < 3){
//                 console.log("temperature = ", temperature, "Holodno")
//         } else if (temperature >=3 && temperature <7){
//             console.log("temperature = ", temperature, "Horosho!!!")
//         } else {
//             console.log("temperature = ", temperature, "Kapets!!!")
//     }
// }

// for (let temperature = 0; temperature < 10; temperature+=2) {
//     if (temperature < 3){
//                 console.log("temperature = ", temperature, "Holodno")
//         } else if (temperature >=3 && temperature <7){
//             console.log("temperature = ", temperature, "Horosho!!!")
//         } else {
//             console.log("temperature = ", temperature, "Kapets!!!")
//     }
// }

// let names =  ['Kate',
//             'Alex',
//             'Ivan',
//             'Petr',
//             'Andrey',
//             'Vika'] 

// for (let item_1 in names) {

//     console.log(item_1, names [item_1])
// }

// for (item_1 of names) {
//     if (item_1 == 'Petr')
//     break;

//     console.log(item_1)
// }

let names =  ['Kate',
            'Alex',
            'Ivan',
            'Petr',
            'Andrey',
            'Vika'] 


let items = names.length
let count = 0
while (++count < items){
    console.log(names[count])
    }


// for (let item_1 in names) {
//     if (item_1 % 2 == 0)

//     console.log(names[item_1], item_1, 2)
// }