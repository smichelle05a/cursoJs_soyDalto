/* ---------- Ejercicio 2.2 ----------
Cofla vuelve de la comisaría exhausto a dormir ya que al día siguiente comienza el ciclo básico de la universidad. En su curso son 19 alumnos en total, pero se rompió el registro de asistencias y durante los próximos 30 días no se podrán hacer registros y las clases no podrán iniciar hasta que esto no esté solucionado.
    -Crear un sistema que nos permita registrar los alumnos presentes (P) y ausentes (A)
    -Pasados los 30 días, mostrar la situación final de todos los alumnos (total de presentes y de ausentes).
    -Como condición, se puede tener un máximo de 10% de ausencias por semestre, si se tienen más, aclarar que está reprobado.*/

// let cantidad = prompt(`Cuántos alumnos son?`);
// let alumnosTotales = [];

// for (let i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt(`Nombre del alumno ${i+1}`), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == 'p') {
//         alumnosTotales[p][1]++
//     }
// }

// for (let i = 0; i < 30; i++) {
//     for (let alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (let alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     __________Asistencias: ${alumnosTotales[alumno][1]} <br>
//     __________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
//     if ((30 - alumnosTotales[alumno][1]) > 18) {
//         resultado += `<b style='color:red'> REPROBADO POR INASISTENCIA</b><br><br>`;
//     } else {
//         resultado += '<br><br>';
//     }
//     document.write(resultado)
// }

/* ---------- Ejercicio 4.2 ----------
La facultad de Cofla está por arrancar nuevamente, y las 12 materias ya tienen asignado un profesor y los alumnos anotados en dichas clases.
    -Crear una función que al pasarle como parámetro la materia, devuelva el profesor asignado y los nombres de los alumnos
    -Crear otra función que nos diga en cuántas clases está Cofla
    -Nombrar las clases en las que está Cofla y sus profesores asignados*/

