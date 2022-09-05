import MainVue from "../components/MainVue.vue";
import cVue from "../components/Courses/cVue.vue";
import javascriptVue from "../components/Courses/javascriptVue.vue";
import javaVue from "../components/Courses/javaVue.vue";
import pythonVue from "../components/Courses/pythonVue.vue";
import resultVue from "../components/resultVue.vue";



export const routes = [
  {
    path: "",
    component: MainVue,
  },
  {
    path: "/c++/:id",
    component: cVue,
  },
  {
    path: "/java/:id",
    component: javaVue,
  },
  {
    path: "/js/:id",
    component: javascriptVue,
  },
  {
    path: "/python/:id",
    component: pythonVue,
  },
  {
    path: "/result",
    component: resultVue,
  },

];
