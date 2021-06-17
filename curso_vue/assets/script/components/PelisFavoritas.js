let PelisFavoritas = {
    template: /* html */`
    <div class="container my-3">
        <label v-for="(movie, key) in movies" :key="key" class="col-2">
            <input :value="movie" type="checkbox" v-model="favoriteMovies"/>
            {{movie}}
        </label>
        <div class="container my-3" v-show="favoriteMovies.length > 0">
            <h3>Películas Favoritas</h3>
            <hr>
            <ul>
                <li v-for="(m, key) in favoriteMovies" :key="key">{{m}}</li>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            checked: false,
            movies: ['Buscando a Nemo', 'Titanic', 'Toy Story'],
            favoriteMovies: []
        }
    }
}