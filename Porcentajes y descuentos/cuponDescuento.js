
var cupon = [
    cupon001 = {codigo: "A-001", discount: 10},
    cupon002 = {codigo: "A-002", discount: 15},
    cupon003 = {codigo: "A-003", discount: 20}
];

function precioDescuento (price, discount) {
    var precioConDescuento = price * (100-discount) / 100;
    return precioConDescuento
}

function calculoCuponDescuento() {
    var inputPrice = document.getElementById("price");
    var price = inputPrice.value;

    var inputCupon = document.getElementById("cupon");
    var code = inputCupon.value;

    if (code == cupon001.codigo) {        
        var discount = cupon001.discount;
        var precioConDescuento = precioDescuento(price, discount);
        var result = document.getElementById("result");
        result.innerText= "El precio a pagar es de $ "+ precioConDescuento;
    } else if (code == cupon002.codigo) {
        var discount = cupon002.discount;
        var precioConDescuento = precioDescuento(price, discount);
        var result = document.getElementById("result");
        result.innerText= "El precio a pagar es de $ "+ precioConDescuento;
    } else if (code == cupon003.codigo) {        
        var discount = cupon003.discount;
        var precioConDescuento = precioDescuento(price, discount);
        var result = document.getElementById("result");
        result.innerText= "El precio a pagar es de $ "+ precioConDescuento;
    } else {
        var result = document.getElementById("result");
        result.innerText= "El cupon introducido es incorrecto";
    }    
}