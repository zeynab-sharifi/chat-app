import *as api from '../api';
import *as types from './mutations-types';

export const getAllMessages = ({commit}) =>{
    api.getAllMessages(message =>{
        commit(types.RECEIVE_ALL,{
            message
        })
    })
}