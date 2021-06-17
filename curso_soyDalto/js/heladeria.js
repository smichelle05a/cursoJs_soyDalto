/* ---------- Ejercicio 1.1 ----------
3 chicos de 23 años entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado más caro que puedan comprar con el dinero que tienen. Cada uno tiene distintas cantidades de dinero y hay una tabla en la que podemos basarnos para saber el costo de cada helado.
    -Ingresar el monto y mostrar el más caro
    -Si hay 2 o más con el mismo precio, mostrar ambos
    -Indicar el vuelto

Roberto tiene USD 1.5
Pedro tiene USD 1.7
Cofla tiene USD 3

Los precios son los siguientes:

Helado de agua: 0.6
Helado de crema: 1
Bombón helado heladix: 1.6
Bombón helado heladovich: 1.7
Bombón helado helardo: 1.8
Potecito de helado con confites: 2.9
Pote de 1/4 KG: 2.9*/

let dinero = parseInt(prompt("Cuánto dinero tienes?"));

if (dinero >= 0.6 && dinero < 1) {
    alert("Comprate el Helado de agua y te sobran " + (dinero - 0.6));
} else if (dinero >= 1 && dinero < 1.6) {
    alert("Comprate el Helado de crema y te sobran " + (dinero - 1));
} else if (dinero >= 1.6 && dinero < 1.7) {
    alert("Comprate el Bombón helado heladix y te sobran " + (dinero - 1.6));
}else if (dinero >= 1.7 && dinero < 1.8) {
    alert("Comprate el Bombón helado heladovich y te sobran " + (dinero - 1.7));
}else if (dinero >= 1.8 && dinero < 2.9) {
    alert("Comprate el Bombón helado helardo y te sobran " + (dinero - 1.8));
}else if (dinero >= 2.9){
    alert("Comprate el Potecito de helado con confites o el Pote de 1/4 KG y te sobran " + (dinero - 2.9));
} else {
    alert("No te alcanza para ningún helado");
};