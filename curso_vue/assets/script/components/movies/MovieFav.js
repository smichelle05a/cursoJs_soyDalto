let MovieFav = {
    template: /* html */`
    <div v-show="show" class="movieFav-wrapper">
        <div :id="'fav-'+ _uid" class="movieFav">
        </div>
    </div>
    `,
    props: {
        show: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    mounted() {
        let $element = document.getElementById(`fav-${this._uid}`);
        $element.addEventListener('animationend', () => {
            this.$emit('update:show', false)
        })
    }
}