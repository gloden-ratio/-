<template>
    <div id="boutiqu">
        <div class="item" v-for="item, index in productList.leftList">
            <div class="item_left">
                <router-link to="/s">
                    <van-image lazy-load width="100%" height="3.4rem" :src="item.download_url">
                    </van-image>
                    <div class="item_left_xx">
                        <div class="item_left_title">
                            <span>
                                {{ item.author }}
                            </span>
                            <span>
                                {{ item.height }}
                            </span>
                        </div>
                        <span class="item_left_title_price">
                            <span>${{ item.width }}</span>
                            <span>+</span>
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="item_reight">
                <router-link to='/commodityDetails'>

                    <van-image width="100%" height="3.4rem" lazy-load :src="item.download_url">
                    </van-image>
                    <div class="item_right_xx">
                        <div class="item_reight_title">
                            <span>
                                {{ item.author }}
                            </span>
                            <span>
                                {{ item.width }}
                            </span>
                        </div>
                        <span class="item_reight_title_price">
                            <span>{{ item.height }}</span>
                            <span>+</span>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

</template>
<script>
import { getBoutique } from "../../quest/date/home";
import { defineComponent, onMounted, ref, reactive } from "vue";

export default defineComponent({


    setup(props, context) {

        let productList = reactive({ leftList: [], right: [] });

        onMounted(async () => {

            let URL = [
                { url: "/v2/list?page=2&limit=10", method: 'get', },
                { url: "/v2/list?page=2&limit=15", method: 'GET' }]


            URL.forEach(async (item) => {
                let res = await getBoutique(item)
                console.log(res.data);
                productList.leftList = res.data
                productList.right = res.data
            })


        })


        return {
            // img_list,
            productList,


        }
    }


})


</script>
<style lang="less" scoped>
@import url(./boutique.less);
</style>