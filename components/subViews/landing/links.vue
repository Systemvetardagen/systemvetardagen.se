<template>
    <div class="container">
      <a href="#" class="link">
        <div class="link-container">
          <img src="@/assets/img/fair_bw.png" alt="Fair Floor" class="bg-img">
          <div class="foreground">
            <p class="link-text">{{$t('landing_page.links.about')}}</p>
          </div>
        </div>
      </a>
      <a href="#" class="link">
        <div class="link-container">
          <img src="@/assets/img/nod_11.jpg" alt="Nod Building" class="bg-img">
          <div class="foreground">
            <p class="link-text">{{$t('landing_page.links.plan_visit')}}</p>
          </div>
        </div>
      </a>
    </div>
  </template>
  <script>
  
  </script>
  <style scoped>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  
    .link-container {
      position: relative;
      aspect-ratio: 4/3;
      width: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .bg-img {
      position: absolute;
      text-align: center;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
      filter: grayscale(100%) brightness(60%);
    }
  
    .link:hover .bg-img {
      filter: grayscale(0%) brightness(80%);
    }
  
    .foreground {
      position: relative;
      display: flex;
      z-index: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
    }
  
    .link-text {
      color: white;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      transition: font-size 0.3s, color 0.3s; /* Add transition properties */
    }
  
    .link:hover .link-text {
      font-size: 1.2rem; /* Increase font size on hover */
      color: var(--clr-pink-700); /* Change color on hover */
    }
  
    @media only screen and (min-width: 720px) {
      .container {
        flex-direction: row;
        justify-content: center;
        gap: 5rem;
      }
    }
  </style>
  