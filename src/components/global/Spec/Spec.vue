<template>
<!-- header -->
 <van-nav-bar fixed :title="title" style="background:#fee4e2">

 </van-nav-bar>
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
<style lang="less" scode>

.van-nav-bar{

 .van-nav-bar__title {
  margin: 0 .3rem;
  font-size: .48rem;
 }
}


:root {
    --van-nav-bar-title-text-color: "red";
 --van-line-height-lg: auto;
 --van-nav-bar-height: 1rem;
// --van-background-color-light
}
</style>
