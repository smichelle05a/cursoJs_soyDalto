/* ---------- Ejercicio 5.2 ----------
Cofla está sufriendo ya que a pesar de contar con el 90% de asistencia y tener un promedio superior al 7/10, no cree llegar a entregar el 75% de los trabajos prácticos a tiempo ya que necesita dividir las tareas que hará semanalmente. Cofla debe trabajar 8hs por día durante 2 semanas entre las que tiene 24hs para estudiar, 24hs para hacer trabajos prácticos, 56hs para trabajar y 8hs para hacer las cosas de la casa.
    -Organizar las actividades diariamente
    -Utilizar la consola para organizarlo
    -Cada tarea no debe superar las 4hs*/

// Estudiar = 1 hr 40 minutos (100 min) diarios
// Trabajos Prácticos = 1hr 40 minutos (100 min) diarios
// Trabajar = 4hrs (240 min) diarias
// Cosas de casa = 30 min diarios
// Descanso = 10 min

class horario {
    constructor(estudiar, tp, descanso, trabajo, casa){
        this.estudiar = estudiar;
        this.trabajosPracticos = tp;
        this.descanso = descanso
        this.trabajo = trabajo;
        this.cosasDeCasa = casa;
    }
}

let horarioTable = () => {
    let miHorario = new horario('100 min', '100 min', '10 min', '240 min', '30 min');
    console.group('TAREAS');
    for (let i = 0; i < 14; i++) {
        if (i == 0) {
            console.group('Semana 1');
        } else if (i == 7) {
            console.groupEnd();
            console.group('Semana2');
        }
        console.groupCollapsed(`Día ${i + 1}`);
        console.table(miHorario);
        console.groupEnd();
    }
}

// horarioTable();

/* ---------- Ejercicio 6.1 ----------
Cofla se quedó encerrado en su casa porque se le rompió la llave, pero necesita ir urgente a la facultad si quiere aprobar el resto de materias que le faltan ya que no puede faltar ni una sola vez por estar al límite de las asistencias. Lo que se le ocurrió es llamar a un cerrajero y pedirle que traiga la llave indicada, el problema es que no hay tiempo para que el cerrajero vea las llaves a elegir, tiene que tomar una y salir. Sólo falta decirle el modelo de la llave para que el cerrajero la traiga y pueda solucionar su problema. Hay sólo 20 modelos posibles.
    -Crear un sistema que le muestre a Cofla los 20 modelos posibles de llaves con sus 4 imágenes y Cofla debe poder seleccionar cuál llave usar.
    - Una vez seleccionada, enviar los datos al servidor */