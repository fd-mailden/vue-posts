<template lang="">
    <button class = "button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
    .button{
        background-color: #fff;
        border: 1px solid #040404; 
        padding: 2px 15px;
        margin: 0 5px;
    }
</style>