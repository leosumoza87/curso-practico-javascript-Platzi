function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    let promedio = sumaLista / lista.length;
    
    return promedio;
    
}

const  lista1 = [
    100,
    200,
    500,
    4000000
];

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


let mediana;

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista -1];
        const elemento2= lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
    ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}