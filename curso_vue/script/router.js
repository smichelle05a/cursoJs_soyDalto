const routes = [
    {
        path: URLDeploy,
        name: 'home',
        component: Home
    },
    {
        path: `${URLDeploy}/movie/: id`,
        name: 'movie',
        component: Details
    },
    {
        path: `${URLDeploy}/search`,
        name: 'search',
        component: Search
    },
    {
        path: `${URLDeploy}/favorites`,
        name: 'favorites',
        component: Favorites
    },
    {
        path: `${URLDeploy}/profile`,
        name: 'profile',
        component: Profile
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});