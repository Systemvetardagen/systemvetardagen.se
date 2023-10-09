<template>
<div class="wrapper">
    <h1 class="title">User Page</h1>
   <!-- <nuxt-img 
          class="post-img"
    /> -->

    <div class="userinformation">


    </div>
<div class="contentButtons">
    <Button :link="localePath('/user-page') + '/'" >Upload Content</Button>
      <Button :link="localePath('/user-page') + '/'" > Upload Pictures </Button> <!-- Translation needed-->
      </div>
</div>


</template>

<script>




</script>


<style>
.contentButtons {
    display: flex;
    align-items: center;
}
.post-img {
  max-width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
}
</style>