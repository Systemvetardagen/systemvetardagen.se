<template>
    <div class="wrapper container">
        <H1>User info page</H1>
            <div v-if="this.$auth.loggedIn" class="logged">
            <h2>You are logged in.</h2>
            <p>You have the following roles: {{ userRoles }}</p>
            <button
                @click="logUserroles()"
            >
                Log roles
            </button>
            <button
                @click="logOut()"
                >Log out
            </button>
    </div>

    <div v-else-if="!this.$auth.loggedIn" class="logged">
        <h2>You are logged out!</h2>
        <p>Please log in.</p>
        <button
            @click="logIn()"
            >Log in
        </button>
    </div>
    </div>
  

</template>

<script>
    export default {
        // props: {
        //     userRoles: this.getUserRoles()
        // },
        data() {
            return {
                userRoles: this.getUserRoles()
            }
        },
        methods: {
            async logOut() {
                await this.$auth.logout()
            },
            logIn() {
                this.$auth.loginWith('auth0')

            },
            logUserroles() {
                console.clear()
                console.log(this.getUserRoles())
            },
            getUserRoles() {
                var myHeaders = new Headers();
                myHeaders.append("Accept", "application/json");
                myHeaders.append("Authorization", "Bearer "); // requires token that can be generated via the auth0 dashboard (management apI/api explorer)

                var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("https://dev-c8midue0dr5yhdtp.eu.auth0.com/api/v2/users/auth0%7C650457e35a0affc87201da40/roles", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            }
        }
    }
</script>

<style>
    .container {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container h1 {
        padding-bottom: 1rem;
    }
    .logged {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
