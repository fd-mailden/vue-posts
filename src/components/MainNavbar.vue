<template lang="">
    <nav class = 'navbar'>
        <router-link to="/" class = 'link'>main</router-link>
        <router-link to="/store" class = 'link'>store</router-link>
        <router-link to="/composition" class = 'link'>composition</router-link>
        <my-button @click = "$router.push('/posts')" class = 'link'>posts</my-button>
        
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar {
    padding: 20px;
    border: 2px solid gray;
    margin-bottom: 20px;

}
.link{
    margin: 5px 10px;
    color: black;
}

</style>