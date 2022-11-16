<template lang="">
     <div class="post" >
        <div class="">
            <div class="">{{post.id}}</div>
            <div class="">  Name: <span> {{post.title}}</span></div>
            <div class=""> Description: <span> {{post.body}}</span></div>
        </div>
        <my-button @click = "$emit('remove', post)">
            delete
        </my-button>
    </div>

</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }

}
</script>
<style scoped>
.post {
    max-width: 100%;
    padding: 30px;
    margin: 30px;
    border: 3px solid #ededed;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>