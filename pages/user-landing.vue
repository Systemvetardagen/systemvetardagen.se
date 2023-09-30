<template>
    <div class="wrapper container">
        <H1>User info page</H1>
        <div v-if="this.$auth.loggedIn" class="logged">
            <div class="loginInfo">
                <h2>You are logged in.</h2>
                <p>You have the following roles: </p>
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
            <div class="upload">
                <!-- <v-file-input label="File input"></v-file-input> -->
                <button class="btn btn-info" @click="onPickFile">Upload profile picture</button>
                <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"/>

                <button @click="uploadFile()">Upload File</button>
                <button @click="getFileUrl()">Get File URL</button>

                <nuxt-img
                    :src="this.fileUrl"
                    alt="no file yet!"
                ></nuxt-img>
                <img :src="this.fileUrl" alt="not file yet!">
            </div>
        </div>

        <div v-else-if="!this.$auth.loggedIn" class="logged">
            <div class="loginInfo">
                <h2>You are logged out!</h2>
                <p>Please log in.</p>
                <button
                    @click="logIn()"
                    >Log in
                </button>
            </div>
            <div class="upload">
                <v-file-input label="File input"></v-file-input>
            </div>
        </div>
    </div>
  

</template>

<script>
    
    export default {
        // props: {
        //     userRoles: this.getUserRoles()
        // },
        image: {
            domains: ['https://firebasestorage.googleapis.com']
        },
        data() {
            return {
                //userRoles: this.getUserRoles()
                file: null,
                fileUrl: "nothing"
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
            },
            async uploadFile() {
                //const storageRef = this.$fire.storage.ref().child(this.uploadFile.name)
                const message = 'Nuxt-Fire with Firebase Storage rocks!'
                const uploadTask = this.$fire.storage.ref(this.file.name).put(this.file)
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        //
                        alert('File uploaded')
                    },
                    (error) => console.log(error),
                    () => {
                        this.$fire.storage.ref().child(this.file.name).getDownLoadURL().then(url => {
                            console.log(url)
                        })
                    }
                )
                
            },
            async getFileUrl() {
                const storageRef = this.$fire.storage.ref().child(this.file.name)
                try {
                    const url = await storageRef.getDownloadURL()
                    //alert(`The file can be found here: ${url}`)
                    this.fileUrl = url
                    console.log(this.fileUrl)
                } catch (e) {
                    alert(e.message)
                }
            },
            onPickFile () {
                this.$refs.fileInput.click()
            },
            onFilePicked (event) {
                const files = event.target.files
                let filename = files[0].name
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.file = files[0]
            }
        }
    }
</script>

<style>
    .upload {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
    .loginInfo {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
</style>
