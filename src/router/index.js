import { createRouter,createWebHashHistory} from "vue-router";
import Home from '../views/Home/Home.vue'
const router = createRouter({
 
history:createWebHashHistory(),

 routes:[
  {path:'/',component:Home},
  {
    path:'/home',
    component:Home,
  },
 
 ]
})


export default router

