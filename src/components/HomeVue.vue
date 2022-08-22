<template>
    <div>
      <header-vue></header-vue>
     <router-view></router-view>
      <footer-vue></footer-vue>
    </div>
</template>

<script>
import HeaderVue from './HeaderVue.vue';
import FooterVue from './FooterVue.vue';



export default {
   name:'HomeVue',
   components:{
    HeaderVue,
    FooterVue,

}
}
</script>
<style>

</style>