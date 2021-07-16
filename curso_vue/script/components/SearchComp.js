const SearchComp = {
    name: 'SearchComp',
    template: //html
        `
        <form @submit.prevent="search" class="d-flex">
            <button v-show="query"
            @click="reset"
            class="btn btn-outline-danger" type="button">
                <i class="fas fa-times text-grey" aria-hidden="true"></i>
            </button>
            <input class="form-control mx-1" type="text"
            placeholder="Search" aria-label="Search"
            v-model="query">
            <button
            @click="search"
            class="btn btn-outline-success" type="button">
            <i class="fas fa-search text-grey" aria-hidden="true"></i>
            </button>
        </form>
        `,
    computed: {
        query: {
            get() {
                return this.$store.state.query
            },
            set(value) {
                store.commit('updateQuery', value)
            }
        }
    },
    methods: {
        onSearch() {
            this.search()
        },
        onReset() {
            this.reset()
            router.push('/')
        },
        ...Vuex.mapMutations(['search', 'reset'])
    }
}