function alturaTriangulo() {    
    const inputlado01 = document.getElementById("inputlado1");
    const lado1 = parseInt(inputlado01.value);

    const inputLado02 = document.getElementById("inputlado2");
    const lado2 = parseInt(inputLado02.value);

    const inputBase = document.getElementById("inputbase");
    const base = parseInt(inputBase.value);

    var altura;

    if (lado1 == lado2) {
        return altura = Math.sqrt((lado1 * lado1) + (base/2 * base/2) );
        
    } else {
        if (lado1 == base) {
            return altura = Math.sqrt((lado1 * lado1) + (lado2/2 * lado2/2) );
            
        } else {
            if (lado2 == base) {
                return altura = Math.sqrt((lado2 * lado2) + (lado1/2 * lado1/2) );
                
            } else {
                alert("El triángolo no es Isóceles, un triangulo Isóceles tiene 2 lados iguales");
            }
        }
    }    
    alert ("La altura del Triangulo isoceles es "+ altura);
}



function calcularPerimetroTriangulo() {
    const inputlado01 = document.getElementById("inputlado1");
    const lado1 = parseInt(inputlado01.value);

    const inputLado02 = document.getElementById("inputlado2");
    const lado2 = parseInt(inputLado02.value);

    const inputBase = document.getElementById("inputbase");
    const base = parseInt(inputBase.value);

    const pTriangulo = lado1 + lado2 + base;
    alert(pTriangulo);
}

function calcularAreaTriangulo() {
    const inputlado01 = document.getElementById("inputlado1");
    const lado1 = parseInt(inputlado01.value);

    const inputLado02 = document.getElementById("inputlado2");
    const lado2 = parseInt(inputLado02.value);

    const inputBase = document.getElementById("inputbase");
    const base = parseInt(inputBase.value);

    const aTriangulo = base * alturaTriangulo() / 2;
    alert(aTriangulo);
}

