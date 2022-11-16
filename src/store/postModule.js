import axios from 'axios'



export const postModule = {
    state: () => ({
        posts: [],
        title: '',
        body: '',
        limit: 10,
        page: 1,
        totalPages: 0,
        searchQuery: '',
        selectedSort: '',
        sortOptions: [
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Body' },
        ]
    }),
    getters: {
        sortPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },



    },
    actions: {
        async fetchPosts({ state, commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
               

            } catch (error) {
                console.log(error)
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                // this.page += 1
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                })

                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])

            } catch (error) {
                console.log(error)
            }
        },
    },

    namespaced: true,
}
