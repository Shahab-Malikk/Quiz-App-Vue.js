<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.question }}</h1>

      <div class="options-container">
        <div v-for="(option, index) in question.options" :key="index">
          <label :for="option.value" class="option">
            <input
              type="radio"
              :id="option.value"
              :value="option.value"
              @change="changeEventHandler"
              v-model="option.picked"
              name="input"
            />{{ option.text }}
            <span class="radioChecked"></span>
          </label>
        </div>
      </div>
      <div class="button-container">
        <button @click="previous" class="left" v-if="this.id > 1">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button @click="next" class="right" v-if="this.id < 5">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="result-btn" v-if="last">
      <button @click="callResult">Show Result</button>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        picked: "",
        score: 0,
        selected: "",
        last: false,
      };
    },
    computed: {
      ...mapGetters(["questionBank", "wrongAnswers", "rightAnswers"]),
      question() {
        return this.questionBank.find(
          (item) => item.id == this.$route.params.id && item.name == "js"
        );
      },
      id() {
        return parseInt(this.$route.params.id);
      },
    },

    methods: {
      showQuestion() {
        console.log(this.question.name);
      },
      next() {
        this.$router.push(`/js/${this.id + 1}`);
      },
      previous() {
        this.$router.push(`/js/${this.id - 1}`);
      },
      changeEventHandler(event) {
        if (this.id == 5) {
          this.last = true;
        }
        this.picked = event.target.value;

        if (
          this.picked.toLocaleLowerCase() ===
          this.question.answer.toLocaleLowerCase()
        ) {
          this.$store.dispatch("setRightAnswers");
          console.log("Answer is correct ");
        } else {
          console.log("Answer is wrong");
          this.$store.dispatch("setWrongAnswers");
        }
        console.log(this.picked);
      },
      callResult() {
        this.$router.push("/result");
      },
    },
  };
</script>

<style scoped>
  .question-container {
    margin: 80px auto;
    padding: 30px 40px;
    width: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
  }
  .question {
    margin-bottom: 15px;
    font-size: 1.4em;
  }
  .options-container {
    margin-bottom: 40px;
  }
  .option {
    display: block;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 1.4em;
    margin-left: 35px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .option input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    margin-left: 10px;
  }
  .radioChecked {
    position: absolute;
    top: 5px;
    left: -30px;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  .option:hover input ~ .radioChecked {
    background-color: #ccc;
  }

  .option input:checked ~ .radioChecked {
    background-color: #03ac13;
  }
  .radioChecked:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .option input:checked ~ .radioChecked:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .option .radioChecked:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
  .button-container {
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 20px;
  }
  .button-container button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #03ac13;
    display: inline-block;
    cursor: pointer;
    transition: all 0.5s;
    text-align: center;
  }
  .button-container button:hover {
    background: #03ac13;
    border: 2px solid white;
  }
  .button-container button:hover i {
    color: white;
  }
  .button-container button i {
    font-size: 20px;
    font-weight: 700;
  }
  .result-btn {
    text-align: center;
    margin-bottom: 60px;
  }
  .result-btn button {
    padding: 10px 30px;
    border-radius: 30px;
    background-color: transparent;
    transition: all 0.5s;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    color: #03ac13;
    border: 2px solid #03ac13;
  }
  .result-btn button:hover {
    background-color: #03ac13;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    .question-container {
      width: 90%;
      margin: 40px auto;
    }
    .question {
      margin-bottom: 20px;
      font-size: 1.3em;
    }
    .option {
      font-size: 1.3em;
      margin-top: 5px;
    }
    .option input {
      margin-left: 0px;
    }
    .radioChecked {
      width: 15px;
      height: 15px;
    }

    .option .radioChecked:after {
      top: 5px;
      left: 5px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: white;
    }
    .button-container button {
      width: 25px;
      height: 25px;
    }

    .button-container button i {
      font-size: 15px;
      font-weight: 700;
    }
    .button-container {
      column-gap: 10px;
    }
    .button-container button:hover {
      background: #03ac13;
      border: 0px solid white;
    }
  }
</style>
