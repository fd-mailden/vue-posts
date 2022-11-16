<template>
    <div>
        <my-button @click="onShowDialog">Create Post</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
        <my-input v-model="searchQuery" placeholder="Search..." />
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list v-show="posts.length > 0" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <h3 v-show="posts.length === 0" style="color: red;">empty</h3>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
    <!-- <div class="page__wrapper">
      <div class="page" 
      v-for="pageNum in totalPages" 
      :key="pageNum" 
      :class="{
        'current-page': page === pageNum
      }"
       @click="changePage(pageNum)">
       {{ pageNum }}
      </div>
    </div> -->
</template>
  
<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import axios from 'axios'
export default {
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            posts: [],
            title: '',
            body: '',
            dialogVisible: false,
            limit: 10,
            page: 1,
            totalPages: 0,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'Title' },
                { value: 'body', name: 'Body' },
            ]

        }

    },
    methods: {
        createPost(post) {
            console.log(post)
            this.posts.push(post)
        },
        removePost(currentPost) {
            this.posts = this.posts.filter(post => post.id !== currentPost.id)
        },
        onShowDialog() {
            this.dialogVisible = true
        },
        // changePage(newNumber) {
        //   this.page = newNumber
        // },
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.totalPages = await Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = await response.data
            } catch (error) {
                console.log(error)
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.totalPages = await Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = await [...this.posts, ...response.data]
            } catch (error) {
                console.log(error)
            }
        },
    },
    mounted() {
        this.fetchPosts()

        // const intersectionObserver = new IntersectionObserver((entries) => {

        //     if (entries[0].intersectionRatio <= 0) return;

        //     console.log('Loaded new items');
        //     this.loadMorePosts()
        // });
        // // start observing
        // intersectionObserver.observe(this.$refs.observer);

    },
    computed: {
        sortPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts() {
            return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        // page(){
        //   this.fetchPosts()
        // }
        //   selectedSort(newValue) {
        //     this.posts.sort((post1, post2) => {
        //       return post1[newValue]?.localeCompare(post2[newValue])
        //     })
        //   },
    }

}

</script>
  
<style scoped>
.page__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.page {
    padding: 2px 5px;
    border: 1px solid #000;
    margin: 2px;
    cursor: pointer;
}

.current-page {
    border: 2px solid rgb(95, 79, 79);
    cursor: pointer;

}

.observer {
    width: 100%;
    border-top: 1px solid #000
}
</style>
  