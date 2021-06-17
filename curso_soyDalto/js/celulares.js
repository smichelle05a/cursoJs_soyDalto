/* ---------- Ejercicio 3.1 ----------
Cofla entró a una tienda que vende celulares porque le pareció bueno comprarse un celular, de todos los modelos disponibles, le llamaron la atención 3 modelos específicamente. Antes de comprarlos quiere ver las cualidades y comportamientos de cada uno.
    -Crear un sistema para mostrar las particularidades de los 3 celulares
    -Cada uno debe tener color, peso, resolución de pantalla, cámara y memoria ram
    -Deben poder prender, reiniciar, tomar fotos y grabar*/

class celular {
    constructor(marca, modelo, color, peso, resolucion, camara, ram) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    
    btnEncendido() {
        if (this.encendido == false) {
            alert(`${this.marca} ${this.modelo} se encendió`);
            this.encendido = true;
        } else {
            alert(`${this.marca} ${this.modelo} se apagó`);
            this.encendido = false;
        }
    }
    
    reiniciar() {
        if (this.encendido == true) {
            alert(`Reiniciando ${this.marca} ${this.modelo}...`);
        } else {
            alert(`No se puede reiniciar ${this.marca} ${this.modelo}, el celular está apagado`)
        }
    }
    
    tomarFoto() {
        if (this.encendido == true) {
            alert(`Se tomó una foto con ${this.marca} ${this.modelo}`)
        } else {
            alert(`No se puede tomar la foto con ${this.marca} ${this.modelo}, el celular está apagado`)
        }
    }

    grabarVideo() {
        if (this.encendido == true) {
            alert(`Grabando con ${this.marca} ${this.modelo}...`)
        } else {
            alert(`No se puede grabar con ${this.marca} ${this.modelo}, el celular está apagado`)
        }
    }
    info() {
        return document.write(`<br>
            <b>Marca</b>: ${this.marca} <br>
            <b>Modelo</b>: ${this.modelo} <br>
            <b>Color</b>: ${this.color} <br>
            <b>Peso</b>: ${this.peso}gr <br>
            <b>Resolución</b>: ${this.resolucion} pixels <br>
            <b>Cámara Principal</b>: ${this.camara} MP <br>
            <b>RAM</b>: ${this.ram} GB <br>`)
    }
}

const iphoneSE = new celular('Apple', 'Iphone', 'Black', 148, '750 x 1334', 12, 3);

const motoE6Play = new celular('Motorola', 'Moto E6 Play', 'Turquoise Blue', 140, '720 x 1440', 13, 2);

const redmi9AT = new celular('Xiaomi', 'Redmi 9AT', 'Carbon Gray', 194, '720 x 1600', 13, 2);

iphoneSE.btnEncendido();
iphoneSE.tomarFoto();
iphoneSE.grabarVideo();
iphoneSE.reiniciar();
iphoneSE.btnEncendido();
iphoneSE.reiniciar();
iphoneSE.tomarFoto();
iphoneSE.grabarVideo();
iphoneSE.info();

motoE6Play.btnEncendido();
motoE6Play.tomarFoto();
motoE6Play.grabarVideo();
motoE6Play.reiniciar();
motoE6Play.btnEncendido();
motoE6Play.reiniciar();
motoE6Play.tomarFoto();
motoE6Play.grabarVideo();
motoE6Play.info();

redmi9AT.btnEncendido();
redmi9AT.tomarFoto();
redmi9AT.grabarVideo();
redmi9AT.reiniciar();
redmi9AT.btnEncendido();
redmi9AT.reiniciar();
redmi9AT.tomarFoto();
redmi9AT.grabarVideo();
redmi9AT.info();

/* ---------- Ejercicio 3.2 ----------
Cofla no está satisfecho con la sección anterior así que decide ir a la sección de celulares de alta gama. Al entrar vio 2 celulares que le parecieron fabulosos, estos pueden hacer todo lo que podían hacer los anteriores pero además pueden grabar en cámara lenta, tienen reconocimiento facial y cuentan con una cámara extra.
    -Implementar todas estas cualidades pero ahora en los celulares de alta gama.*/

class altaGama extends celular {
    constructor(marca, modelo, color, peso, resolucion, camara, ram, camara2) {
        super(marca, modelo, color, peso, resolucion, camara, ram);
        this.camara2 = camara2;
    }
    
    grabarLento() {
        if (this.encendido == true) {
            alert(`Grabando lento con ${this.marca} ${this.modelo}...`)
        } else {
            alert(`No se puede grabar con ${this.marca} ${this.modelo}, el celular está apagado`)
        }
    }

