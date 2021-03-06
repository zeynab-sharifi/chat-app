import * as api from '../api';
import * as types from './mutation-types';

export const getAllMessages = ({ commit }) => {
    api.getAllMessages(messages => {
        commit(types.RECEIVE_ALL , { 
            messages
        });
    })
    
}
export const swtichThread = ({ commit } , payload) =>{
    commit(types.SWITCH_THREAD , payload);
}
export const sendMessage = ({ commit } , payload) => {
    api.createMessage(payload , message => {
        commit(types.RECEIVE_MESSAGE , { message })
    })
} 