<template>
  <div class="container">
    <div class="result-container">
      <h2>This is your result</h2>

      <div class="no-container">
        <div class="content-container">
          <h3 class="ans-heading">Right Answers</h3>
          <p class="number">{{ rightAnswers }}</p>
        </div>
        <div class="content-container">
          <h3 class="ans-heading">Wrong Answers</h3>
          <p class="number">{{ wrongAnswers }}</p>
        </div>
      </div>

      <div class="percentage-container">
        <h3 class="ans-heading">Overall Percentage</h3>
        <p class="number">{{ percentage }} %</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";

  export default {
    name: "ResultVue",
    computed: {
      ...mapGetters(["wrongAnswers", "rightAnswers", "percentage"]),
    },
    created() {
      this.$store.dispatch("setPercentage");
    },
  };
</script>
<style scoped>
  .container {
    width: 1140px;
    margin: 0 auto;
  }
  .result-container {
    padding: 80px 80px;
  }
  h2 {
    text-align: center;
  }
  .no-container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10%;
  
  }
  .content-container,.percentage-container{
    width:300px;
    height: 200px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    padding:30px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

  }
  .percentage-container{
    margin: 30px auto;
    
  }
 
</style>
