<template>
    <form @submit.prevent>
        <my-input v-focus v-model = "post.title" type="text" name="title" id="title"/>
        <my-input v-model = "post.body" type="text" name="body" id="body"/>
        <my-button type="submit" @click = "createPost" > add post </my-button>
  </form>
</template>
<script>

export default {
   
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }

}
</script>
<style >
    
</style>