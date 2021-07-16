const Profile = {
    name: 'Profile',
    template: //html 
        `
        <div class="container d-flex flex-fill my-5 fw-normal mx-auto">
            <div class="row">
                <div class="col-md-7 order-md-2 my-auto">
                    <form @submit.prevent="updateUser">
                        <div class="d-flex justify-content-end">
                        </div>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="name" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="name" v-model="user.name" :disabled="!edit" required>
                            </div>
                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Apellido</label>
                                <input type="text" class="form-control" id="lastName" v-model="user.lastName" :disabled="!edit" required>
                            </div>
                            <div class="col-12">
                                <label for="username" class="form-label">Usuario</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" id="username" v-model="user.username" :disabled="!edit" required>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" :disabled="!edit" v-model="user.email">
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-outline-success my-4" data-bs-toggle="button"  @click="edit = !edit">
                                <span v-show="!edit"><i class="fas fa-edit"></i> Editar</span>
                                <span v-show="edit">Guardar Cambios</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-md-5 order-md-1 my-auto text-center">
                    <img src="/img/user.png" alt="user photo" class="img-fluid mx-auto" width="300" role="img"
                        aria-label="user photo" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <h2 class=" my-3 fw-light lh-1">
                        {{user.name}} {{user.lastName}}
                    </h2>
                    <p class="lead">{{user.username}}</p>
                </div>
            </div>
        </div>
        `,
    data() {
        return {
            edit: false
        }
    },
    computed: {
        // ...Vuex.mapState(['user']),
        user: {
            get() {
                return store.state.user
            },
            set(value) {
                store.commit('updateUser', value)
            }
        }
    }
}