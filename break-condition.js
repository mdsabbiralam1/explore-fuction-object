// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }
// for (j = 0; j < 20; j++) {
//     console.log(j);
//     if (j == 8) {
//         break;
//     }
// }
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 100) {
//         break;
//     }
// {

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 5) {
        break;
    }
    console.log(number);
}