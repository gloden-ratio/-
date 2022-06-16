<template>
    <!-- header -->

    <van-nav-bar fixed :title="title" style="background:#fee4e2">

    </van-nav-bar>
    <div class="van-safe-area-top"></div>
</template>
<script >
export default {

    setup() {

        return {
            title: "叮当小猪MALL",


        }
    }
}
</script>
<style lang="less">

.van-nav-bar {

    .van-nav-bar__title {
        margin: 0 .3rem;
        font-size: .4rem;

    }
}

:root {
    --van-nav-bar-title-text-color: "red";
    --van-line-height-lg: auto;
    --van-nav-bar-height: 1rem;
}
</style>