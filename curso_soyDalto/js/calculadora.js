/* ---------- Ejercicio 2.3 ----------
Cofla, feliz por haber empezado las clases, volvió a su casa y ya tiene su primera tarea de cálculo. Tiene que hacer varios cálculos matemáticos para los que la suma, resta, multiplicación y división van a ser de vital importancia.
    -Crear una calculadora que efectúe estas acciones*/

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// let operacion = prompt(`¿Qué operación deseas realizar?
// 1: Sumar,  2: Restar,  3: Multiplicar,  4: Dividir`);

/*if (operacion == 1) {
    let numero1 = prompt(`Primer número para sumar`);
    let numero2 = prompt(`Segundo número para sumar`);
    let resultado = sumar(numero1,numero2);
    alert(`La suma es ${resultado}`);
} else if (operacion == 2) {
    let numero1 = prompt(`Primer número para restar`);
    let numero2 = prompt(`Segundo número para restar`);
    let resultado = restar(numero1,numero2)
    alert(`La resta es ${resultado}`);
} else if (operacion == 3) {
    let numero1 = prompt(`Primer número para multiplicar`);
    let numero2 = prompt(`Segundo número para multiplicar`);
    let resultado = multiplicar(numero1,numero2)
    alert(`La multiplicación es ${resultado}`);
} else if (operacion == 4) {
    let numero1 = prompt(`Primer número para dividir`);
    let numero2 = prompt(`Segundo número para dividir`);
    let resultado = dividir(numero1,numero2)
    alert(`La división es ${resultado}`);
} else {
    alert(`No se ha encontrado la operación`)
}*/

/* ---------- Ejercicio 4.1 ----------
Cofla ya está terminando el primer semestre y ahora las tareas son mucho más avanzadas. Además de trabajar con suma, resta, multiplicación y división, deberá hacer otro tipo de operaciones más avanzadas, como calcular potencias, raíces cuadradas y cúbicas.
    -Perfeccionar la calculadora para implementar las nuevas funciones*/

const potencia = (num1, num2) => Math.pow(num1, num2);
const raiz = (num) => Math.sqrt(num);
const raizCubica = (num) => Math.cbrt(num);

let operacion = prompt(`¿Qué operación deseas realizar?
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Potencia
6: Raíz Cuadrada
7: Raíz Cúbica`);

let resultado = null;

while (operacion > 7 || operacion == 0) {
    alert(`La operación no existe`);
    operacion = prompt(`¿Qué operación deseas realizar?
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Potencia
6: Raíz Cuadrada
7: Raíz Cúbica`);
}

if (operacion == 1) {
    operacion = `sumar`;
    let numero1 = parseInt(prompt(`Primer número para ${operacion}:`));
    let numero2 = parseInt(prompt(`Segundo número para ${operacion}:`));
    resultado = sumar(numero1, numero2);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else if (operacion == 2){
    operacion = `restar`;
    let numero1 = parseInt(prompt(`Primer número para ${operacion}:`));
    let numero2 = parseInt(prompt(`Segundo número para ${operacion}:`));
    resultado = restar(numero1, numero2);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else if (operacion == 3){
    operacion = `multiplicar`;
    let numero1 = parseInt(prompt(`Primer número para ${operacion}:`));
    let numero2 = parseInt(prompt(`Segundo número para ${operacion}:`));
    resultado = multiplicar(numero1, numero2);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else if (operacion == 4){
    operacion = `dividir`;
    let numero1 = parseInt(prompt(`Primer número para ${operacion}:`));
    let numero2 = parseInt(prompt(`Segundo número para ${operacion}:`));
    resultado = dividir(numero1, numero2);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else if (operacion == 5){
    operacion = `potencia`;
    let numero1 = parseInt(prompt(`Número base para ${operacion}:`));
    let numero2 = parseInt(prompt(`Número para ${operacion}:`));
    resultado = potencia(numero1, numero2);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else if (operacion == 6){
    operacion = `raíz cuadrada`;
    let numero1 = parseInt(prompt(`Número para ${operacion}:`));
    resultado = raiz(numero1);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
} else {
    operacion = `raíz cúbica`;
    let numero1 = parseInt(prompt(`Número para ${operacion}:`));
    resultado = raizCubica(numero1);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`)
}
