export const threads = state=>state.threads;

export const currentThreadID = state =>{
    return state.currentThreadID
    ? state.threads[state.currentThreadID]
    :{}
}
export const currentMessages = state =>{
    const thread = currentThread(state);
    return thread.messges
    ?thread.messges.map(id => state.messges[id])
    :[]
}