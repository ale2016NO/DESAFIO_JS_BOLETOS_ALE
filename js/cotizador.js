const formulario = document.getElementById("registro");
let resumen = document.getElementById("lista-productos");
let sumaTotal = document.getElementById("suma-total");
const btnCalcular = document.getElementById("calcular");
const btnPagar = document.getElementById("btnRegistro");

const productos = {
        "boletos" : [
            {
                "id" : "pase_dia",
                "desc" : "Pase por día (viernes)",
                "precio" : 30
            },
            {
                "id" : "pase_completo",
                "desc" : "Todos los días",
                "precio" : 50
            },
            {
                "id" : "pase_dosdias",
                "desc" : "Pase por 2 días (vie y sáb)",
                "precio" : 45
            }
        ],
        "extras" : [
            {
                "id" : "camisa_evento",
                "desc" : "Camisa del evento",
                "precio" : 10
            },
            {
                "id" : "etiquetas",
                "desc" : "Paquete de 10 etiquetas",
                "precio" : 2
            }
        ]
    }

btnCalcular.addEventListener('click', calcularPago);
btnPagar.addEventListener('click', mjeConsolaPago);

function calcularPago(){
    let txt = "";
    let  txtResumen = "";
    let total = 0;

    productos.boletos.forEach(boleto => {
        let id = boleto.id
        let cantidad = formulario[id].value;

        if( cantidad == ""){
            valor = 0;
        } else {
            valor = cantidad * boleto.precio;
            txt = `<li>(${cantidad}) ${boleto.desc}: $ ${valor}</li>`;
            txtResumen += txt;
        }
        total += valor;
    });
    
    productos.extras.forEach(extra => {
        let id = extra.id
        let cantidad = formulario[id].value;

        if( cantidad == ""){
            valor = 0;
        } else {
            valor = cantidad * extra.precio;
            txt = `<li>(${cantidad}) ${extra.desc}: $ ${valor}</li>`;
            txtResumen += txt;
        }
        total += valor;
    });

    document.getElementById("lista-productos").style.display = "block";
    
    resumen.innerHTML = txtResumen;
    sumaTotal.innerHTML = `$ ${total}`
}

function mjeConsolaPago(){
    calcularPago();
    console.log("DATOS PERSONALES");
    console.log(`${formulario.apellido.value}, ${formulario.nombre.value} - ${formulario.email.value}`)
    console.log("TOTAL A PAGAR");
    console.log(sumaTotal.textContent);
    console.log("REGALO");
    console.log(formulario.regalo.options[formulario.regalo.selectedIndex].text);
}