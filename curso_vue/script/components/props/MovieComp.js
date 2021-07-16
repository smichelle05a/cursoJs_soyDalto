const MovieComp = {
    template: /* html */ `
    <div :id="id | formatId" class="card h-100" :class="{'border-danger': isFav}">
        <img :src="cover | coverURL" class="card-img-top" alt="cover-img">
        <div class="card-body d-flex flex-column justify-content-end text-center">
            <h5 class="card-title"> {{title | uppercase}} </h5>
            <p class="card-text"> {{synopsis | shorten}} </p>
            <div class="row d-flex">
                <button
                @click="movie"
                class="btn btn-sm mx-1 btn-outline-dark col"
                v-show="synopsis"
                >
                    <span>Detalle</span>
                </button>
                <button @click="toggleLike" class="btn btn-sm mx-1 col" :class="{
                'btn-outline-danger': isFav,
                'btn-outline-dark': !isFav
                }">
                    <i class="fa-heart" :class="{
                        'fas': isFav,
                        'far': !isFav
                    }"></i>
                    <span v-text="isFav ? 'Favorita' : 'Agregar'"></span>
                </button>
            </div>
        </div>
    </div>
    `,
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'No posee sinopsis.'
        },
        cover: {
            required: true,
        },
        like: {
            type: Boolean,
            required: true,
            default() {
                return false
            }
        }
    },
    filters: {
        formatId(value) {
            return `movieCard-${value}`
        },
        uppercase(value) {
            return value.toUpperCase()
        },
        shorten(value) {
            let text = "";
            if (value) text = `${value.slice(0, 100)}...`
            else text = 'No hay información de la película'
            return text
        }
    },
    computed: {
        isFav() {
            let favMovies = this.$store.state.favMovies;
            let index = favMovies.findIndex(movie => movie.id === this.id);
            return index >= 0
        }
    },
    methods: {
        toggleLike() {
            let data = {
                id: this.id,
                like: !this.isFav
            }
            this.$emit('toggleLike', data)
        },
        movie() {
            let id = this.id;
            router.push({ name: 'movie', params: { id: id } })
            this.$emit('movie', id);
        }
    }
}