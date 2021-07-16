const Pagination = {
    template: /* html */ `
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center my-3">
            <li class="page-item" :class="{ 'disabled': activePage == startPage }"><button class="page-link " @click="changePage(1)">&#8810;</button></li>
            <li class="page-item" :class="{ 'disabled': activePage == startPage }"><button class="page-link" @click="changePage(prevPage)" aria-label="Previous"><span aria-hidden="true">&#60;</span></button></li>
            <li class="page-item" :class="{ 'active': activePage == n }" v-for="(n, index) in midPages" :key="index"><button class="page-link" @click="changePage(n)">{{n}}</button></li>
            <li class="page-item" :class="{ 'disabled': activePage == totalPages }"><button class="page-link" @click="changePage(nextPage)" aria-label="Next"><span aria-hidden="true">&#62;</span></button></li>
            <li class="page-item" :class="{ 'disabled': activePage == totalPages }"><button class="page-link" @click="changePage(totalPages)">&#8811;</button></li>
        </ul>
    </nav>`,
    props: {
        visibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            required: true
        },
        activePage: {
            required: true
        }
    },
    computed: {
        startPage() {
            if (this.activePage == 1 || this.activePage == 2) {
                return 1;
            } else if (this.activePage == this.totalPages) {
                return this.activePage - this.visibleButtons + 1;
            } else {
                return this.activePage - 1
            }
        },
        endPage() {
            return Math.min(this.startPage + this.visibleButtons - 1, this.totalPages);
        },
        midPages() {
            let pages = [];
            for (let i = this.startPage; i <= this.endPage; i++) {
                pages.push(i)
            }
            return pages
        },
        prevPage() {
            return this.activePage - 1
        },
        nextPage() {
            return this.activePage + 1
        },
    },
    methods: {
        changePage(activePage) {
            this.$emit('changePage', activePage)
        }
    },
}

