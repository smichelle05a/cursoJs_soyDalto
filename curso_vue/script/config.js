const APIKEY = '27e12a7a8406fbbebaa4843a1d32c3cc';
const BASEURL = 'https://api.themoviedb.org/3/'
const URLDeploy = '/playground/curso_vue'

Vue.mixin({
    data() {
        return {
            apiConfig: `?api_key=${APIKEY}&language=es-MX`,
            apiBaseUrl: BASEURL
        }
    },
    filters: {
        coverURL(str) {
            let URL = "";
            if (!str) URL = `img/404poster.png`
            else URL = `https://image.tmdb.org/t/p/original${str}`
            return URL
        },
        fullName() {
            return `${store.state.username.name} ${store.state.username.lastName}`
        }
    }
});