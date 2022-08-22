<template>
  <div id="app">
<home-vue></home-vue>
  </div>
</template>

<script>

import HomeVue from './components/HomeVue';



export default {
    name: "App",
    components: {
        HomeVue
    },
    
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-rendering: optimizeLegibility;
  background-color:white;
  color:black

}
.container{
  max-width: 1140px;
  margin: 0 auto;

}
span{
  color:#03ac13
}
section{
  padding:60px 0px
}
</style>
