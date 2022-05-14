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

let temperature = 0
let item_2 = 20
// let item_3 = 50

while(temperature < 40) {

    if (temperature < 10){
        console.log("temperature = ", temperature, "Holodno")
} else if (temperature >=10 && temperature <30){
    console.log("temperature = ", temperature, "Horosho!!!")
} else {
    console.log("temperature = ", temperature, "Kapets!!!")
}

temperature++
}

