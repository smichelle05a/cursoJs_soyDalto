Vue.component('vue-pelis', {
    template: /* html */ `
    <div class="container my-3">
        <h3>Películas</h3>
        <hr>
        <PelisProps/>
    </div>
    `,
    data() {
        return{}
    },
    components: {
        PelisFavoritas,
        PelisProps
    }
})