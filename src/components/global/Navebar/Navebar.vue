<script >

import { ref } from 'vue';

export default {
 setup() {
  const active = ref(0);
  return { active, };
 },
};

</script>

<template>
 <van-tabbar route fixed placeholder active-color="#f0abab">
  <van-tabbar-item replace to="/home" icon="graphic">首页</van-tabbar-item>
  <van-tabbar-item replace to="/" dot icon="shop">外卖</van-tabbar-item>
  <van-tabbar-item replace to="/#" icon="shop-collect">商超</van-tabbar-item>
  <van-tabbar-item replace to="/#" badge="5" icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/#" icon="setting">我的</van-tabbar-item>
 </van-tabbar>
</template>


<style lang="less" scode>
.van-tabbar__placeholder {
 position: absolute;
 left: 0;
 bottom: 0;
 right: 0;
 border-top: .1rem;
  border-radius: .4rem .4rem 0 0;
 .van-tabbar {
    border-top: .03rem solid #fff;
    height: 1.5rem;
    border-radius: .4rem .4rem 0 0;
    .van-tabbar-item{
        font-size:.32rem;

        .van-icon{
            font-size: .6rem;

        }

    }

 }


}

:root {
    
 --van-font-size-sm: .3rem;
 --van-tabbar-background: #fff;
 --van-tabbar-item-line-height: .5rem;
 --van-tabbar-item-text-color: #c5c5c5;

}
</style>