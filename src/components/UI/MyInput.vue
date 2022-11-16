<template lang="">
    <input :value = "modelValue" @input = "updateInput" class = 'input' type="text">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.input {
    outline: none;
    border: 1px solid burlywood;
    padding: 2px 5px;
    margin: 0 5px;
}
</style>