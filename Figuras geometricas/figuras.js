// Código del cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado;
}

// console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoBase = 4;
// const alturaTriangulo = 5;

// console.log (
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + " cm, " 
//     + ladoTriangulo2 + " cm, " 
//     + ladoBase + " cm" 
// );

function perimetroTriangulo (base, lado1, lado2) {
    return base + lado1 + lado2;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
// console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm");

// const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
// console.log("El área del triángulo mide: " + areaTriangulo + " cm^2");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del Círculo

console.group("Círculo");

// const radio = 4;
// console.log("El radio mide: " + radio + " cm");

// const diametro = radio * 2;
// console.log("El diámetro mide: " + diametro + " cm");

// const PI = 3.1416

// const PI = Math.PI;

// const perimetroCirculo = diametro * PI;
// console.log("El circunferencia mide: " + perimetroCirculo + " cm");

function diametro (radio){
    return radio *2;
}

function perimetroCirculo (radio) {
    return diametro (radio) * Math.PI;
}

// const areaCirculo = radio * radio * PI;
// console.log("El área del círculo mide: " + areaCirculo + " cm^2");

function areaCirculo (radio) {
    return radio * radio * Math.PI;
}

console.groupEnd();

// Interaccion con el documento HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {

    const inputLado1 = document.getElementById("inputlado1");
    const l1 = parseInt(inputLado1.value);
    console.log(l1);

    const inputLado2 = document.getElementById("inputlado2");
    const l2 = parseInt(inputLado2.value);
    console.log(l2);

    const inputBase = document.getElementById("inputbase");
    const ba = parseInt(inputBase.value);  
    console.log(typeof ba); 
    
    const pTriangulo = perimetroTriangulo(ba, l1, l2);
    console.log(perimetroTriangulo(ba, l1, l2));
    alert(pTriangulo);
}

function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("inputaltura");
    const altura = inputAltura.value;

    const inputBase = document.getElementById("inputbase");
    const ba = inputBase.value; 

    const area = areaTriangulo(ba, altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const r = inputRadio.value;
    const pCirculo = perimetroCirculo(r);
    alert(pCirculo);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const r = inputRadio.value;
    const aCirculo = areaCirculo(r);
    alert(aCirculo);
}

