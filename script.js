
//Descuento cliente

function descuento_cliente(clienta_antigua){

    const valor_producto = 11900;
    let cantidad_producto = prompt("Ingrese la cantidad que desea comprar");

    if (clienta_antigua == "si"){
        
            if ( cantidad_producto == 1 ){
                console.log("Total a pagar:", valor_producto);
            }

            else if ( cantidad_producto == 2 ){
                descuento = (valor_producto * cantidad_producto ) * 0.1;
                console.log("Tu descuento es del 10%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }

            else if ( cantidad_producto >= 3 && cantidad_producto <= 5 ){
                descuento = (valor_producto * cantidad_producto ) * 0.15;
                console.log("Tu descuento es del 15%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }

            else if ( cantidad_producto >= 6 && cantidad_producto <= 100 ){
                descuento = (valor_producto * cantidad_producto ) * 0.20;
                console.log("Tu descuento es del 20%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }
            
    }
    else if ( clienta_antigua != "si"){
        if ( cantidad_producto >= 1 ){
            console.log("Debe haber comprado antes para acceder al descuento de tienda. Total a pagar:", 
            valor_producto * cantidad_producto);
        }
    }
}

//

console.log("Bienvenido a tienda Beauty");
let numero_venta = prompt("Ingresar número de venta o cerrar día con 0");

while ( numero_venta >= 1 ) {

    console.log("Número de venta: ", numero_venta);

    let clienta_antigua = prompt("Escriba 'si' para ingresar a descuento de clienta antigua");

    descuento_cliente ( clienta_antigua );

    numero_venta = prompt("Ingresar número de venta o cerrar día con 0");

}

if ( numero_venta == 0 ){
    console.log("A finalizado el día de ventas");
}






