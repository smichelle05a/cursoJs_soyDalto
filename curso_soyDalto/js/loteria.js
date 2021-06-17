/* ---------- Ejercicio 1.2 ----------
Cofla se enoja y le rompe el local al quiosquero, no compra el helado y decide darle ese dinero a un sin techo que a su vez compra un boleto de lotería.
    -Si le alcanza 1, lo compra
    -Si le alcanza para 2, compra los 2
    -Si le alcanza para 3 y sobra, compra 2 y regala el vuelto
    -Debe mostrar los boletos que compró y el vuelto.

El boleto cuesta 0.9*/

/* ---------- Ejercicio 2.1 ----------
Un joven muy afortunado logró ganar el primer premio de la lotería, estamos hablando del sin techo a quien Cofla le dio la plata para comprar ese boleto. El sin techo decidió hacer una fiesta para celebrar esta situación y compró una máquina que sólo deja pasar a los mayores de edad.
    -Dejar pasar sólo a los mayores de edad
    -El primero que entre después de las 2am, no paga*/

let free = false;

const validarCliente = (time) => {
    let edad = prompt('Cuál es tu edad?');
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert(`Son las ${time}:00Hs, podés pasar gratis porque sos la primera persona después de las 2am`);
            free = true;
        } else {
            alert(`Son las ${time}:00Hs, podés pasar, pero tenés que pagar la entrada`);
        }
    } else {
        alert("sos menor de edad, no podés pasar");
    }
};

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);