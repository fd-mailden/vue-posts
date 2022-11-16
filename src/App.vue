<template lang="">
  <div  class="app">
    <main-navbar></main-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import MainNavbar from '@/components/MainNavbar.vue'
export default {
  components: {
    MainNavbar
  }

}
</script>
<style lang="">
  
</style>