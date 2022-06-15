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
  {
    path:'/supermarket',
    component:()=>import("../views/supermarket/supermarket.vue")
  },
  {path:'/takeOut',component:()=>import ("../views/takeOut/takeOut.vue")},
  {path:'/shoppingCar',component:()=>import ("../views/shoppingCart/shoppingCart.vue")},
  {path:'/my',component:()=>import ("../views/my/my.vue")},
  
  
 ]
})


export default router

