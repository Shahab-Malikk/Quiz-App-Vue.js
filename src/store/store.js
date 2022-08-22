import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        questionBank: [{
                name: 'c',
                id: 1,
                question: 'What is C++',
                options: [
                    'a language',
                    'a cartoon',

                ],
                answer: 'a language',


            },{
                name: 'c',
                id: 2,
                question: 'What is C',
                options: [
                    'a language',
                    'a cartoon',

                ],
                answer: 'a language',


            },
            {
                name: 'js',
                id: 1,
                question: 'What is Js',
                options: [
                    'a language',
                    'a cartoon',

                ],
                answer: 'a language',


            }, {
                name: 'python',
                id: 1,
                question: 'What is Python',
                options: [
                    'a language',
                    'a cartoon',

                ],
                answer: 'a language',


            }, {
                name: 'java',
                id: 1,
                question: 'What is Java',
                options: [
                    'a language',
                    'a cartoon',

                ],
                answer: 'a language',


            }
        ]

    },
    getters: {
        questionBank: state => state.questionBank
    }
})