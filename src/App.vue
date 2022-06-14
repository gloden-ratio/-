<template>
  <!-- 头 -->
  <Spec></Spec>

  <router-view></router-view>

  <!-- 
    底部 -->
  <Navebar></Navebar>

  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>

<script>
import Navebar from './components/global/Navebar/Navebar'

import Spec from "./components/global/Spec/Spec";

export default {

  data() {
    return {
      Navebar, Spec
    }
  },
  components: {
    Navebar, Spec
  }

}




</script>
<style  lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;

  body {
    width: 100%;
    height: 100%;
    background: #fee4e2;
    overflow: hidden;


    #app {
      width: 100%;
      height: 100%;
      padding: 0 .2rem;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;



    }
  }

  body::-webkit-scrollbar {
    display: none; //Chorme
  }

  ;

  ::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>