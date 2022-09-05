<template>
  <section>
   
    <div class="container">
      <div class="heading-container">
        <h2>Select a <span>language</span> you want to give test</h2>
      </div>
<div class="options-container">
<div class="link-container" @click="callCQuestions">
    C++
</div>
<div class="link-container">
JavaScript
</div>
<div class="link-container">
    Python
</div>
<div class="link-container">
    Java
</div>
</div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
computed:{
...mapGetters(["questionBank"]),
cQuestions(){
  return this.questionBank.find(item=>item.id===1&& item.name.includes('c'))
}
},
  methods:{
    callCQuestions(){
      this.$router.push(`/${this.cQuestions.name}/${this.cQuestions.id}`)
      
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 30px;
}

.options-container{
    padding: 0px 20px ;
    width: 50%;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.link-container{
padding: 30px 5px;
cursor: pointer;
font-size: 1.5em;
font-family: 'DynaPuff', cursive;
}
.link-container:not(:last-child){
border-bottom: 1px solid rgb(235, 232, 232);

}

.link-container:hover{
    color:#03ac13;
    border-bottom: 1px solid #03ac13;
}
@media only screen and (max-width: 768px) {
  
.options-container{
  width:80%;
}
.link-container{
  padding: 15px 5px;
  font-size: 1.2em;
}

}


</style>
