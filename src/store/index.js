import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    // 모듈 불러오는 것
    modules: {
        todo: todo,
        user: user
    }
})