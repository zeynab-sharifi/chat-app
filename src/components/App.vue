<template>
    <div class="chatapp">
        <thread-section></thread-section>
        <!-- <message-section></message-section> -->
    </div>
</template>

<script>
    import ThreadSection from "./ThreadSection.vue";
    export default {
        name: 'App',
        created() {
            this.$store.dispatch('getAllMessages');
        },
        components:{
            ThreadSection
        }
    }
</script>
<style src="../css/chat.css"></style>