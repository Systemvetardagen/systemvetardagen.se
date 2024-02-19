<template>
    <div class="studentnode">
        <img src="@/assets/img/nod_07.jpg" alt="" />
        <h2 class="heading">{{ $t('landing_page.student_node.book_session') }}</h2>
        <p>{{$t('landing_page.student_node.intro')}}</p>
        <a
            href="https://mitt.systemvetardagen.se/"
            class="btn"
            >{{$t('landing_page.student_node.button')}}
        </a>
    </div>


</template>


<script>
export default {
  name: "studentnode",
};
</script>

<style scoped>

img {
  width: 100%;
  aspect-ratio: 4 / 2;
  /*-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  /*filter: grayscale(100%);*/
  object-fit: cover;
  object-position: 0 10%;
}

.studentnode{
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 0 1.5rem;
    text-align: center;

}
.heading {
 font-family: OverpassMedium;
 font-size: 1.5rem;
 margin-bottom: 0;
}
.btn {
    /* Alignment */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Shape and Background */
    padding: 0.6em 1.5em;
    border: none;
    border-radius: 3rem;

    /* Text */
    font-weight: 500;
    text-decoration: none;
    font-size: 1.22rem;
    color: var(--clr-grey-900);
    border: solid 0.15rem var(--clr-grey-900);
  }

  .btn.hovered {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(245, 245, 245);
  }

</style>
