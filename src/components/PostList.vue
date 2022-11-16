<template lang="">
    <transition-group name="list">
      <PostItem v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove = "$emit('remove', post)"
    />
    </transition-group>
  
</template>
<script>
import PostItem from './PostItem.vue'
export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }

}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move{
    transition: transform 0.4s ease;
}

</style>