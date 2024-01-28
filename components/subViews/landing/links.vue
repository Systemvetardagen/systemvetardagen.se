<template>
    <div class="container">
      <NuxtLink :to="localePath('/about')" class="link">
        <div class="link-container">
          <img src="@/assets/img/crowded-from-above.jpg" alt="Fair Floor" class="bg-img">
          <div class="foreground">
            <p class="link-text">{{$t('landing_page.links.about')}}</p>
          </div>
        </div>
    </NuxtLink>
    <NuxtLink :to="localePath('/')" class="link">
        <div class="link-container">
            <img src="@/assets/img/nod_11.jpg" alt="Nod Building" class="bg-img">
            <div class="foreground">
            <p class="link-text">{{$t('landing_page.links.plan_visit')}}</p>
            </div>
        </div>
    </NuxtLink>
    </div>
  </template>
  <script>

  </script>
  <style scoped>
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      row-gap: 1rem;
      column-gap: 3rem;
      margin-bottom: 2rem;
    }

    .link-container {
      position: relative;
      aspect-ratio: 4/3;
      width: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .bg-img {
      /*position: absolute;*/
      text-align: center;
      /*top: 0;
      left: 0;*/
      max-height: 100%;
      /*max-width: 100%;*/
      object-fit: cover;
      z-index: 1;
      filter: grayscale(100%) brightness(50%);
      transition: all .3s ease-in-out;
    }

    .link:hover .bg-img {
      filter: grayscale(100%) brightness(70%);
      transform: scale(1.03);
    }

    .foreground {
      position: absolute;
      /*position: relative;*/
      height: 100%;
      width: 100%;
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
      font-size: 1.1rem;
      transition: font-size 0.3s ease-in-out; /* Add transition properties */
      text-shadow: 0px 0px 16px rgba(0,0,0,0.8);
      font-family: OverpassMedium, sans-serif;
      font-weight: 300;
      line-height: 1.5;
      margin-bottom: 0;
    }

  </style>
