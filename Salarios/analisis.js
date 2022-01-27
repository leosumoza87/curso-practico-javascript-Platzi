// Helpers

function esPar(numerito) {
    return (numerito % 2 === 0 );   
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    let promedio = sumaLista / lista.length;
    
    return promedio;
    
}

console.log(colombia);

//Calculadora de Medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    console.log(mitad);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        console.log(calcularMediaAritmetica([personitaMitad1, personitaMitad2]));
        return mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(function(personita){
    return personita.salary;
});

const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){
        return salaryA - salaryB;
});

console.log(salariosColSorted);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana top 10%

const spliceStart = salariosColSorted.length * (90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});