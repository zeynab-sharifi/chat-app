import Vue from 'vue';
import * as types from './mutation-types';

export default {
    [types.RECEIVE_ALL](state ,{ messages }) {
        let latestMessage;
        messages.forEach(message => {
            if(!state.threads[message.threadID]) {
                createThread(state, message.threadID , message.threadName);
            }

            if(!latestMessage || message.timestamp > latestMessage.timestamp) {
                latestMessage = message;
            }

            addMessage(state, message);
        })
        setCurrentThread(state,latestMessage.threadID);
    }
}


const createThread = (state , id , name) => {
    Vue.set(state.threads , id , {
        id,
        name,
        messages : [],
        lastMessage : null
    })
}

const addMessage = (state, message) => {
    message.isRead = message.threadID === state.currentThreadID;
    const thread = state.threads[message.threadID];
    if(!thread.messages.some(id => id === message.id)) {
        thread.messages.push(message.id);
        thread.lastMessage = message;
    }

    Vue.set(state.messages , message.id , message)
}

const setCurrentThread = (state , id) => {
    state.currentThreadID = id;
    state.threads[id].lastMessage.isRead = true;
}
