let PelisProps = {
    template: /* html */`
    <div class="container my-3">
        <h5> Bienvenid@ {{ user}} </h5>
        <h2>Películas Props</h2>
        <hr>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="(movie, key) in movies"
            :key="key">
                <MovieComp
                :id="movie.id"
                :title="movie.title"
                :cover="movie.cover"
                :synopsis="movie.synopsis"
                :like="movie.like"
                @toggleLike="onToggleLike"
                />
            </div>
            <hr>
        </div>
        <div class="mb-3">
            <label for="userName" class="form-label">Cambiar nombre de Usuario</label>
            <input type="text" class="form-control" id="userName" v-model="user">
        </div>
        <MovieFav ref="movieFav" :show.sync="showFav"/>
    </div>`,
    data() {
        return {
            user: 'Scarlet Albornoz',
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir...',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: `Un remake del clásico animado de Disney de 1994 'El rey león' que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa...`,
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    // synopsis: 'Los juguetes de Andy, un niño de 6 años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero...',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
                    like: false
                }
            ],
            showFav: false
        }
    },
    components: {
        MovieComp,
        MovieFav
    },
    methods: {
        onToggleLike(data) {
            let movieLike = this.movies.find(movie => movie.id == data.id);
            movieLike.like = data.like;
        },
    },
}