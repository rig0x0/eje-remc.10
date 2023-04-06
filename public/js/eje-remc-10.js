//archivo js para la calculadora
//alert('Hola Mundo');

function multiplicaNumeros(){
    //alert('Aqui se van a multiplicar los dos numeros');

    const n1 = parseInt(document.getElementById('ent1').value); 
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res')
    //proceso
    const producto = n1*n2
    //salida
    //alert('Resultado: '+producto)

    resultado.innerHTML='Resultado: '+producto;
}

function divideNumeros(){
    //alert('Aqui se van a dividir los dos numeros')

    const n1 = parseInt(document.getElementById('ent1').value); 
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res')
    //proceso
    const cociente = n1/n2
    //salida
    //alert('Resultado: '+cociente)

    resultado.innerHTML='Resultado: '+cociente;
}

function sumaNumeros(){
    //alert("Aqui se van a sumar los dos numeros")

    //Declaracion let y const 
    //agregar id a los botones y a el resultado
    const n1 = parseInt(document.getElementById('ent1').value); 
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res')
    //proceso
    const suma = n1+n2
    //salida
    //alert('Resultado: '+suma)

    resultado.innerHTML='Resultado: '+suma;
}

function restaNumeros(){
    //alert("Aqui se van a restar los dos numeros")

    const n1 = parseInt(document.getElementById('ent1').value); 
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('res')
    //proceso
    const resta = n1-n2
    //salida
    //alert('Resultado: '+resta)

    resultado.innerHTML='Resultado: '+resta;
}

/*input type..... onclick="sumaNumeros() / cambiar value por placeholder;"
en los demas botones lo mismo*/