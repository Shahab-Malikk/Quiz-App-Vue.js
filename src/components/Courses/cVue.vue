<template>
  <div>
   <h1>{{question.question}}</h1>

<button @click="next">NEXT</button>
<button @click="previous">Previous</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["questionBank"]),
    question() {
      return this.questionBank.find(item=>item.id==this.$route.params.id)
    
    },
    id(){
      return parseInt(this.$route.params.id)
    }
  },
  methods:{
    showQuestion(){
        console.log(this.question.name)
    },
    next(){
      this.$router.push(`/c/${this.id+1}`)
    },
    previous(){
      this.$router.push(`/c/${this.id-1}`)
    }
  }
};
</script>
