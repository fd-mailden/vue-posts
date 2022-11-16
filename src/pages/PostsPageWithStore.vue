<template>
    <div>
        <my-button @click="onShowDialog">Create Post</my-button>
        <my-select :model-value="selectedSort" @update:model-value = "setSelectedSort" :options="sortOptions" />
        <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Search..." />
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list v-show="posts.length > 0" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <h3 v-show="posts.length === 0" style="color: red;">empty</h3>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>

</template>
  
<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            dialogVisible: false,
        }

    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort:  'post/setSelectedSort',

        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),

        removePost(currentPost) {
            this.posts = this.posts.filter(post => post.id !== currentPost.id)
        },
        onShowDialog() {
            this.dialogVisible = true
        },

    },
    mounted() {
        this.fetchPosts()


    },
    computed: {

        ...mapState({
            posts: state => state.post.posts,
            title: state => state.post.title,
            body: state => state.post.body,
            limit: state => state.post.limit,
            page: state => state.post.page,
            totalPages: state => state.post.totalPages,
            searchQuery: state => state.post.searchQuery,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortPosts: 'post/sortPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
        }),

    },


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
  