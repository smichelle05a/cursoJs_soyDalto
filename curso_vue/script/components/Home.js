const Home = {
    name: 'Home',
    template: //html
        `
        <div class="container p-3">
            <h5 class="my-3"> Bienvenid@ {{ fullName }}</h5>
            <div class="container my-3">
                <h2 class="text-center">Películas Populares</h2>
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
            movies: [],
            page: 1,
            total_pages: null,
            showFav: false
        }
    },
    methods: {
        onToggleLike(data) {
            let movieLike = this.movies.find(movie => movie.id == data.id);
            movieLike.like = data.like;
            this.toggleFavMovie(movieLike);
            this.showFav = data.like
        },
        getPopularMovies() {
            const URL = `${this.apiBaseUrl}discover/movie${this.apiConfig}&sort_by=popularity.desc&page=${this.page}`;
            fetch(URL)
                .then(res => res.json())
                .then(({ results, total_pages }) => {
                    this.total_pages = total_pages;
                    this.movies = results.map(m => {
                        m.like = false;
                        return m
                    });
                });
        },
        onChangePage(page) {
            this.page = page;
            this.getPopularMovies()
        },
        ...Vuex.mapMutations(['toggleFavMovie'])
    },
    computed: {
        fullName() {
            return `${store.state.user.name} ${store.state.user.lastName}`
        },
        ...Vuex.mapState(['favMovies']),
    },
    mounted() {
        let locationURL = new URL(window.location.href);
        this.page = locationURL.searchParams.get('page') || 1;
        this.getPopularMovies();
    }
}