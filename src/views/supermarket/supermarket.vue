<template>
    <div id="supermarket">
        <div class="bar">
            <h2>
                超市购物
            </h2>
        </div>
        <seek></seek>



        <van-skeleton title :row="30" :row-width="rowWidth" v-if="0" />
    </div>
</template>
<script>
import {ref,reactive,defineComponent} from 'vue'
import seek from '../../components/global/seek/seek'
export default defineComponent({
    components: {
        seek,
    },
    setup() {

        let rowWidth = [340, 340, 340, 340, 340, 340, 340,]

        return {
            rowWidth,
        }
    }
})

</script>
<style lang="less" scoped>


@import url('./supermarket.less');
</style>
 