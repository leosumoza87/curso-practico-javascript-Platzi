var remuBase;
var fechaIngreso;
var fechaUltgrat;
var fechaCese;
var UltGrat;
var fechaUltVac;

function diasLaborados() {
    
    fechaCese = document.getElementById("fechaCese");
    var ff = new Date(fechaCese.value);
    fechaUltgrat = document.getElementById("fechaUltGrat");
    console.log( fechaUltgrat);
    var fuG = new Date(fechaUltgrat.value);

    if (fechaUltgrat.value == 0) {
        fechaIngreso = document.getElementById("fechaIngreso");
        var fi = new Date(fechaIngreso.value);
        var dias = (ff - fi) / 1000/ 60 / 60 / 24; 
    } else {
        dias = (ff - fuG) / 1000/ 60 / 60 / 24;
    };    
    console.log(dias);
    return dias;
};

function mesesLaborados() {

    fechaIngreso = document.getElementById("fechaIngreso");
    var fi = new Date(fechaIngreso.value);
    
    fechaCese = document.getElementById("fechaCese");
    var ff = new Date(fechaCese.value); 
         
    var meses = (ff - fi) / 1000/ 60 / 60 / 24 / 30;

    
    
    return meses;
};

function UltVac() {

    fechaUltVac = document.getElementById("fechaUltVac");
    var fi = new Date(fechaUltVac.value);
    
    fechaCese = document.getElementById("fechaCese");
    var ff = new Date(fechaCese.value); 

    if (fechaUltVac.value == 0) {
        fechaIngreso = document.getElementById("fechaIngreso");
        var fi = new Date(fechaIngreso.value);
        var meses = (ff - fi) / 1000/ 60 / 60 / 24 / 30; 
    } else {
        meses = (ff - fi) / 1000/ 60 / 60 / 24 / 30;
    };    

    return meses;
};

function gratTrunca() {
    remuBase = document.getElementById("remuneracionBase");
    remuBase = Number(remuBase.value);
    console.log(remuBase);
    var trunca = ((remuBase + 93) / 180 ) * diasLaborados();
    console.log(trunca);
    return trunca; 
}

function CTS() {
    remuBase = document.getElementById("remuneracionBase");
    remuBase = Number(remuBase.value);
    UltGrat = document.getElementById("UltGrat");
    UltGrat = Number(UltGrat.value);
    var cts = ((UltGrat/6) + (remuBase + 93)) / 12 * mesesLaborados();
    console.log(cts);
    return cts; 
}

function vacaciones() {
    remuBase = document.getElementById("remuneracionBase");
    remuBase = Number(remuBase.value);
    fechaUltVac = document.getElementById("fechaUltVac");
    fechaUltVac = fechaUltVac.value;
    
    var vac = (remuBase + 93) / 12 * UltVac();
    console.log(vac);
    return vac; 
}

function bonext() {
    remuBase = document.getElementById("remuneracionBase");
    remuBase = Number(remuBase.value);
    var bon = 0.09 * gratTrunca(remuBase);
    console.log(bon);
    return bon; 
}

function calculoLiquidacion () {
    var liq = gratTrunca() +
     CTS() +
     vacaciones() +
     bonext();

     console.log(liq);

     var result = document.getElementById("result");
     result.innerText= "El monto de su liquidacion es: " + liq.toFixed(2) + " S/.";
     return liq ;     
};
