import { createApp } from "vue";
import App from "./App.vue";
import getapp from "./plugin/plugin";
import "../public/css/iconfont.css";

import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App).use(createPinia()).use(router);
//vant 组件函数
getapp(app);

app.mount("#app");
