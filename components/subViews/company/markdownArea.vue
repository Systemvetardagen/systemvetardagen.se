<template>
    <div v-html="htmlContent" :id="$style.htmlContainer"></div>
  </template>

  <script>
  export default {
    props: {
        htmlContent: String
    }
  };
  </script>

  <style module>
    #htmlContainer {
      letter-spacing: 0;
      line-height: 1.5;
    }
    #htmlContainer > h1 {
        font-size: 2rem;
        margin: 1.5rem 0;
    }
    #htmlContainer > h2 {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 0rem;
    }
    #htmlContainer > h3 {
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 0;
    }
    #htmlContainer > li {
        margin: 0.2rem 0;
        line-height: 1.5;
    }
    #htmlContainer > ul {
        /*padding-left: 2rem;*/
    }
    #htmlContainer > p {
      margin: 0.2rem 0 0.7rem 0;
      line-height: 1.5;
    }

    #htmlContainer a {
      text-decoration: underline;
    }
  </style>
