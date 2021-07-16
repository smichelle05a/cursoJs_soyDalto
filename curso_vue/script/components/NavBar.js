Vue.component('nav-bar',{
    template: /* html */
        `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <router-link class="navbar-brand"
                    :to="'/playground/curso_vue/'">
                        <img src="/img/favicon.ico" alt="logo" width="30" height="24">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar"
                        aria-controls="my-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="my-navbar">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="'/playground/curso_vue/'"
                                >Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link"
                                :to="'favorites'">Favorites</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link"
                                :to="'profile'">My Profile</router-link>
                            </li>
                        </ul>
                        <SearchComp/>
                    </div>
                </div>
            </nav>
        </header>
        `,
    components: {
        SearchComp
    }
})