    reconFacial() {
        if (this.encendido == true) {
            alert(`${this.marca} ${this.modelo} está haciendo un reconocimiento facial`)
        } else {
            alert(`No se puede hacer el reconocimiento facial con ${this.marca} ${this.modelo}, el celular está apagado`)
        }
    }

    infoAltaGama() {
        return this.info() + document.write(`<b>Resolución de Cámara Secundaria:</b> ${this.camara2} MP<br>`)
    }
}

const iphone12 = new altaGama('Apple', 'Iphone 12', 'White', 164, '1170 x 2532', 12, 4, 12);

const motoE7Power = new altaGama('Motorola', 'Moto E7 Power', 'Coral Red', 200, '720 x 1600', 13, 4, 2);

const redmi8APro = new altaGama('Xiaomi', 'Redmi 8A Pro', 'Sea Blue', 188, '720 x 1520', 13, 3, 2);

iphone12.btnEncendido();
iphone12.tomarFoto();
iphone12.grabarVideo();
iphone12.reiniciar();
iphone12.btnEncendido();
iphone12.reiniciar();
iphone12.tomarFoto();
iphone12.grabarVideo();
iphone12.grabarLento();
iphone12.reconFacial();
iphone12.infoAltaGama();

motoE7Power.btnEncendido();
motoE7Power.tomarFoto();
motoE7Power.grabarVideo();
motoE7Power.reiniciar();
motoE7Power.btnEncendido();
motoE7Power.reiniciar();
motoE7Power.tomarFoto();
motoE7Power.grabarVideo();
motoE7Power.grabarLento();
motoE7Power.reconFacial();
motoE7Power.infoAltaGama();

redmi8APro.btnEncendido();
redmi8APro.tomarFoto();
redmi8APro.grabarVideo();
redmi8APro.reiniciar();
redmi8APro.btnEncendido();
redmi8APro.reiniciar();
redmi8APro.tomarFoto();
redmi8APro.grabarVideo();
redmi8APro.grabarLento();
redmi8APro.reconFacial();
redmi8APro.infoAltaGama();


/* ---------- Ejercicio 3.3 ----------
Cofla ya tiene su celular nuevo y ahora está mirando las aplicaciones, ya que quiere jugar unos juegos que son muy populares, pero sabe que las 7 apps que llamaron su atención son un tanto similares, así que quiere descargar sólamente 2, y necesita decidir qué aplicaciones descargar.
    -Crear un sistema para decidir qué app descargar
    -Debe contener la cantidad de descargas, puntuación y peso
    -Deben poder instalar, abrir, cerrar y desinstalar*/

class app {
    constructor(nombre, descargas, puntuacion, peso) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.abierto = false;
    }
    
    install() {
        if (this.instalado == false) {
            alert(`${this.nombre} se ha instalado correctamente`);
            this.instalado = true;
        } else {
            let rta = prompt(`Desea desinstalar ${this.nombre}? S = Si N = No`);
            if (rta == 'S' || rta == 's') {
                alert(`${this.nombre} se ha desinstalado correctamente`);
                this.instalado = false;
            } else {
                alert(`${this.nombre} no se desinstaló`);
            }
        }
    }

    open() {
        if (this.abierto == false && this.instalado == true) {
            alert(`Cargando ${this.nombre}...`);
            this.abierto = true;
        } else if (this.abierto == false && this.instalado == false) {
            alert(`${this.nombre} no está instalada, debe instalar primero para poder abrir`);
        } else {
            alert(`Cerrando ${this.nombre}...`);
            this.open = false;
        }
    }

    info() {
        return document.write(`<br><b>Nombre:</b> ${this.nombre}<br>
        <b>Descargas:</b> ${this.descargas}<br>
        <b>Puntuación:</b> ${this.puntuacion}<br>
        <b>Peso:</b> ${this.peso}<br>`)
    }
}

const amongUs = new app('Among Us', '100M+', '3.9', '93.41 MB');
const marioKartTour = new app('Mario Kart Tour', '50M+', '4.1', '139 MB');
const pokemonGo = new app('Pokémon Go', '100M+', '4.1', '104 MB');
const callOfDuty = new app('Call of Duty Mobile', '100M+', '4.5', '91 MB');
const PUBG = new app('PUBG Mobile', '100M+', '4.2', '657 MB');
const theSims = new app('The Sims Mobile', '50M+', '4.2', '115 MB');
const candyCrush = new app('Candy Crush Saga', '1B+', '4.6', '73 MB');

amongUs.open();
amongUs.install();
amongUs.open();
amongUs.open();
amongUs.install();
amongUs.install();

amongUs.info();
marioKartTour.info();
pokemonGo.info();
callOfDuty.info();
PUBG.info();
theSims.info();
candyCrush.info();
