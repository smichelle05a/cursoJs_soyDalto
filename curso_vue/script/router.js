const routes = [
    {
        path: '/playground/curso_vue/',
        name: 'home',
        component: Home
    },
    {
        path: '/movie/:id',
        name: 'movie',
        component: Details
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});