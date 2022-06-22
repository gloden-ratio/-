<template>
    <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" />
    </form>


</template>
<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
    setup() {
        const value = ref('');
        const onSearch = (val) => console.log(val);;
        return {
            value,
            onSearch,
        };
    },
};



</script>
<style>
</style>