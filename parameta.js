function bringSingara(taka) {
    console.log('singara er jonno dise', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQantity = taka / singaraPrice;
    return singaraQantity;

}
var money = 250;
var singara = bringSingara(money);
console.log('ei nen singara', singara);
