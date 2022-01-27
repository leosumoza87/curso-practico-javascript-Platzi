var valores = [
   valor1 =  { valor: 100 , peso: 5},
   valor2 =  { valor: 900 , peso: 1},
   valor3 =  { valor: 200 , peso: 4},
   valor4 =  { valor: 100000 , peso: 1},
   valor5 =  { valor: 20000 , peso: 5},
   valor6 =  { valor: 35000 , peso: 2},
   valor7 =  { valor: 1000 , peso: 3},
];

var numProm = valores.map (function(elemento) {
    return elemento.valor * elemento.peso;            
});

var sumNumProm = numProm.reduce(function(sum, newVal){
    return sum + newVal;
});

var denProm = valores.map (function(elemento) {
    return elemento.peso;            
});

var sumDenProm = denProm.reduce(function(sum, newVal){
    return sum + newVal;
});

// var num = 0;
// var den = 0;

// for (i=0 ; i < valores.length; i++) {
    
//     num = numProm[i] + num;
//     den = denProm[i] + den;    
// };



var promPond = sumNumProm / sumDenProm ; 