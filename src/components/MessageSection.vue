<template>
    <div class="message-section">
        <h3 class="message-thread-heading">{{ thread.name }}</h3>
        <ul class="message-list" ref="list">
            
        </ul>
        <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name : 'MessageSection',
    
    computed :{
        ...mapGetters({
            thread : 'currentThread',
            messages : 'currentMessages'
        }),
        sortedMessages() {
            return this.messages.sort((a,b) => a.timestamp - b.timestamp)
        }
    },
    watch: {
        'thread.lastMessage' : function() {
           this.$nextTick(() => {
                const ul = this.$refs.list;
                ul.scrollTop = ul.scrollHeight;
           })
        }
    },
    methods : {
        sendMessage(e) {
            const text = e.target.value;
            if(text.trim()) {
                this.$store.dispatch('sendMessage' , {
                    text,
                    thread: this.thread
                });
                e.target.value = '';
            }
        }
    }
}
</script>
