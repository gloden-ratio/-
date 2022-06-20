<template>
    <div id="boutiqu" >
        <div class="item">
            <div class="item_left">
                <img src="" alt="">
                <div class="item_left_xx">
                    <div class="item_left_title">
                        <span>
                            【14/16】桂圆红枣...
                        </span>
                        <span>
                            Longyan Red Dates Brown Su...
                        </span>
                    </div>
                    <span class="item_left_title_price">
                        <span>$1.99</span>
                        <span>+</span>
                    </span>
                </div>
            </div>
            <div class="item_reight">
                <img src="" alt="">
                <div class="item_right_xx">
                    <div class="item_reight_title">
                        <span>
                            【14/16】桂圆红枣...
                        </span>
                        <span>
                            Longyan Red Dates Brown Su...
                        </span>
                    </div>
                    <span class="item_reight_title_price">
                        <span>$1.99</span>
                        <span>+</span>
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { onMounted, ref, reactive } from "vue";
import { getSwiper } from "../../quest/date/home";

export default {

    set() {

        let url = "v2/list?page=2&limit=100";
        let img_list = reactive({ url: [] });

        onMounted(async () => {
            let res = await getSwiper(url)
            img_list.url = res.data
            console.log(url);

        })


        return {
            img_list,

        }
    }


}


</script>
<style lang="less" scoped>
@import url(./boutique.less);
</style>