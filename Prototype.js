// Прототипы


function yolochka33(){};

yolochka33.prototype.fast = function (){
    console.log('FAST !!')
}
yolochka33.prototype.green = function (sun, co2){
    console.log('Green ==', sun, ' + ', co2)
}
yolochka33.prototype.shishki = function (){
    console.log('shishki == Yolki')
}
let forest = new yolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()