<template>
    <div class="container">
        <img class="floormap" src="@/assets/img/floormap-vertical.svg" alt="Floormap">
        <img class="floormap-horizontal" src="@/assets/img/floormap-horizontal.svg" alt="Floormap">
    </div>
</template>
<style  scoped >

    .container {
      margin: 2rem 0;
    }
    .floormap {
        /*padding: 3rem;*/
        /*max-width: 60rem;*/
        width: 100%;
        height: auto;
        /* object-fit: contain; */
    }

    .floormap-horizontal {
      padding: 3rem;
      max-width: 70rem;
      width: 100%;
      height: auto;
    }

    @media screen and (min-width: 600px) {
      .floormap {
        padding: 0 3rem;
      }
    }

    @media screen and (min-width: 1000px) {
      .floormap {
        display: none;
      }

      .floormap-horizontal {
        display: block;
      }
    }

    @media screen and (max-width: 1000px) {
      .floormap {
          display: block;
        }

        .floormap-horizontal {
          display: none;
        }
    }
</style>
