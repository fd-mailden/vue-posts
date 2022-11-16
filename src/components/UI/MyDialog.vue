<template lang="">
    <div v-if="show" class = "dialog" @click = "hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixins from '@/mixins/toggleMixins';
export default {
    name: 'my-dialog',
   mixins: [toggleMixins]


}
</script>
<style scoped>
    .dialog{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        position: fixed;
        display: flex;
    }
    .dialog__content{
        margin: auto;
        background:  #fff;
        border-radius: 12px;
        min-height: 50px;
        padding: 50px;
    }
</style>