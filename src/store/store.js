import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    rightAnswers: 0,
    wrongAnswers: 0,
    percentage: 0,
    totalQuestions: 5,
    questionBank: [
      {
        name: "c++",
        id: 1,
        question: "The default access specifer for the class members is",
        options: [
          {
            text: "public",
            value: "A",
          },
          {
            text: "private",
            value: "B",
          },
          {
            text: "protected",
            value: "C",
          },
          {
            text: "None of the Above",
            value: "D",
          },
        ],
        answer: "B",
      },
      {
        name: "c++",
        id: 2,
        question: "‘cin’ is an",
        options: [
          {
            text: "class",
            value: "A",
          },
          {
            text: "object",
            value: "B",
          },
          {
            text: "package",
            value: "C",
          },
          {
            text: "nameSpace",
            value: "D",
          },
        ],
        answer: "B",
      },
      {
        name: "c++",
        id: 3,
        question:
          "Which is the storage specifier used to modify the member variable even though the class object is a constant object?",
        options: [
          {
            text: "auto",
            value: "A",
          },
          {
            text: "register",
            value: "B",
          },
          {
            text: "static",
            value: "C",
          },
          {
            text: "mutable",
            value: "D",
          },
        ],
        answer: "D",
      },
      {
        name: "c++",
        id: 4,
        question: "The copy constructor is executed on",
        options: [
          {
            text: "Assigned one object to another object at its creation",
            value: "A",
          },
          {
            text: "When objects are sent to function using call by value mechanism",
            value: "B",
          },
          {
            text: "When the function return an object",
            value: "C",
          },
          {
            text: "All the above.",
            value: "D",
          },
        ],
        answer: "D",
      },
      {
        name: "c++",
        id: 5,
        question:
          "A single line comment in C++ language source code can begin with",
        options: [
          {
            text: ";",
            value: "A",
          },
          {
            text: ":",
            value: "B",
          },
          {
            text: "/*",
            value: "C",
          },
          {
            text: "//",
            value: "D",
          },
        ],
        answer: "D",
      },
      {
        name: "js",
        id: 1,
        question:
          "Which built-in method returns the character at the specified index?",
        options: [
          {
            text: "characterAt()",
            value: "A",
          },
          {
            text: "getCharAt()",
            value: "B",
          },
          {
            text: "charAt()",
            value: "C",
          },
          {
            text: "None of the Above",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "js",
        id: 2,
        question:
          "Which built-in method returns the calling string value converted to lower case?",
        options: [
          {
            text: "toLowerCase()",
            value: "A",
          },
          {
            text: "toLower()",
            value: "B",
          },
          {
            text: "changeCase(case)",
            value: "C",
          },
          {
            text: "None of the Above",
            value: "D",
          },
        ],
        answer: "A",
      },
      {
        name: "js",
        id: 3,
        question:
          "Which of the following function of Array object extracts a section of an array and returns a new array?",
        options: [
          {
            text: "reverse()",
            value: "A",
          },
          {
            text: "shift()",
            value: "B",
          },
          {
            text: "slice()",
            value: "C",
          },
          {
            text: "some()",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "js",
        id: 4,
        question:
          "Which of the following is the correct syntax to redirect a url using JavaScript?",
        options: [
          {
            text: "document.location= 'http://www.newlocation.com';",
            value: "A",
          },
          {
            text: "browser.location= 'http://www.newlocation.com';",
            value: "B",
          },
          {
            text: "navigator.location= 'http://www.newlocation.com';",
            value: "C",
          },
          {
            text: "window.location= 'http://www.newlocation.com';",
            value: "D",
          },
        ],
        answer: "D",
      },
      {
        name: "js",
        id: 5,
        question: "Can you access Cookie using javascript?",
        options: [
          {
            text: "true",
            value: "A",
          },
          {
            text: "false",
            value: "B",
          },
        ],
        answer: "A",
      },
      {
        name: "python",
        id: 1,
        question: "Is Python case sensitive when dealing with identifiers?",
        options: [
          {
            text: "no",
            value: "A",
          },
          {
            text: "yes",
            value: "B",
          },
          {
            text: "machine Dependent",
            value: "C",
          },
          {
            text: "none of the above",
            value: "D",
          },
        ],
        answer: "b",
      },
      {
        name: "python",
        id: 2,
        question: "Which of the following is an invalid variable?",
        options: [
          {
            text: "my_string_1",
            value: "A",
          },
          {
            text: "1st_string",
            value: "B",
          },
          {
            text: "foo",
            value: "C",
          },
          {
            text: "_",
            value: "D",
          },
        ],
        answer: "B",
      },
      {
        name: "python",
        id: 3,
        question: "Which of these about a set is not true?",
        options: [
          {
            text: "Mutable data type",
            value: "A",
          },
          {
            text: "Allows duplicate values",
            value: "B",
          },
          {
            text: "Immutable data type",
            value: "C",
          },
          {
            text: "Data type with unordered values",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "python",
        id: 4,
        question: "Which among them is incorrect for set s={100,101,102,103}",
        options: [
          {
            text: "Len(s)",
            value: "A",
          },
          {
            text: "Sum(s)",
            value: "B",
          },
          {
            text: "Print(s[3])",
            value: "C",
          },
          {
            text: "Max(s)",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "python",
        id: 5,
        question:
          "What will be the output of the following code? print(type(1/2))",
        options: [
          {
            text: "<class 'float'>",
            value: "A",
          },
          {
            text: "<class 'int'>",
            value: "B",
          },
          {
            text: "NameError: ‘½’ is not defined.",
            value: "C",
          },
          {
            text: "0.5",
            value: "D",
          },
        ],
        answer: "A",
      },
      {
        name: "java",
        id: 1,
        question: "Who is known as father of Java Programming Language?",
        options: [
          {
            text: "James Gosling",
            value: "A",
          },
          {
            text: "M. P Java",
            value: "B",
          },
          {
            text: "Charles Babbage",
            value: "C",
          },
          {
            text: "Blais Pascal",
            value: "D",
          },
        ],
        answer: "A",
      },
      {
        name: "java",
        id: 2,
        question:
          "In java control statements break, continue, return, try-catch-finally and assert belongs to?",
        options: [
          {
            text: "Selection statements",
            value: "A",
          },
          {
            text: "Loop statements",
            value: "B",
          },
          {
            text: "Transfer Statements",
            value: "C",
          },
          {
            text: "Pause Statement",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "java",
        id: 3,
        question: "What is byte code in Java?",
        options: [
          {
            text: "Code generated by a Java compiler",
            value: "A",
          },
          {
            text: "Code generated by a Java Virtual Machine",
            value: "B",
          },
          {
            text: "Name of Java source code file",
            value: "C",
          },
          {
            text: "Block of code written inside a class",
            value: "D",
          },
        ],
        answer: "A",
      },
      {
        name: "java",
        id: 4,
        question: "Which of the following are not Java keywords ?",
        options: [
          {
            text: "double",
            value: "A",
          },
          {
            text: "switch",
            value: "B",
          },
          {
            text: "then",
            value: "C",
          },
          {
            text: "instanceOf",
            value: "D",
          },
        ],
        answer: "C",
      },
      {
        name: "java",
        id: 5,
        question:
          "Which provides runtime environment for java byte code to be executed?",
        options: [
          {
            text: "JDK",
            value: "A",
          },
          {
            text: "JVM",
            value: "B",
          },
          {
            text: "JRE",
            value: "C",
          },
          {
            text: "JAVAC",
            value: "D",
          },
        ],
        answer: "B",
        picked:""
      },
    ],
  },
  mutations: {
    SET_WRONG_ANSWER(state) {
      if (state.wrongAnswers < 5) {
        state.wrongAnswers += 1;
      }
      console.log("calling");
      console.log(state.wrongAnswers);
    },
    SET_RIGHT_ANSWERS(state) {
      if (state.rightAnswers < 5) {
        state.rightAnswers += 1;
      }
      console.log(state.questionBank.picked)
    },
    SET_PERCENTAGE(state) {
      state.percentage = (state.rightAnswers / state.totalQuestions) * 100;
    },
  },
  actions: {
    setWrongAnswers({ commit }) {
      commit("SET_WRONG_ANSWER");
    },
    setRightAnswers({ commit }) {
      commit("SET_RIGHT_ANSWERS");
    },
    setPercentage({ commit }) {
      commit("SET_PERCENTAGE");
    },
  },
  getters: {
    questionBank: (state) => state.questionBank,
    rightAnswers: (state) => state.rightAnswers,
    wrongAnswers: (state) => state.wrongAnswers,
    percentage: (state) => state.percentage,
    totalQuestions: (state) => state.totalQuestions,
  },
});
