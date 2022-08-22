import MainVue from "../components/MainVue.vue";
import cVue from "../components/Courses/cVue.vue";


export const routes = [{
    path: "",
    component:MainVue,
    
},{
         path: "/:ttile/:id",
        component: cVue,
}

];