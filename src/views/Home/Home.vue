<template>
  <div id="home">

    <!-- 搜索 -->
    <form action="/">
      <van-search v-model="value" input-align="center" shape="round" placeholder="请输入搜索关键词" @search="onSearch" clearable
        autofocus autocomplete />
    </form>

    <!-- icon -->
    <ul>
      <li v-for="item in lists" class="li_item clearfix">
        <template v-for="it in item">
          <div>
            <router-link to="">
              <img :src="it.url" />
              <span>
                {{ it.text }}
              </span>
            </router-link>
          </div>
        </template>
      </li>
    </ul>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image" width="200">
        <router-link to="/">
          <img :src="image" />
        </router-link>
      </van-swipe-item>
    </van-swipe>

    <!-- 通知 -->
    <div class="in_from">
      <van-notice-bar left-icon="volume-o" :scrollable="false" :color="color" :background="background" name="volume-o">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>{{ meg.xx }}</van-swipe-item>
          <van-swipe-item>{{ meg.ss }}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </div>
    <div class="red_packet ">
      <img src="img/red_packet.PNG" alt="">
    </div>
    <div class="grid">
      <div class="text">
        <span>小猪外卖</span>
        <span>美妆精选</span>
      </div>
      <div class="grid_child">
        <div class="grid_left_div">
          <router-link to="/home">
            <img src="img/left.png" alt="">
          </router-link>
        </div>
        <div class="grid_right_div">
          <div class="right_div_1">
            <routerLink to="/shopping">
              <img src="img/right.png" alt="">
            </routerLink>
          </div>
          <div class="right_baojian">保健护理</div>
          <div class="right_div_2">
            <router-link to="/supermarket">
              <img src="img/grid_left.PNG" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { ref, computed } from 'vue';
export default {

  setup() {

    //下拉刷新  


    //搜索
    const value = ref('');
    const onSearch = (val) => {
      Toast(val),
        this.value = ''
    };

  // 轮播
    const images = [
      'img/swipe1.png',
      'img/swipe2.png',
      'img/swipe3.png',
    ];


    return {
      value,
      onSearch,
      images,
    
    };
  },

  data() {
    return {
      //通知
      color: '#040303',
      background: "#fee4e2",
      meg: {
        xx: "无论我们能活多久，我们能够享受的只有无法分割的此刻.",
        ss: "及时答复基石无人机地顶起。",
      },
      color: "#040303",
      background: "#fee4e2",

      //icon
      lists: [

        [
          { text: "爆款热销", url: 'img/2.PNG' },
          { text: "房产热销", url: 'img/3.png' },
          { text: "留学升学", url: 'img/4.png' },
          { text: "领券优惠", url: 'img/5.png' },
          { text: "会员中心", url: 'img/6.png' },
        ],
        [
          { text: "特惠专区", url: 'img/7.png' },
          { text: "美妆保健", url: 'img/8.png' },
          { text: "超市购物", url: 'img/9.png' },
          { text: "接机叫车", url: 'img/10.png' },
          { text: "接机叫车", url: 'img/10.png' },
        ]
      ]
    }

  },

  methods: {
    // git_img(value) {

    //   return new URL(`../../assets/${value}`, import.meta.url).href;
    // }

    xx() {
      console.log('xx');
    }

  }
}
</script>
<style lang="less" scoped>
@import url(./Home.less);
</style>
