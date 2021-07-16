const Favorites = {
    name: 'Favorites',
    template: //html
        `
        <div class="container-fluid p-3">
            <div class="my-3">
                <h2>Películas Favoritas</h2>
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
            page: 1,
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
        onChangePage(page) {
            this.page = page;
            this.movies(page)
        },
        ...Vuex.mapMutations(['toggleFavMovie'])
    },
    computed: {
        fullName() {
            return `${store.state.username.name} ${store.state.username.lastName}`
        },
        favPages() {
            let movies = [];
            let limit = 4;
            for (let i = 0; i < store.state.favMovies.length; i += limit) {
                movies.push(store.state.favMovies.slice(i, i + limit));
            };
            let pages = movies.length;
            return { movies, pages }
        },
        total_pages() {
            return this.favPages.pages
        },
        movies() {
            i = this.page-1
            return this.favPages.movies[i]
        },
    },
    mounted() {
        this.favPages;
        this.total_pages;
        this.movies;
    }
}