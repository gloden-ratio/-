import { createApp } from "vue";
import  App from "./App.vue";
import getapp from "./plugin/plugin";
import  "../public/css/iconfont.css";

import router from "./router";



 



const app = createApp(App).use(router)
//vant 组件函数
getapp(app);

app.mount('#app')