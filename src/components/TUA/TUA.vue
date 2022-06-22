<template>
    <div id="tua">
        <van-tabs v-model:active="active" :before-change="beforeChange" :title-active-color="titleActiveColor">
            <van-tab v-for="item, index in list" :title="item">
                <boutique></boutique>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>

import { reactive, ref } from 'vue';
import { getTuaData } from "../../quest/date/home"
import boutique from "../../components/boutique/boutique";


export default {
    components: {
        boutique

    },
    setup() {
        const titleActiveColor = "#fe6e09"
        const active = ref(0);
        let list = ['精品', '新品', '折扣', '批发']
        let sdf = reactive({})
        let URL = { url: "?limit=5&page=10&order=Desc", method: 'get' }
        const beforeChange = (index) => {
            // 返回 false 表示阻止此次切换
            // 返回 Promise 来执行异步逻辑
            return new Promise(async (resolve) => {
                // 在 resolve 函数中返回 true 或 false
                resolve(true)
                let res = await getTuaData(URL)
            });
        };

        return {
            active, list, sdf,
            beforeChange,
            titleActiveColor
        };
    }
}
</script>
<style lang="less" scoped>
:root {
    --van-danger-color: #fe6e09;
}
</style>