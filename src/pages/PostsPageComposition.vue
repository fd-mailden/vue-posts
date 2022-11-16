<template>
    <div>

        <post-list v-show="posts.length > 0" :posts="posts" />

    </div>

</template>
  
<script>
import PostList from '@/components/PostList.vue'
import { usePosts } from '@/hooks/usePosts'
export default {
    components: {
        PostList,
    },
    data() {
        return {

            dialogVisible: false,
       

        }

    },
    setup() {
        const { posts, totalPages } = usePosts(10)


        return { posts, totalPages }
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
  