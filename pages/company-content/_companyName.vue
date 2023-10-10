<template>
  <div class="wrapper container">
    <loading v-if="loading"></loading>
    <div v-else class="company-wrapper">
      <div class="background-image">
        <img v-if="backgroundImage" :src="backgroundImage" alt="Background" />
        <div v-else>
          <input
            type="file"
            style="display: none"
            ref="backgroundImageInput"
            accept="image/*"
            @change="onBackgroundImagePicked"
          />
          <label
            for="backgroundImageInput"
            class="upload-label"
            @click="onPickBackgroundImage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              id="upload"
            >
              <path
                d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199 0 .256.02.508.057.756a3.567 3.567 0 0 0-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"
              ></path>
            </svg>
            <span>Upload</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import { getDataFromDataBase, uploadDataToStorage, writeToDataBase } from "@/app/firebase.js";
import json from "@nuxtjs/content/lib/parsers/markdown/compilers/json";

export default {
  // props: {
  //     userRoles: this.getUserRoles()
  // },
  async mounted() {
    this.companyName = this.$route.params.companyName;
    const data = await getDataFromDataBase(`companies/${this.companyName}`);
    if (data) {
      this.backgroundImage = data.backgroundImage.url
    }
    this.loading = false;
  },
  image: {
    domains: ["https://firebasestorage.googleapis.com"],
  },
  data() {
    return {
      //userRoles: this.getUserRoles()
      file: null,
      fileUrl: "nothing",
      companyName: "nothing",
      backgroundImage: null,
      loading: true,
      loggedIn: true,
    };
  },
  methods: {
    onPickBackgroundImage() {
      this.$refs.backgroundImageInput.click();
    },
    async onBackgroundImagePicked(event) {
      const files = event.target.files;
      const name = files[0].name;
      let url = URL.createObjectURL(files[0]);
      this.backgroundImage = url;
      let downloadUrl = await uploadDataToStorage(
        `${this.companyName}/${name}`,
        files[0]
      );
      writeToDataBase(`${this.companyName}/backgroundImage`, {url: downloadUrl, name: name})
    },
  },
};
</script>

<style>
.company-wrapper {
  width: 95%;
  margin: 0px auto;
}
.background-image {
  width: 100%;
  margin-bottom: 2rem;
}

.background-image div {
  height: calc(95vw / 4);
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image img {
  height: calc(95vw / 4);
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.upload-label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
