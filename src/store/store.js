import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    rightAnswers:0,
    wrongAnswers:0,
    percentage:0,
    totalQuestions:5,
    questionBank: [
      {
        name: "c++",
        id: 1,
        question: "What is C++",
        options: [
          {
            text: "A language",
            value: "A",
     
          },
          {
            text: "A language",
            value: "B",
          },
          {
            text: "A language",
            value: "C",
      
          },
          {
            text: "A language",
            value: "D",
          },
        ],
        answer: "A",
    
      },
      {
        name: "c++",
        id: 2,
        question: "What is java",
        options: [
          {
            text: "A languaghfuehrue",
            value: "A",
            picked:''
          },
          {
            text: "A languaehrioweioge",
            value: "B",
            picked:'',
          },
          {
            text: "A languijriweage",
            value: "C",
            picked:''
          },
          {
            text: "A languiejwirjage",
            value: "D",
            picked:''
          },
        ],
        answer: "b",
     
      },
      {
        name: "c++",
        id: 3,
        question: "What is C++",
        options: [
          {
            text: "A language",
            value: "A",
          },
          {
            text: "A language",
            value: "B",
          },
          {
            text: "A language",
            value: "C",
          },
          {
            text: "A language",
            value: "D",
          },
        ],
        answer: "a language",
      },
      {
        name: "c++",
        id: 4,
        question: "What is C++",
        options: [
          {
            text: "A language",
            value: "A",
          },
          {
            text: "A language",
            value: "B",
          },
          {
            text: "A language",
            value: "C",
          },
          {
            text: "A language",
            value: "D",
          },
        ],
        answer: "a language",
      },
      {
        name: "c++",
        id: 5,
        question: "What is C++",
        options: [
          {
            text: "A language",
            value: "A",
          },
          {
            text: "A language",
            value: "B",
          },
          {
            text: "A language",
            value: "C",
          },
          {
            text: "A language",
            value: "D",
          },
        ],
        answer: "a language",
      },
      {
        name: "js",
        id: 1,
        question: "What is Js",
        options: ["a language", "a cartoon"],
        answer: "a language",
      },
      {
        name: "python",
        id: 1,
        question: "What is Python",
        options: ["a language", "a cartoon"],
        answer: "a language",
      },
      {
        name: "java",
        id: 1,
        question: "What is Java",
        options: ["a language", "a cartoon"],
        answer: "a language",
      },
    ],
  },
  mutations:{
    SET_WRONG_ANSWER(state){
     if(state.wrongAnswers<5){
      state.wrongAnswers+=1
     }
      console.log('calling')
      console.log(state.wrongAnswers)
    },
    SET_RIGHT_ANSWERS(state){
      if(state.rightAnswers<5){
        state.rightAnswers+=1
      }
    },
    SET_PERCENTAGE(state){
      state.percentage=(state.rightAnswers/state.totalQuestions)*100
    }
  },
  actions:{
    setWrongAnswers({commit}){
    commit("SET_WRONG_ANSWER")

    },
    setRightAnswers({commit}){
      commit('SET_RIGHT_ANSWERS')
    },
    setPercentage({commit}){
      commit('SET_PERCENTAGE')
    }
  }
  ,
  getters: {
    questionBank: (state) => state.questionBank,
    rightAnswers:(state)=>state.rightAnswers,
    wrongAnswers:(state)=>state.wrongAnswers,
    percentage:state=>state.percentage,
    totalQuestions:state=>state.totalQuestions
  },
});