let materias = {
    ingles: {
        nombreClase: "Inglés Técnico",
        profesor: "María Teresa Huergo",
        alumnos: [{ "alumno": "Tarik", "presentes": 103, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Clare", "presentes": 37, "promedio": 5, "trabajosPracticos": 2 },
        { "alumno": "Abdul", "presentes": 96, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Brennan", "presentes": 104, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Aubrey", "presentes": 108, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Camden", "presentes": 95, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Ronan", "presentes": 110, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Blaze", "presentes": 99, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Scarlett", "presentes": 105, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Noble", "presentes": 120, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Nehru", "presentes": 28, "promedio": 6, "trabajosPracticos": 1 },
        { "alumno": "Perry", "presentes": 117, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Ezekiel", "presentes": 101, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Keely", "presentes": 118, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Nicole", "presentes": 92, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Cofla", "presentes": 113, "promedio": 10, "trabajosPracticos": 4 }]
    },
    arquitectura: {
        nombreClase: "Arquitectura de Computadoras",
        profesor: "Leandro E. Colombo Viña",
        alumnos: [{ "alumno": "Mallory", "presentes": 113, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Chaney", "presentes": 95, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Darryl", "presentes": 95, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Conan", "presentes": 104, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Scott", "presentes": 111, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Brody", "presentes": 93, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Francis", "presentes": 5, "promedio": 4, "trabajosPracticos": 2 },
        { "alumno": "Macon", "presentes": 96, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Glenna", "presentes": 107, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Harper", "presentes": 103, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Beau", "presentes": 99, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Keegan", "presentes": 117, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Allen", "presentes": 113, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Salvador", "presentes": 106, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Maile", "presentes": 2, "promedio": 2, "trabajosPracticos": 1 },
        { "alumno": "Andrew", "presentes": 118, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Ginger", "presentes": 110, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Cofla", "presentes": 105, "promedio": 8, "trabajosPracticos": 3 }]
    },
    contabilidad: {
        nombreClase: "Contabilidad Básica y de Costos",
        profesor: "Nelson Gutierrez",
        alumnos: [{ "alumno": "Jada", "presentes": 91, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Sean", "presentes": 111, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Bell", "presentes": 95, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Rigel", "presentes": 97, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Phyllis", "presentes": 115, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Magee", "presentes": 104, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Neville", "presentes": 116, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Xyla", "presentes": 93, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Megan", "presentes": 107, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Cheryl", "presentes": 108, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Eugenia", "presentes": 50, "promedio": 4, "trabajosPracticos": 1 },
        { "alumno": "Cofla", "presentes": 102, "promedio": 8, "trabajosPracticos": 3 }]
    },
    diagramacion: {
        nombreClase: "Diagramación Lógica",
        profesor: "Leandro E. Colombo Viña",
        alumnos: [{ "alumno": "Ariel", "presentes": 93, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Ulysses", "presentes": 115, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Charlotte", "presentes": 96, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Kitra", "presentes": 118, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Tarik", "presentes": 102, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Blossom", "presentes": 103, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Rigel", "presentes": 94, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Castor", "presentes": 14, "promedio": 1, "trabajosPracticos": 1 },
        { "alumno": "Minerva", "presentes": 117, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Whilemina", "presentes": 94, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Athena", "presentes": 95, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Tamekah", "presentes": 120, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Jaime", "presentes": 118, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Larissa", "presentes": 99, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Cofla", "presentes": 27, "promedio": 3, "trabajosPracticos": 1 }]
    },
    TICs: {
        nombreClase: "Introducción al Estudio de las T.I.C.s",
        profesor: "Daniel Pascualino",
        alumnos: [{ "alumno": "Rae", "presentes": 27, "promedio": 3, "trabajosPracticos": 1 },
        { "alumno": "Fredericka", "presentes": 95, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Elaine", "presentes": 97, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Steel", "presentes": 90, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Rahim", "presentes": 103, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Ferdinand", "presentes": 115, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Oscar", "presentes": 103, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Kieran", "presentes": 112, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Fredericka", "presentes": 95, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Illana", "presentes": 109, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Daria", "presentes": 56, "promedio": 3, "trabajosPracticos": 2 },
        { "alumno": "Lenore", "presentes": 95, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Germaine", "presentes": 93, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Cade", "presentes": 109, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Graham", "presentes": 107, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Garrison", "presentes": 120, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Mufutau", "presentes": 97, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Petra", "presentes": 103, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Christine", "presentes": 113, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Inez", "presentes": 120, "promedio": 9, "trabajosPracticos": 4 }]
    },
    logica: {
        nombreClase: "Lógica Computacional",
        profesor: "Alejandro C. Piehl",
        alumnos: [{ "alumno": "Amethyst", "presentes": 110, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Solomon", "presentes": 35, "promedio": 2, "trabajosPracticos": 1 },
        { "alumno": "Jaden", "presentes": 97, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Kaye", "presentes": 91, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Kirby", "presentes": 94, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Tad", "presentes": 100, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Geoffrey", "presentes": 97, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Nora", "presentes": 114, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Angela", "presentes": 18, "promedio": 6, "trabajosPracticos": 2 },
        { "alumno": "Cofla", "presentes": 116, "promedio": 8, "trabajosPracticos": 4 }]
    },
    algebra: {
        nombreClase: "Álgebra Lineal",
        profesor: "Alejandro C. Piehl",
        alumnos: [{ "alumno": "Tamekah", "presentes": 95, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Caldwell", "presentes": 106, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Amy", "presentes": 119, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Emerald", "presentes": 117, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Thor", "presentes": 115, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Zeph", "presentes": 91, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Geoffrey", "presentes": 38, "promedio": 3, "trabajosPracticos": 1 },
        { "alumno": "Thor", "presentes": 99, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Carol", "presentes": 91, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Alika", "presentes": 100, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Mercedes", "presentes": 99, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Kimberley", "presentes": 108, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "April", "presentes": 113, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Rachel", "presentes": 120, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Tarik", "presentes": 103, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Clare", "presentes": 120, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Abdul", "presentes": 101, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Brennan", "presentes": 101, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Aubrey", "presentes": 76, "promedio": 5, "trabajosPracticos": 1 },
        { "alumno": "Camden", "presentes": 102, "promedio": 7, "trabajosPracticos": 4 }]
    },
    datos: {
        nombreClase: "Estructura de Datos",
        profesor: "Leandro E. Colombo Viña",
        alumnos: [{ "alumno": "Ronan", "presentes": 110, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Blaze", "presentes": 108, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Scarlett", "presentes": 117, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Noble", "presentes": 117, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Nehru", "presentes": 106, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Perry", "presentes": 105, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Ezekiel", "presentes": 101, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Keely", "presentes": 104, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Nicole", "presentes": 106, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Mallory", "presentes": 113, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Chaney", "presentes": 71, "promedio": 2, "trabajosPracticos": 2 },
        { "alumno": "Darryl", "presentes": 103, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Conan", "presentes": 60, "promedio": 5, "trabajosPracticos": 1 },
        { "alumno": "Scott", "presentes": 94, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Brody", "presentes": 93, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Francis", "presentes": 111, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Cofla", "presentes": 109, "promedio": 7, "trabajosPracticos": 4 }]
    },
    organizacion: {
        nombreClase: "Estructura de la Organización",
        profesor: "Juan M. Cottini",
        alumnos: [{ "alumno": "Macon", "presentes": 104, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Glenna", "presentes": 100, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Harper", "presentes": 103, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Beau", "presentes": 91, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Keegan", "presentes": 106, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Allen", "presentes": 119, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Salvador", "presentes": 97, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Maile", "presentes": 2, "promedio": 2, "trabajosPracticos": 1 },
        { "alumno": "Andrew", "presentes": 95, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Ginger", "presentes": 118, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Jada", "presentes": 117, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Cofla", "presentes": 103, "promedio": 10, "trabajosPracticos": 3 }]
    },
    paradigma: {
        nombreClase: "Paradigmas de Programación",
        profesor: "Leandro E. Colombo Viña",
        alumnos: [{ "alumno": "Sean", "presentes": 94, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Bell", "presentes": 95, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Rigel", "presentes": 90, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Phyllis", "presentes": 113, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Magee", "presentes": 105, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Neville", "presentes": 96, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Xyla", "presentes": 105, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Megan", "presentes": 107, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Cheryl", "presentes": 105, "promedio": 9, "trabajosPracticos": 4 },
        { "alumno": "Eugenia", "presentes": 119, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Ariel", "presentes": 111, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Ulysses", "presentes": 120, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Charlotte", "presentes": 86, "promedio": 4, "trabajosPracticos": 1 },
        { "alumno": "Kitra", "presentes": 108, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Tarik", "presentes": 96, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Blossom", "presentes": 104, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Rigel", "presentes": 92, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Castor", "presentes": 113, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Minerva", "presentes": 117, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Whilemina", "presentes": 39, "promedio": 5, "trabajosPracticos": 2 }]
    },
    practica: {
        nombreClase: "Práctica Profesional 1 (Observación)",
        profesor: "Daniel Pascualino",
        alumnos: [{ "alumno": "Athena", "presentes": 67, "promedio": 4, "trabajosPracticos": 2 },
        { "alumno": "Tamekah", "presentes": 120, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Jaime", "presentes": 92, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Larissa", "presentes": 99, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Cofla", "presentes": 27, "promedio": 3, "trabajosPracticos": 1 }]
    },
    analisis: {
        nombreClase: "Análisis de Sistemas",
        profesor: "Ignacio Ochoa",
        alumnos: [{ "alumno": "Rae", "presentes": 27, "promedio": 3, "trabajosPracticos": 1 },
        { "alumno": "Fredericka", "presentes": 91, "promedio": 10, "trabajosPracticos": 3 },
        { "alumno": "Elaine", "presentes": 111, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Steel", "presentes": 100, "promedio": 8, "trabajosPracticos": 4 },
        { "alumno": "Rahim", "presentes": 119, "promedio": 9, "trabajosPracticos": 3 },
        { "alumno": "Ferdinand", "presentes": 71, "promedio": 2, "trabajosPracticos": 2 },
        { "alumno": "Oscar", "presentes": 96, "promedio": 7, "trabajosPracticos": 3 },
        { "alumno": "Kieran", "presentes": 112, "promedio": 8, "trabajosPracticos": 3 },
        { "alumno": "Fredericka", "presentes": 97, "promedio": 10, "trabajosPracticos": 4 },
        { "alumno": "Illana", "presentes": 109, "promedio": 7, "trabajosPracticos": 4 },
        { "alumno": "Cofla", "presentes": 102, "promedio": 9, "trabajosPracticos": 4 }]
    },
}

const getInfo = (materia) => {
    materia = prompt('Qué materia buscas?');
    if (materias[materia] !== undefined) {
        let listaAlumnos='';
        for (let i in materias[materia]['alumnos']) {
            listaAlumnos += `-${materias[materia]['alumnos'][i]['alumno']}<br>`
        }
        return document.write(`<br><b>Materia: </b>${materias[materia]['nombreClase']}<br>
        <b>Profesor: </b>${materias[materia]['profesor']}<br>
        <b>Alumnos: ${materias[materia]['alumnos'].length}</b><br>${listaAlumnos}<br>`);
    }
}

// getInfo();

const getAlumno = (alumno) => {
    alumno = prompt('¿Qué alumno buscas?');
    let clases = [];
    let cant = 0;
    for (let mat in materias) {
        for (let i in materias[mat]['alumnos']) {
            if (materias[mat]['alumnos'][i]['alumno'].includes(alumno)){
                cant++;
                clases.push(`<br>${materias[mat]['nombreClase']}`)}
        }
    }
    return document.write(`<br><b>Alumno:</b> ${alumno}<br><br>
    <b>Clases: ${cant}</b> ${clases}`);
}

// getAlumno();

/* ---------- Ejercicio 4.3 ----------
Cofla ya vió las 12 materias y ya sabe en cuáles va a inscribirse, pero se rompió el sistema de inscripciones.
    -Crear una función para preguntarle a Cofla en qué materia se quiere inscribir
    -Si ya hay 20 alumnos, negarle la inscripción
    -Si hay menos de 20 alumnos, inscribir a Cofla y añadirlo a la lista de alumnos*/

const verificarClase = (inscripcion) => {
    inscripcion = prompt('En qué materia te querés inscribir?');
    while (materias[inscripcion]['alumnos'].length >= 20) {
        alert('La clase está llena, no te podés inscribir');
        inscripcion = prompt('En qué materia te querés inscribir?');
        if (materias[inscripcion]['alumnos'].length < 20) {
            return inscripcion;
        }
    }
}

const inscribir = (clase, nombreAlumno) => {
    clase = verificarClase();
    nombreAlumno = prompt('¿Cómo te llamas?');
    materias[clase]['alumnos'].push({"alumno": `${nombreAlumno}`, "presentes": 0, "promedio": 0, "trabajosPracticos": 0})
    alert(`¡Felicitaciones ${nombreAlumno}, ya estás inscrito en ${materias[clase]['nombreClase']}!`);
    getInfo(clase);
}

// inscribir();

/* ---------- Ejercicio 5.1 ----------
Ya terminó el primer semestre y Cofla está muy ansioso ya que no sabe si va a aprobar las materias o no, lo único que sabe es que necesita al menos el 90% de asistencias, el promedio por materia debe ser de al menos 7/10 y debe tener al menos el 75% de los trabajos prácticos entregados
    -Solicitar los datos y decirle si aprueba o reprueba
    -Mostrar todo con colores representativos en consola*/

const aprueba = (materia, alumno) => {
    materia = prompt('¿Qué materia querés ver?');
    alumno = prompt('¿Qué alumno querés ver?');
    if (materias[materia] !== undefined) {
        let nombreMateria = materias[materia]['nombreClase'];
        let asistencia = 0;
        let promedioClase = 0;
        let entregaTrabajos = 0;
        for (let i in materias[materia]['alumnos']) {
            if (materias[materia]['alumnos'][i]['alumno'] == alumno) {
                asistencia = materias[materia]['alumnos'][i]['presentes'];
                promedioClase = materias[materia]['alumnos'][i]['promedio'];
                entregaTrabajos = materias[materia]['alumnos'][i]['trabajosPracticos'];
                console.log(`Materia: ${nombreMateria}`)
                if (asistencia >= 90 && promedioClase >= 7 && entregaTrabajos >= 3) {
                    console.log('Estatus: %c APROBADO', 'color:green');
                } else {
                    console.log('Estatus: %c REPROBADO', 'color:red');
                }
                if (asistencia >= 90) {
                    console.log(`Asistencia: ${asistencia} %c OK`, 'color:green');
                } else {
                    console.log(`Asistencia: ${asistencia} %c Falta de Asistencia`, 'color:red');
                }
                if (promedioClase >= 7) {
                    console.log(`Promedio: ${promedioClase} %c OK`, 'color:green')
                } else {
                    console.log(`Promedio: ${promedioClase} %c Desaprobado`, 'color:red')
                }
                if (entregaTrabajos >= 3) {
                    console.log(`Trabajos Prácticos: ${entregaTrabajos} %c OK`, 'color:green');
                } else {
                    console.log(`Trabajos Prácticos: ${entregaTrabajos} %c Menor al 75%`, 'color:red');
                }
            }
        }
    }
}

// aprueba();

