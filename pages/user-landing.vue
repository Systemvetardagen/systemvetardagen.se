<template>
    
    <div v-if="this.$auth.loggedIn" class="logged">
        <h2>You are logged in.</h2>
        <p>You have the following roles: </p>
        <button
            @click="this.$auth.logout()"
        >Log out</button>
    </div>

    <div v-else-if="!this.$auth.loggedIn" class="logged">
        <h2>You are logged out!</h2>
        <p>Please log in.</p>
        <button
            @click="this.$auth.loginWith('auth0')">
            Log in
        </button>
    </div>

</template>

<script>
    export default {
    
    }
</script>

<style>
    .logged {
        display: flex;
    }
</style>
