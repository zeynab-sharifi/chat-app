<template>
    <div class="chatapp">
        <!-- <thread-section></thread-section>
        <message-section></message-section> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        this.$store.dispatch('getAllMessages');
    }
}
</script>