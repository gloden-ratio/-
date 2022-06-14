import { createApp } from "vue";
import  App from "./App.vue";
import getapp from "./plugin/plugin";

import router from "./router";


 



const app = createApp(App).use(router)
//vant 组件函数
getapp(app);
app.mount('#app')