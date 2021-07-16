let store = new Vuex.Store({
    state: {
        user: {
            name: 'Scarlet',
            lastName: 'Albornoz',
            username: 'username123',
            email: 'you@mail.com'
        },
        favMovies: [],
        query: '',
        movies: [],
        page: 1,
        total_pages: null,
        apiBaseUrl: BASEURL,
        apiConfig: `?api_key=${APIKEY}&language=es-MX`
    },
    mutations: {
        toggleFavMovie(state, movie) {
            let index = state.favMovies.findIndex(favMovie => favMovie.id == movie.id);
            if (index >= 0) {
                state.favMovies.splice(index, 1)
                return
            } else state.favMovies.push(movie)
        },
        updateUser(state, value) {
            state.user = value
        },
        search(state) {
            let URL = `${state.apiBaseUrl}search/movie${state.apiConfig}&query="${state.query}&page=${state.page}`;
            fetch(URL)
                .then(res => res.json())
                .then(({ results, total_pages }) => {
                    state.total_pages = total_pages;
                    state.movies = results.map(m => {
                        m.like = false;
                        return m
                    });
                    router.push({name:'search'})
                })
        },
        changePage(state, page) {
            state.page = page;
        },
        reset(state) {
            state.query = '';
            state.page = 1;
            state.total_pages = null;
            state.movies = []
        },
        updateQuery(state, value) {
            state.query = value
        }
    }
})

