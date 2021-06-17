Vue.component('saludar-comp', {
    template: /* html */`
    <div @click="ups" class="container my-3">
        <h2> {{ titulo }} </h2>
        <button class="btn btn-outline-dark" id="btnSaludar" @click.stop="saludar">Saludar</button>
    </div>`,
    data() {
        return {
            titulo: 'Saludo para ti',
            nombre: 'Scarlet',
            pais: 'Argentina',
            clickAfuera: 'No diste click al botón'
        }
    },
    methods: {
        ups: function () {
            alert(this.clickAfuera);
        },
        saludar: function () {
            alert(`Hola, mi nombre es ${ this.nombre } y soy de ${this.pais}`)
        }
    }
})