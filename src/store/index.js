import Vue from "vue";
import Vuex from "vuex";
import *as getters from './getters';
import *as actions from './actions';
import *as mutations from './mutations'
Vue.use(Vuex);

const state = {
    currentThreadID: null,
    thread: {
    /*id :{
        id,
        name,
        message:[...ids],
        lastMessage
    },*/
},
    messages: {
        /* 
        id:{
            id,
            threadId,
            threadName,
            authorName,
            text,
            timestamp,
            isRead
        }
        */
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
