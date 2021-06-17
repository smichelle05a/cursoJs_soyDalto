let MovieComp = {
    template: /* html */ `
    <div :id="id | formatId" class="card h-100" :class="{'border-danger': like}">
        
        <img :src="cover" class="card-img-top" alt="title">
        <div class="card-body">
        <button @click="toggleLike" class="btn btn-sm mb-3" :class="{
            'btn-outline-danger': like,
            'btn-outline-dark': !like
        }">
            <i class="fa-heart" :class="{
                'fas': like,
                'far': !like
            }"></i>
            <span v-text="like ? 'Favorita' : 'Agregar a Favoritas'"></span>
        </button>
        <h5 class="card-title"> {{title | uppercase}} </h5>
            <p class="card-text"> {{synopsis | shorten}} </p>
        </div>
    </div>`,
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
            required: false,
            default: 'No posee sinopsis.'
        },
        cover: {
            type: String,
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
            return `${value.slice(0,100)}...`
        }
    },
    watch: {
        like(newVal, oldVal) {
            console.log(`new: ${newVal}, old: ${oldVal}`)
        }
    },
    methods: {
        toggleLike() {
                let movie = this.$parent.movies.find(m => m.id == this.id);
                movie.like = !this.like;
                this.$parent.showFav = !this.like;
        }
    }
}