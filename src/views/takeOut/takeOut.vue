<template>
    <div id="takeOut">
        <div class="head">外卖小猪</div>
        <div class="title">
            <img :src="url" alt="" class="title_img" />
            <div class="sadfj">
                <van-sidebar v-model="active">
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                </van-sidebar>
                <div class="list">
                    <van-nav-bar title="标题" class="list_font" />
                    <van-pull-refresh v-model="loading" @refresh="onRefresh">
                        <router-link to="/commodityDetails">
                            <div class="list_item" v-for="item in list">
                                <div class="list_item_img">
                                    <img src="img/青提.PNG" alt="" />
                                </div>
                                <div class="list_item_text">
                                    <span class="list_item_text_new">
                                        红唇膏营业公告
                                    </span>
                                    <span class="list_item_text_tow">营业时间:12:30-10pm</span>
                                    <span class="list_item_text_price">
                                        <span>$13.5/份</span>
                                        <span>+</span>
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </van-pull-refresh>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import {defineComponent,ref}from'vue'
import { Toast } from 'vant'
export default defineComponent({
    setup() {
        const url = "img/afdsffsdg.PNG";
        const active = ref(0);
        let list = 9;
        //下拉刷新
        const count = ref(0);
        const loading = ref(false);
        const onRefresh = () => {
            setTimeout(() => {
                Toast('刷新成功');
                loading.value = false;
                count.value++;
            }, 1000);
        };
        return {
            list,
            active,
            url,
            //刷新
            loading,
            onRefresh,

        }
    }
})
</script>

<style lang="less" scoped>


@import url("./takeOut.less");
</style>