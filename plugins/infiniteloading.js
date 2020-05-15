import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, {
    slots: {
        noMore: '已經到底嘍！',
    }
});