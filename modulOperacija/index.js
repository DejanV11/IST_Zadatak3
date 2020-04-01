let funckije = require('mathjs');

function sabiranje(x,y){
    return funckije.add(x,y);
}

function oduzimanje(x,y){
    return funckije.subtract(x,y);
}

function mnozenje(x,y){
    return funckije.multiply(x,y);
}

function deljenje(x,y){
    if (y == 0){
        return "Greska!!! Nije moguce deljenje sa nulom!";
    }

    return funckije.divide(x,y);
}

function stepenovanje(x,y){
    return funckije.pow(x,y);
}

module.exports = {
    sabiranje: sabiranje,
    oduzimanje: oduzimanje,
    mnozenje: mnozenje,
    deljenje: deljenje,
    stepenovanje: stepenovanje
}
