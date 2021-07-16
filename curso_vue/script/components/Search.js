const Search = {
    name: 'Search',
    template: //html
        `
        <div class="container-fluid p-3">
            <div class="my-3">
                <h2>Resultados</h2>
                <hr>
                <div class="row container mx-auto">
                    <div class="col-12 col-sm-6 col-xl-3 mb-3"
                    v-for="(movie, key) in movies"
                    :key="key">
                        <MovieComp
                        :id ="movie.id"
                        :title="movie.title"
                        :cover="movie.poster_path"
                        :synopsis="movie.overview"
                        :like="movie.like"
                        @toggleLike="onToggleLike"
                        />
                    </div>
                </div>
            </div>
            <MovieFav :show.sync="showFav"/>
            <Pagination
                :totalPages = "total_pages"
                :activePage.sync = "page"
                @changePage = "onChangePage"
                />
        </div>
        `,
    components: {
        MovieComp,
        MovieFav,
        Pagination
    },
    data() {
        return {
            showFav: false
        }
    },
    methods: {
        onToggleLike(data) {
            let movieLike = store.state.movies.find(movie => movie.id == data.id);
            movieLike.like = data.like;
            this.toggleFavMovie(movieLike);
            this.showFav = data.like
        },
        onChangePage(page) {
            store.commit('changePage', page);
        },
        ...Vuex.mapMutations(['toggleFavMovie'])
    },
    computed: {
        ...Vuex.mapState(['favMovies', 'movies', 'page', 'total_pages'])
    }
}