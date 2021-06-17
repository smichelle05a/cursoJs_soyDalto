/* Los datos de Cofla y del resto de los alumnos ya fueron almacenados correctamente. Ahora tenemos que crear un sistema que le permita a los profesores visualizar la información y definir cuándo van a rendir los alumnos.
    -La interfaz debe ser agradable y atractiva
    -Debe contener los datos de manera estructurada
    -El profesor debe poder elegir en cuál de las 2 semanas rinde el usuario
    -Deben actualizar y reemplazar el espacio de selección de semana por la semana seleccionada*/

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

let htmlCode = '';

for (let mat in materias) {
    for (let i in materias[mat]['alumnos']) {
        let materia = materias[mat]['nombreClase']
        let alumno = materias[mat]['alumnos'][i]['alumno']
        let asistencia = materias[mat]['alumnos'][i]['presentes'];
        let promedioClase = materias[mat]['alumnos'][i]['promedio'];
        let entregaTrabajos = materias[mat]['alumnos'][i]['trabajosPracticos'];
        if (asistencia >= 90 && promedioClase >= 7 && entregaTrabajos >= 3) {
            continue
        } else {
            htmlCode += `<tr>
                    <td class="nombre">${alumno}</td>
                    <td class="mail">${alumno.toLowerCase()}@gmail.com</td>
                    <td class="materia">${materia}</td>
                    <td class="asistencia">${asistencia}</td>
                    <td class="promedioClase">${promedioClase}</td>
                    <td class="entregaTrabajos">${entregaTrabajos}</td>
                    <td class="semana">
                        <select class="semana-elegida">
                            <option value="Semana 1">Semana 1</option>
                            <option value="Semana 2">Semana 2</option>
                        </select>
                    </td>
                </tr>`
        }
    }
}

document.querySelector('.alumni').innerHTML = htmlCode;

const btnConfirmar = document.querySelector('.btn-confirmar');

btnConfirmar.addEventListener('click', () => {
    let confirmar = confirm('¿Quieres confirmar las mesas?');
    if (confirmar) {
        document.querySelector('.confirmacion').removeChild(btnConfirmar)
        let elementos = document.querySelectorAll('.semana');
        let semanasElegidas = document.querySelectorAll('.semana-elegida');
        for (let elemento in elementos) {
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})