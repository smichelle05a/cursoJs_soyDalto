const Details = {
    name: 'Details',
    template: /* html */ `
    <div class="h100" v-if="Object.keys(movie).length">
        <div class="h-100 p-3 text-white"
            :style="{
                    'background': 'linear-gradient(rgba(59, 168, 119, 0.45), rgba(59, 168, 119, 1)), url(https://image.tmdb.org/t/p/original'+movie.backdrop_path+')',
                    'background-size': 'cover'}">
            <div class="container my-3 d-flex">
                <div class="col-12 col-md-3 mx-3">
                    <img :src="movie.poster_path | coverURL" alt="'movie.title'" class="w-100">
                </div>
                <div class="col-12 col-md-9 mx-3 d-flex flex-column justify-content-center align-items-center">
                    <h2>Detalles: {{movie.title}}</h2>
                    <p class="lead">{{movie.overview | formatOverview}}</p>
                </div>
            </div>
        </div>
        <div class="row my-3 col-10 mx-auto">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
            v-for="(movie, key) in similar"
            :key="key">
                <MovieComp
                :id ="movie.id"
                :title="movie.title"
                :cover="movie.poster_path"
                :synopsis="movie.overview"
                :like="movie.like"
                @toggleLike="onToggleLike"
                @movie="getMovie"
                />
            </div>
        </div>
        <MovieFav :show.sync="showFav"/>
    </div>
    `,
    components: {
        MovieComp,
        MovieFav
    },
    data() {
        return {
            movie: {},
            similar: [],
            showFav: false
        }
    },
    computed: {
        ...Vuex.mapState(['favMovies']),
    },
    methods: {
        similarMovies() {
            this.similar = [];
            fetch(`${this.apiBaseUrl}movie/${this.$route.params.id}/similar${this.apiConfig}`)
                .then(res => res.json())
                .then(({ results }) => {
                    let resultados = results.map(m => {
                        m.like = false;
                        return m
                    });
                    for (let i = 0; i <= 5; i++) {
                        this.similar.push(resultados[i])
                    };
                })
        },
        getMovie() {
            fetch(`${this.apiBaseUrl}movie/${this.$route.params.id}${this.apiConfig}`)
                .then(res => res.json())
                .then(data => {
                    this.movie = data;
                });
            this.similarMovies();
        },
        onToggleLike(data) {
            let movieLike = this.similar.find(movie => movie.id == data.id);
            movieLike.like = data.like;
            this.toggleFavMovie(movieLike);
            this.showFav = data.like
        },
        ...Vuex.mapMutations(['toggleFavMovie'])
    },
    filters: {
        formatOverview(value) {
            let text = "";
            value ? text = value : text = 'No hay información de la película'
            return text
        }
    },
    mounted() {
        this.getMovie()
    }
}