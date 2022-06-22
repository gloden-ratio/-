<template>
  <div id="home">
    <Spec></Spec>
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
      <van-swipe-item v-for="image in sdf.images" :key="image" width="200">
        <router-link to="/">
          <img :src="image.download_url" />
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
            <routerLink to="/shoppingCart">
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
    <!-- title -->
    <TUA></TUA>
  </div>
</template>
<script>
// import axios from 'axios';
import { ref, onMounted, reactive, defineComponent } from 'vue';
import { Toast } from 'vant'
import { getSwiper } from "../../quest/date/home";
import Spec from "../../components/global/Spec/Spec";
import TUA from "../../components/TUA/TUA";
export default defineComponent({

  components: {
    TUA, Spec
  },

  setup() {

    //搜索
    let placeholder = '请输入搜索内容'
    const value = ref(placeholder);
    const onSearch = (value) => {
      Toast(value),
        this.value = ''
    };


    // 轮播
    var sdf = reactive({
      images: [

      ]
    })
    onMounted(
      async () => {
        let URL = { url: '/v2/list', method: 'get' }
        let res = await getSwiper(URL)
        sdf.images = res.data
        // console.log(res);
      },
    );
    const active = ref(0);

    // title 数据 

    return {
      value,
      onSearch,
      // images,
      sdf,




      //通知
      color: '#040303',
      background: "#fee4e2",

      meg: {
        xx: "无论我们能活多久，我们能够享受的只有无法分割的此刻.",
        ss: "及时答复基石无人机地顶起。",
      },
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
  }

})

</script>
<style lang="less">
@import url(./Home.less);
</style>

