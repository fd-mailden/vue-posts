<template lang="">
    <select :value="modelValue" @change="changeOptions">
        <option disabled value = ''>............</option>
        <option v-for = "option in options"
         :key="option.value" 
         :value = "option.value">
            {{option.name}}
        </option>
    </select>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String,
            default: ''

        },
    },
    methods:{
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        },
    }

}
</script>
<style lang="">
    
</style>